export const useSessionStorage = () => {
  const setSession = (tokenName, tokenValue) => {
    sessionStorage.setItem(tokenName, JSON.stringify(tokenValue));
  };

  const getSession = (tokenName) => {
    const tokenValue = sessionStorage.getItem(tokenName);
    return tokenValue ? JSON.parse(tokenValue) : null;
  };

  const removeSession = (tokenName) => {
    sessionStorage.removeItem(tokenName);
  };

  return {
    setSession,
    getSession,
    removeSession,
  };
};
