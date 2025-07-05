import sound from "../assets/sound";

export const playBetSound = () => {
  return new Audio(sound.bet).play();
};
export const playSelectSound = () => {
  return new Audio(sound.select).play();
};
export const playStakeSound = () => {
  return new Audio(sound.stake).play();
};
export const playWinSound = () => {
  return new Audio(sound.win).play();
};
