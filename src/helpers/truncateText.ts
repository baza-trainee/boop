const truncateText = (text: string, maxChars: number): string => {
  const truncatedText =
    text.length > maxChars ? text.substring(0, maxChars) + '...' : text;
  return truncatedText;
};
export default truncateText;
