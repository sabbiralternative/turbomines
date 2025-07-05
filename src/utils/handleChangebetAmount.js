export const handleChangeBetAmount = (type, betAmount, setBetAmount) => {
  if (type === "minus") {
    if (betAmount > 0 && betAmount <= 100) {
      setBetAmount((prev) => Math.max(prev - 10, 0));
    } else if (betAmount > 100 && betAmount <= 1000) {
      setBetAmount((prev) => Math.max(prev - 100, 0));
    } else if (betAmount > 1000) {
      setBetAmount((prev) => Math.max(prev - 500, 0));
    }
  }
  if (type === "plus") {
    if (betAmount >= 0 && betAmount < 100) {
      setBetAmount((prev) => prev + 10);
    } else if (betAmount >= 100 && betAmount < 1000) {
      setBetAmount((prev) => prev + 100);
    } else if (betAmount >= 1000) {
      setBetAmount((prev) => prev + 500);
    }
  }
};
