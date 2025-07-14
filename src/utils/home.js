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

export const getNoNotesAvailableText = (screenType) => {
  switch (screenType) {
    case HeaderOptions.ALL_NOTES:
      return "No Notes Available";
    case HeaderOptions.FAVORITES:
      return "No Favorite Notes Available";
    case HeaderOptions.LOCKED:
      return "No Locked Notes Available";
    case HeaderOptions.RECYCLE_BIN:
      return "No Deleted Notes Available";
    default:
      return "No Notes Available";
  }
};
