export const fetchify = (isFetched, content) => {
  if (isFetched) {
    return "Loading ...";
  }
  if (content) {
    return content;
  }

  return null;
};
