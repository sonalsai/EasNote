import "./DialogBox.scss";
import closeIcon from "../../assets/closeIcon.svg";
import { useEffect, useState } from "react";
import { DialogType } from "../../enums";
import {
  getActionBtnClass,
  getActionBtnText,
  getDialogMessage,
  getDialogTitle,
} from "../../utils/dialogBox";

const DialogBox = ({
  deleteNoteId,
  dialogType,
  setShowDialogBox,
  setDialogType,
  setDeleteNoteId,
  setShowAddNoteForm,
  setEditNoteData,
  fetchNotes,
  toastRef,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (dialogType) {
      setIsVisible(true);
    }
  }, [dialogType]);

  const handleAction = () => {
    if (
      dialogType === DialogType.CONFIRM_DELETE ||
      dialogType === DialogType.CONFIRM_MOVE_TO_TRASH
    ) {
      const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
      const allTrashNotes = JSON.parse(localStorage.getItem("trash")) || [];
      const combinedNotes = [...allNotes, ...allTrashNotes];
      const deletedNote = combinedNotes.find(
        (note) => note.id === deleteNoteId
      );

      if (!deletedNote) return;
      if (deletedNote.isDeletedNote) {
        const updatedNotes = allTrashNotes.filter(
          (note) => note.id !== deleteNoteId
        );
        localStorage.setItem("trash", JSON.stringify(updatedNotes));
        setShowDialogBox(false);
        toastRef.current.show("Note permanently deleted");
      } else {
        const deletedNote = allNotes.find((note) => note.id === deleteNoteId);
        const updatedNotes = allNotes.filter(
          (note) => note.id !== deleteNoteId
        );
        deletedNote.isDeletedNote = true;
        const trashNotes = JSON.parse(localStorage.getItem("trash")) || [];
        trashNotes.push(deletedNote);

        localStorage.setItem("trash", JSON.stringify(trashNotes));
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
        toastRef.current.show("Note moved to trash");
      }
      fetchNotes();
    } else if (dialogType === DialogType.CONFIRM_EDIT_CLOSE) {
      setShowAddNoteForm(false);
      setEditNoteData(null);
    } else if (dialogType === DialogType.CONFIRM_ADD_CLOSE) {
      setShowAddNoteForm(false);
      setEditNoteData(null);
    }
    handleClose();
  };

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowDialogBox(false);
      setDialogType("");
      setDeleteNoteId(null);
    }, 300); // Match this duration with the CSS transition duration
  };

  const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
  const allTrashNotes = JSON.parse(localStorage.getItem("trash")) || [];
  const combinedNotes = [...allNotes, ...allTrashNotes];
  const deletedNote = combinedNotes.find((note) => note.id === deleteNoteId);

  return (
    <div className={`dialogBoxContainer ${isVisible ? "is-visible" : ""}`}>
      {/* Dialog Box Structure */}
      <div className="dialogBox">
        {/* Header */}
        <div className="dialogHeader">
          <h2>{getDialogTitle(dialogType)}</h2>
          <button onClick={() => handleClose()}>
            <img src={closeIcon} alt="" />
          </button>
        </div>

        {/* Content */}
        <div className="dialogContent">
          <p>{getDialogMessage(dialogType)}</p>
        </div>

        {/* Actions */}
        <div className="dialogActions">
          <button className="cancelBtn" onClick={() => handleClose()}>
            Cancel
          </button>
          <button
            className={`actionBtn ${getActionBtnClass(dialogType)}`}
            onClick={() => handleAction()}
          >
            {getActionBtnText(dialogType)}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DialogBox;
