import "./ViewNote.scss";

const ViewNote = ({ note }) => {
  console.log("Viewing note:", note);
  return (
    <div className="viewNoteContainer">
      <div className="viewNoteContent">
        <h2>{note?.title || "Untitled Note"}</h2>
        <p>{note?.content || "No content available."}</p>
      </div>
    </div>
  );
};

export default ViewNote;
