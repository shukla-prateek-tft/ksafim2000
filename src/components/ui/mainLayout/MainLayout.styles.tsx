import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const Section = styled.section``;
const HeaderWrapper = styled.header`
  margin: 0;
  position: fixed;
  width: 100%;
  height: 6vh;
  z-index: 1000;
`;
const SideBarWrapper = styled.div`
  display: flex;
  padding: 0;
  margin: 0;
  width: '100%';
`;
const MainWrapper = styled(motion.main)`
  height: 94vh;
  padding-top: 6vh;
  width: 100%;
  @media print {
    height: 100vh;
    padding: 0;
  }
`;
export { Section, MainWrapper, SideBarWrapper, HeaderWrapper };
