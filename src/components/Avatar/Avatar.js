import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { size } from 'styles/variables';

const Avatar = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;

const Img = styled.img`
  background-color: #ffffff;
  border: 1px solid #ffffff;
  border-radius: 50%;
`;
