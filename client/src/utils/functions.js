export const isLocal = (url) => {
  return url.includes('localhost') || url.includes('127.0.0.1');
};
