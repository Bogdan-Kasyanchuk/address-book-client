import PropTypes from 'prop-types';
import styled from 'styled-components';
import { size, accentColor } from 'styles/variables';

const ContactContent = ({ element }) => {
  return (
    <div>
      <P>
        <Span>Name:</Span> {element.name}
      </P>
      <P>
        <Span>Phone:</Span> {element.phone}
      </P>
      <P>
        <Span>Email:</Span> {element.email}
      </P>
      {element.address && (
        <P>
          <Span>Address:</Span> {element.address}
        </P>
      )}
      {element.other && (
        <P>
          <Span>Other:</Span> {element.other}
        </P>
      )}
    </div>
  );
};

ContactContent.propTypes = {
  element: PropTypes.shape({
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string,
    other: PropTypes.string,
  }),
};

export default ContactContent;

const P = styled.p`
  line-height: 1.2;

  :not(:last-child) {
    margin-bottom: 10px;
  }

  ${size.tabletMin} {
    display: inline-block;
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;

const Span = styled.span`
  color: ${accentColor};
`;
