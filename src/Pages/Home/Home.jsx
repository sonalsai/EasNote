import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const allNotesFromLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];
  let cardCount = 15;
  return (
    <div className="homeContainer">
      {/* Header Division */}
      <div className="HeaderDivision">
        <Header setShowAddNoteForm={setShowAddNoteForm} />
      </div>

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
      />

      {/* Note Container Division */}
      <div className="noteContainer">
        {
          allNotesFromLocalStorage.length > 0 ? (
            allNotesFromLocalStorage.map((note, index) => {
              if (index < cardCount) {
                return (
                  <Card
                    key={note.id}
                    note={note}
                  />
                );
              }
              return null;
            })
          ) : (
            <div className="noNotes">No Notes Available</div>
          )
        }
      </div>
    </div>
  );
};

export default Home;
