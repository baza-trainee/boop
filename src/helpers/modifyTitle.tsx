export const modifyTitle = (str: string) => {
  const strArray = str.split(' ');
  const firstString = strArray.slice(0, strArray.length - 1).join(' ');
  if (
    strArray[strArray.length - 1] === 'українською' ||
    strArray[strArray.length - 1] === 'англійською' ||
    strArray[strArray.length - 1] === 'італійською'
  ) {
    return (
      <span className="mb-1 block">
        {firstString}{' '}
        <strong className="font-[700]">{strArray[strArray.length - 1]}</strong>{' '}
      </span>
    );
  }
  return <span>{str}</span>;
};
