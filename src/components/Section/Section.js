import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size } from 'styles/variables';

const Section = ({ children }) => {
  return <SectionTag>{children}</SectionTag>;
};

Section.propTypes = {
  children: PropTypes.node,
};

export default Section;

const SectionTag = styled.section`
  padding-top: 76px;
  padding-bottom: 20px;

  ${size.tabletMin} {
    padding-top: 86px;
  }

  ${size.laptopMin} {
    padding-top: 102px;
  }
`;
