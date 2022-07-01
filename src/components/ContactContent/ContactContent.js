import styled from 'styled-components';
import PropTypes from 'prop-types';

import { size } from 'styles/variables';

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
  ${size.tabletMin} {
    display: inline-block;
    :not(:last-child) {
      margin-right: 20px;
    }
  }

  line-height: 1.2;
  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

const Span = styled.span`
  color: #ff6600;
`;
