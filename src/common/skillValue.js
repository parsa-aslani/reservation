const skillValue = (prevdata, max) => {
  const randomnum = Math.floor(Math.random() * 12);
  return Math.min(prevdata + randomnum, max);
};
export default skillValue;
