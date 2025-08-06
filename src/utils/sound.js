import sound from "../assets/sound";

const playSound = (src) => new Audio(src).play();

export const playBetSound = () => playSound(sound.bet);
export const playCashOutSound = () => playSound(sound.cashOut);
export const playDiamondSound = () => playSound(sound.diamond);
export const playMineSound = () => playSound(sound.mine);
export const playSettingsSound = () => playSound(sound.settings);
export const playStakeSound = () => playSound(sound.stake);
export const playTileSound = () => playSound(sound.tile);
export const playTurboSound = () => playSound(sound.turbo);
