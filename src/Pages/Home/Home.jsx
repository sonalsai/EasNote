import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
import ViewNote from "../../Components/ViewNote/ViewNote";
import DialogBox from "../../Components/DialogBox/DialogBox";
import { HeaderOptions } from "../../enums";
import { getScreenTitle } from "../../utils/home";
const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [viewNote, setViewNote] = useState(false);
  const [viewNoteData, setViewNoteData] = useState(null);
  const [editNoteData, setEditNoteData] = useState(null);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [screenType, setScreenType] = useState(HeaderOptions.ALL_NOTES);

  const allNotesFromLocalStorage =
    JSON.parse(localStorage.getItem("notes")) || [];

  return (
    <div className="homeContainer">
      {/* Header Division */}
      <div className="HeaderDivision">
        <Header
          setShowAddNoteForm={setShowAddNoteForm}
          setScreenType={setScreenType}
        />
      </div>

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
        editNoteData={editNoteData}
        setEditNoteData={setEditNoteData}
        setShowDialogBox={setShowDialogBox}
        setDialogType={setDialogType}
      />

      <div className="mainScreen">
        {/* Screen Title */}
        <div className="screenTitle">{getScreenTitle(screenType)}</div>

        {/* No Notes Division */}
        {screenType === HeaderOptions.ALL_NOTES &&
          allNotesFromLocalStorage.length === 0 && (
            <div className="noNotes">No Notes Available</div>
          )}

        {/* Note Container Division */}
        {screenType === HeaderOptions.ALL_NOTES &&
          allNotesFromLocalStorage.length > 0 && (
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
                    setDeleteNoteId={setDeleteNoteId}
                    setShowDialogBox={setShowDialogBox}
                    setDialogType={setDialogType}
                  />
                );
              })}
            </div>
          )}
      </div>

      {/* View Note */}
      {viewNote && <ViewNote note={viewNoteData} setViewNote={setViewNote} />}

      {/* Dialog Box */}
      {showDialogBox && (
        <DialogBox
          deleteNoteId={deleteNoteId}
          dialogType={dialogType}
          setShowDialogBox={setShowDialogBox}
          setDialogType={setDialogType}
          setDeleteNoteId={setDeleteNoteId}
          editNoteData={editNoteData}
          setShowAddNoteForm={setShowAddNoteForm}
          setEditNoteData={setEditNoteData}
        />
      )}
    </div>
  );
};

export default Home;
