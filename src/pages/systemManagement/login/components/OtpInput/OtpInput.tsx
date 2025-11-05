import React, { useRef, ChangeEvent, KeyboardEvent } from 'react';
import styled from 'styled-components';

interface OTPInputProps {
  length?: number;
  onChange?: (otp: string) => void;
}

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  direction: ltr;
`;

const Input = styled.input`
  width: 2rem;
  height: 2rem;
  font-size: 18px;
  text-align: center;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border 0.2s;

  &:focus {
    border-color: #007bff;
  }
`;

const OTPInput: React.FC<OTPInputProps> = ({ length = 6, onChange }) => {
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value.replace(/\D/g, '');

    if (!value) return;

    e.target.value = value.charAt(0);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    const otp = inputsRef.current.map(input => input?.value || '').join('');
    onChange?.(otp);
  };

  const allowedKeys = ['Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Tab'];

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    if (allowedKeys.includes(e.key)) {
      if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
        inputsRef.current[index - 1]?.focus();
      }
      return;
    }

    if (!/^[0-9]$/.test(e.key)) {
      e.preventDefault();
    }
  };

  return (
    <Container>
      {Array.from({ length }).map((_, index) => (
        <Input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={el => (inputsRef.current[index] = el)}
          onChange={e => handleChange(e, index)}
          onKeyDown={e => handleKeyDown(e, index)}
        />
      ))}
    </Container>
  );
};

export default OTPInput;
