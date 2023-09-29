export const getTimeFromISOString = (isoDateString: string) => {
  const date = new Date(isoDateString);

  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${hours}:${minutes}`;
};
