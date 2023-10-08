export const useLocalStorage = () => {
  const setStorage = (key_string, value) => {
    localStorage.setItem(key_string, JSON.stringify(value));
  };

  const getStorage = (key_string) => {
    const item = localStorage.getItem(key_string);
    return item ? JSON.parse(item) : null;
  };

  const removeStorage = (key_string) => {
    localStorage.removeItem(key_string);
  };

  return {
    setStorage,
    getStorage,
    removeStorage,
  };
};
