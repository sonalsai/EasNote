import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
import ViewNote from "../../Components/ViewNote/ViewNote";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [viewNote, setViewNote] = useState(false);
  const [viewNoteData, setViewNoteData] = useState(null);
  const [editNoteData, setEditNoteData] = useState(null);

  const allNotesFromLocalStorage =
    JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div className="homeContainer">
      {/* Header Division */}
      <div className="HeaderDivision">
        <Header setShowAddNoteForm={setShowAddNoteForm} />
      </div>

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
        editNoteData={editNoteData}
        setEditNoteData={setEditNoteData}
      />

      {/* No Notes Division */}
      {allNotesFromLocalStorage.length === 0 && (
        <div className="noNotes">No Notes Available</div>
      )}

      {/* Note Container Division */}
      {allNotesFromLocalStorage.length > 0 && (
        <div className="noteContainer">
          {allNotesFromLocalStorage.map((note) => {
            return (
              <Card
                key={note.id}
                note={note}
                setViewNote={setViewNote}
                setViewNoteData={setViewNoteData}
                setEditNoteData={setEditNoteData}
                setShowAddNoteForm={setShowAddNoteForm}
              />
            );
          })}
        </div>
      )}

      {/* View Note */}
      {viewNote && <ViewNote note={viewNoteData} setViewNote={setViewNote} />}
    </div>
  );
};

export default Home;
