import "./Card.scss";
import DeleteIcon from "../../assets/deleteIcon.svg";
import EditNoteIcon from "../../assets/editNoteIcon.svg";

const Card = ({
  note,
  setViewNote,
  setViewNoteData,
  setEditNoteData,
  setShowAddNoteForm,
}) => {
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
  const handleDelete = (id) => {
    const allNotes = JSON.parse(localStorage.getItem("notes")) || [];
    const updatedNotes = allNotes.filter((note) => note.id !== id);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
    window.location.reload();
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
          <button className="editBtn" onClick={(e) => handleEdit(e)}>
            <img src={EditNoteIcon} alt="" />
          </button>
          <button className="deleteBtn" onClick={() => handleDelete(note?.id)}>
            <img src={DeleteIcon} alt="" />
          </button>
        </div>
      </div>
      <div className="cardContent">
        <p>{note?.content}</p>
      </div>
    </div>
  );
};

export default Card;
