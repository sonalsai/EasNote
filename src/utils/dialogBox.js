import { DialogType } from "../enums";

export const getDialogTitle = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Confirm Delete";
    default:
      return "Dialog Title";
  }
};

export const getDialogMessage = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Are you sure you want to delete this note? You won’t be able to get it back.";
    default:
      return "Are you sure?";
  }
};

export const getActionBtnClass = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "deleteBtn";
    default:
      return "confirmBtn";
  }
};

export const getActionBtnText = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Delete";
    default:
      return "Confirm";
  }
};
