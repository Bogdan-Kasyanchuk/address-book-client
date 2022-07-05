export const getIsLoggedIn = state => state.auth.isLoggedIn;
export const getUserName = state => state.auth.user.name;
export const getUserAvatarUrl = state => state.auth.user.avatarUrl;
export const getToken = state => state.auth.token;
export const getIsFetchingCurrentUser = state =>
  state.auth.isFetchingCurrentUser;
