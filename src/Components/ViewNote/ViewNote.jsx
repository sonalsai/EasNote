import "./ViewNote.scss";
import CloseIcon from "../../assets/closeIcon.svg";

const ViewNote = ({ note, setViewNote }) => {
  console.log("Viewing note:", note);
  return (
    <div className="viewScreen" onClick={() => setViewNote(false)}>
      <div className="viewNoteContainer">
        <div className="viewNoteHeader">
          <button className="closeButton" onClick={() => setViewNote(false)}>
            <img src={CloseIcon} alt="" />
          </button>
        </div>
        <div className="viewNoteContent">
          <h2>{note?.title || "Untitled Note"}</h2>
          <p>{note?.content || "No content available."}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewNote;
