import { HeaderOptions } from "../enums";

export const getScreenTitle = (screenType) => {
  switch (screenType) {
    case HeaderOptions.ALL_NOTES:
      return "All Notes";
    case HeaderOptions.FAVORITES:
      return "Favorites";
    case HeaderOptions.LOCKED:
      return "Locked Notes";
    case HeaderOptions.RECYCLE_BIN:
      return "Recycle Bin";
    default:
      return "Notes";
  }
};
