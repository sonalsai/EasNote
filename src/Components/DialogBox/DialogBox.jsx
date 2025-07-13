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
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (dialogType) {
      setIsVisible(true);
    }
  }, [dialogType]);

  const handleAction = () => {
    if (dialogType === DialogType.CONFIRM_DELETE) {
      const notes = JSON.parse(localStorage.getItem("notes")) || [];
      const updatedNotes = notes.filter((note) => note.id !== deleteNoteId);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
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
