import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

const PublicRoute = ({ children, restricted }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;

  return shouldRedirect ? <Navigate to="/contacts" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.node,
  restricted: PropTypes.bool,
};

export default PublicRoute;
