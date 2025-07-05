export const generateRoundId = () => {
  const timestamp = Date.now();
  const random = Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
  const round_id = timestamp + random;
  return round_id;
};
