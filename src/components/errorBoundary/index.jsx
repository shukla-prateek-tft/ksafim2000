import React, { Component } from 'react';
import styled from 'styled-components';
import { Button } from '../ui/buttons';
import { ErrorAnimation } from '@/assets/animations';
import { AnimationCard } from '../ui';

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const TitleText = styled.div``;

const ButtonStyle = {
  marginTop: '20px',
  backgroundColor: 'rgb(255,199,0)',
  padding: '10px 60px',
  color: 'black',
  fontWeight: '700'
};

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, redirect: false, countdown: 50 };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI on error
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error details to an external service or console
    console.error('Error caught in ErrorBoundary:', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };
  componentDidUpdate() {
    if (this.state.hasError && this.state.countdown > 0) {
      setTimeout(() => {
        this.setState(prevState => ({
          countdown: prevState.countdown - 1
        }));
      }, 1000);
    }

    if (this.state.countdown === 0) {
      this.handleReload();
    }
  }
  render() {
    if (this.state.redirect) {
      return null;
    }

    if (this.state.hasError) {
      return (
        <Container>
          <AnimationCard
            style={{ height: '30%', width: '30%' }}
            loop={false}
            data={ErrorAnimation}
          />
          <TitleText>Redirecting to home in {this.state.countdown} seconds...</TitleText>
          <Button
            style={ButtonStyle}
            variant="success"
            title="Back To Home"
            onClick={this.handleReload}
          />
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
