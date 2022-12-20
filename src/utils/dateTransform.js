export const setDate = (date) => {
  if (!date) return '--/--/----';
  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  };
  return new Intl.DateTimeFormat('en-GB', options)
    .format(new Date(date)).split('/').join('.');
};

