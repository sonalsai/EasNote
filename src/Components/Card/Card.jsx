import "./Card.scss";
import DeleteIcon from "../../assets/deleteIcon.svg";
import EditNoteIcon from "../../assets/editNoteIcon.svg";
import FavoriteNoteIcon from "../../assets/favoriteNoteIcon.svg";
import LockedNoteIcon from "../../assets/lockedNoteIcon.svg";
import MoreIcon from "../../assets/moreIcon.svg";
import RestoreIcon from "../../assets/restoreIcon.svg";
import { useState, useEffect, useRef } from "react";
import { DialogType } from "../../enums";
import { getTitle } from "../../utils/card";

const Card = ({
  note,
  setViewNote,
  setViewNoteData,
  setEditNoteData,
  setShowAddNoteForm,
  setDeleteNoteId,
  setShowDialogBox,
  setDialogType,
  fetchNotes,
  toastRef,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const optionsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (optionsRef.current && !optionsRef.current.contains(event.target)) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [optionsRef]);

  const handleDelete = (e, id) => {
    e.stopPropagation();
    setDeleteNoteId(id);
    setShowDialogBox(true);
    if (note.isDeletedNote) {
      setDialogType(DialogType.CONFIRM_DELETE);
    } else {
      setDialogType(DialogType.CONFIRM_MOVE_TO_TRASH);
    }
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

  const handleFavorite = (e, note) => {
    e.stopPropagation();

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((n) => {
      if (n.id === note.id) {
        return { ...n, isFavNote: !n.isFavNote };
      }
      return n;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setShowOptions(false);
    fetchNotes();
    toastRef.current.show(
      note.isFavNote
        ? "Note removed from favorites"
        : "Note added to favorites"
    );
  };

  const handleLock = (e, note) => {
    e.stopPropagation();

    const notes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = notes.map((n) => {
      if (n.id === note.id) {
        return { ...n, isLockedNote: !n.isLockedNote };
      }
      return n;
    });

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    setShowOptions(false);
    fetchNotes();
    toastRef.current.show(
      note.isLockedNote ? "Note unlocked" : "Note locked"
    );
  };

  const handleRestore = (e, id) => {
    e.stopPropagation();

    const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const allTrashNotes = JSON.parse(localStorage.getItem("trash")) || [];
    const updatedTrashNotes = allTrashNotes.filter((note) => note.id !== id);
    const trashNote = allTrashNotes.find((note) => note.id === id);
    trashNote.isDeletedNote = false;
    const updatedNotes = [...allNotes, trashNote];

    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    localStorage.setItem("trash", JSON.stringify(updatedTrashNotes));
    setShowOptions(false);
    fetchNotes();
    toastRef.current.show("Note restored successfully");
  };

  return (
    <div className="cardContainer" onClick={() => handleNoteView()}>
      <div className="cardHeader">
        <h2>{getTitle(note)}</h2>
        <div className="actionButtons" ref={optionsRef}>
          <button
            className="moreBtn"
            onClick={(e) => {
              e.stopPropagation();
              setShowOptions(!showOptions);
            }}
          >
            <img src={MoreIcon} alt="" />
          </button>
          {showOptions && (
            <div className="optionsDropdown">
              {/* Edit Note */}
              {!note.isDeletedNote && (
                <button className="editBtn" onClick={(e) => handleEdit(e)}>
                  <img src={EditNoteIcon} alt="" />
                  Edit
                </button>
              )}

              {/* Favorite Note */}
              {!note.isDeletedNote && (
                <button
                  className="favBtn"
                  onClick={(e) => handleFavorite(e, note)}
                >
                  <img src={FavoriteNoteIcon} alt="" />
                  {note.isFavNote ? "Unfavorite" : "Favorite"}
                </button>
              )}

              {/* Locked Note */}
              {!note.isDeletedNote && (
                <button
                  className="lockBtn"
                  onClick={(e) => handleLock(e, note)}
                >
                  <img src={LockedNoteIcon} alt="" />
                  {note.isLockedNote ? "Unlock Note" : "Lock Note"}
                </button>
              )}

              {/* Restore Note */}
              {note.isDeletedNote && (
                <button
                  className="restoreBtn"
                  onClick={(e) => {
                    handleRestore(e, note.id);
                  }}
                >
                  <img src={RestoreIcon} alt="" />
                  Restore
                </button>
              )}

              {/* Delete Note */}
              <button
                className="deleteBtn"
                onClick={(e) => handleDelete(e, note?.id)}
                style={{ whiteSpace: "nowrap" }}
              >
                <img src={DeleteIcon} alt="" />
                {!note.isDeletedNote ? "Move to Trash" : "Delete"}
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
