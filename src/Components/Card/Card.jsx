import "./Card.scss";
import DeleteIcon from "../../assets/deleteIcon.svg";
import EditNoteIcon from "../../assets/editNoteIcon.svg";
import MoreIcon from "../../assets/moreIcon.svg";
import { useState } from "react";
import { DialogType } from "../../enums";

const Card = ({
  note,
  setViewNote,
  setViewNoteData,
  setEditNoteData,
  setShowAddNoteForm,
  setDeleteNoteId,
  setShowDialogBox,
  setDialogType,
}) => {
  const [showOptions, setShowOptions] = useState(false);

  // Helper to get the card title
  const getTitle = () => {
    if (note?.title) return note.title;
    if (note?.content) {
      const words = note.content.trim().split(/\s+/);
      return words.slice(0, 2).join(" ") + (words.length > 2 ? "..." : "");
    }
    return "";
  };

  //Delete note function can be added here
  const handleDelete = (e,id) => {
    e.stopPropagation();
    setDeleteNoteId(id);
    setShowDialogBox(true);
    setDialogType(DialogType.CONFIRM_DELETE);
    setShowOptions(false);

  };

  const handleNoteView = () => {
    setViewNote(true);
    setViewNoteData(note);
  };

  const handleEdit = (e) => {
    e.stopPropagation();

    setEditNoteData(note);
    setShowAddNoteForm(true);
    setViewNote(false);
    setViewNoteData(null);
  };

  return (
    <div className="cardContainer" onClick={() => handleNoteView()}>
      <div className="cardHeader">
        <h2>{getTitle()}</h2>
        <div className="actionButtons">
          <button className="moreBtn" onClick={(e) => {
            e.stopPropagation();
            setShowOptions(!showOptions);
          }}>
            <img src={MoreIcon} alt="" />
          </button>
          {showOptions && (
            <div className="optionsDropdown">
              <button className="editBtn" onClick={(e) => handleEdit(e)}>
                <img src={EditNoteIcon} alt="" />
                Edit
              </button>
              <button className="deleteBtn" onClick={(e) => handleDelete(e,note?.id)}>
                <img src={DeleteIcon} alt="" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="cardContent">
        <p>{note?.content}</p>
      </div>
    </div>
  );
};

export default Card;
