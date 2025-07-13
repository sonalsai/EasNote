import { DialogType } from "../enums";

export const getDialogTitle = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Confirm Delete";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "Confirm Close";
    default:
      return "Dialog Title";
  }
};

export const getDialogMessage = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Are you sure you want to delete this note? You won’t be able to get it back.";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "You have unsaved changes. Are you sure you want to close without saving?";
    default:
      return "Are you sure?";
  }
};

export const getActionBtnClass = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "deleteBtn";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "editCloseBtn";
    default:
      return "confirmBtn";
  }
};

export const getActionBtnText = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Delete";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "Close";
    default:
      return "Confirm";
  }
};
