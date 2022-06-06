import PropTypes from 'prop-types';
import styled from 'styled-components';

const Img = styled.img`
  width: 50px;
  border-radius: 50%;
  margin-right: 15px;
`;

const Image = ({ src, alt }) => {
  return <Img src={src} alt={alt} />;
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Image;
