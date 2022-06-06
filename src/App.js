import { useEffect, Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
// import { Toaster } from 'react-hot-toast';
import * as operations from 'redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from 'redux/auth/auth-selectors';
import { getLoading } from 'redux/selectors';
import AppBar from 'components/AppBar/AppBar';
import PublicRoute from 'components/PublicRoute/PublicRoute';
import PrivateRoute from 'components/PrivateRoute/PrivateRoute';
import Spinner from 'components/Spinner/Spinner';

const HomePage = lazy(() =>
  import('pages/HomePage/HomePage' /* webpackChunkName: "Home" */),
);
const ContactsPage = lazy(() =>
  import('pages/ContactsPage/ContactsPage' /* webpackChunkName: "Contacts" */),
);
const RegisterPage = lazy(() =>
  import('pages/RegisterPage/RegisterPage' /* webpackChunkName: "Register" */),
);
const LoginPage = lazy(() =>
  import('pages/LoginPage/LoginPage' /* webpackChunkName: "Login" */),
);

function App() {
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);
  const loading = useSelector(getLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.currentUser());
  }, [dispatch]);

  return (
    <>
      {/* <Toaster position="top-right" /> */}
      {!isFetchingCurrentUser && (
        <>
          <AppBar />
          {loading && <Spinner />}
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={
                  <PublicRoute>
                    <HomePage />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="register"
                element={
                  <PublicRoute restricted>
                    <RegisterPage />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginPage />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Suspense>
        </>
      )}
    </>
  );
}

export default App;
