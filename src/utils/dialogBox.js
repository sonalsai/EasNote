import { DialogType } from "../enums";

export const getDialogTitle = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Confirm Delete";
    case DialogType.CONFIRM_MOVE_TO_TRASH:
      return "Move to Trash";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "Confirm Close";
    case DialogType.CONFIRM_ADD_CLOSE:
      return "Confirm Close";
    default:
      return "Dialog Title";
  }
};

export const getDialogMessage = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Are you sure you want to permanently delete this note? You won’t be able to get it back.";
    case DialogType.CONFIRM_MOVE_TO_TRASH:
      return "Are you sure you want to move this note to the trash?";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "You have unsaved changes. Are you sure you want to close without saving?";
    case DialogType.CONFIRM_ADD_CLOSE:
      return "You have unsaved changes. Are you sure you want to close without saving?";
    default:
      return "Are you sure?";
  }
};

export const getActionBtnClass = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "deleteBtn";
    case DialogType.CONFIRM_MOVE_TO_TRASH:
      return "trashBtn";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "editCloseBtn";
    case DialogType.CONFIRM_ADD_CLOSE:
      return "addCloseBtn";
    default:
      return "confirmBtn";
  }
};

export const getActionBtnText = (dialogType) => {
  switch (dialogType) {
    case DialogType.CONFIRM_DELETE:
      return "Delete";
    case DialogType.CONFIRM_MOVE_TO_TRASH:
      return "Move to Trash";
    case DialogType.CONFIRM_EDIT_CLOSE:
      return "Close";
    case DialogType.CONFIRM_ADD_CLOSE:
      return "Close";
    default:
      return "Confirm";
  }
};
