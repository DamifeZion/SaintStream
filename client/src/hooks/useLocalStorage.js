export const useLocalStorage = () => {
  const setToken = (tokenName, tokenValue) => {
    localStorage.setItem(tokenName, JSON.stringify(tokenValue));
  };

  const getToken = (tokenName) => {
    const tokenValue = localStorage.getItem(tokenName);
    return tokenValue ? JSON.parse(tokenValue) : null;
  };

  const removeToken = (tokenName) => {
    localStorage.removeItem(tokenName);
  };

  return {
    setToken,
    getToken,
    removeToken,
  };
};
