export const authUtil = () => {
  const getSessionTokenFromLocalStorage = () => {
    const sessionKey = localStorage.getItem("SessionKey");
    return sessionKey ? JSON.parse(sessionKey) : null;
  };

  const saveTokenToLocalStorage = (tokenName, token) => {
    localStorage.setItem(tokenName, JSON.stringify(token));
  };

  const removeTokenFromLocalStorage = (tokenName) => {
    localStorage.removeItem(tokenName);
  };

  return {
    getSessionTokenFromLocalStorage,
    saveTokenToLocalStorage,
    removeTokenFromLocalStorage,
  };
};