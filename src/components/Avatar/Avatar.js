import PropTypes from 'prop-types';
import styled from 'styled-components';
import { firstColor } from 'styles/variables';

const Avatar = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Avatar;

const Img = styled.img`
  border: 1px solid ${firstColor};
  border-radius: 50%;
  background-color: ${firstColor};
`;
