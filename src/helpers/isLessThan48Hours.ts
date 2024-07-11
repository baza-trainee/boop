export function isLessThan48Hours(dateString: Date | string): boolean {
  const givenDate = new Date(dateString).getTime();
  const currentDate = new Date().getTime();

  const timeDifference = Math.abs(currentDate - givenDate);
  const hoursDifference = timeDifference / (1000 * 60 * 60);

  return hoursDifference < 48;
}
