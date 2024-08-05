const highlightWords = (text, wordsToHighlight) => {
  const regex = new RegExp(`(${wordsToHighlight.join('|')})`, 'gi');
  const parts = text.split(regex);

  return parts.map((part, index) =>
    wordsToHighlight.some(
      (word) => word.toLowerCase() === part.toLowerCase()
    ) ? (
      <span key={index} className="font-bold text-yellow">
        {part}
      </span>
    ) : (
      <span key={index}>{part}</span>
    )
  );
};
export default highlightWords;
