import { useState } from "react";
import Header from "../../Components/Header/Header";
import "./Home.scss";
import AddNoteForm from "../../Components/AddNoteForm/AddNoteForm";
import Card from "../../Components/Card/Card";
import ViewNote from "../../Components/ViewNote/ViewNote";
import DialogBox from "../../Components/DialogBox/DialogBox";
import { HeaderOptions } from "../../enums";
import { getNoNotesAvailableText, getScreenTitle } from "../../utils/home";
import useWindowSize from "../../utils/useWindowSize";
import hamburgerIcon from "../../assets/hamburgerIcon.svg";
import Overlay from "../../Components/Overlay/Overlay";

const Home = () => {
  const [showAddNoteForm, setShowAddNoteForm] = useState(false);
  const [viewNote, setViewNote] = useState(false);
  const [viewNoteData, setViewNoteData] = useState(null);
  const [editNoteData, setEditNoteData] = useState(null);
  const [deleteNoteId, setDeleteNoteId] = useState(null);
  const [showDialogBox, setShowDialogBox] = useState(false);
  const [dialogType, setDialogType] = useState("");
  const [screenType, setScreenType] = useState(HeaderOptions.ALL_NOTES);
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);
  const [isHeaderClosing, setIsHeaderClosing] = useState(false);

  const isMobile = useWindowSize();

  const handleCloseHeader = () => {
    setIsHeaderClosing(true);
    setTimeout(() => {
      setIsHeaderVisible(false);
      setIsHeaderClosing(false);
    }, 300);
  };

  const allNotesFromLocalStorage =
    JSON.parse(localStorage.getItem("notes")) || [];
  const allTrashNotesFromLocalStorage =
    JSON.parse(localStorage.getItem("trash")) || [];

  const notesToDisplay = () => {
    switch (screenType) {
      case HeaderOptions.ALL_NOTES:
        return allNotesFromLocalStorage;
      case HeaderOptions.FAVORITES:
        return allNotesFromLocalStorage.filter((note) => note.isFavNote);
      case HeaderOptions.LOCKED:
        return allNotesFromLocalStorage.filter((note) => note.isLockedNote);
      case HeaderOptions.RECYCLE_BIN:
        return allTrashNotesFromLocalStorage;
      default:
        return [];
    }
  };

  return (
    <div className="homeContainer">
      {((isMobile && isHeaderVisible) || !isMobile) && (
        <div
          className={`headerDivision ${isMobile ? "mobile-header" : ""} ${
            isHeaderClosing ? "closing" : ""
          }`}
        >
          <Header
            setShowAddNoteForm={setShowAddNoteForm}
            setScreenType={setScreenType}
            setIsHeaderVisible={handleCloseHeader}
            isMobile={isMobile}
          />
        </div>
      )}

      {isMobile && isHeaderVisible && <Overlay onClick={handleCloseHeader} />}

      <AddNoteForm
        showAddNoteForm={showAddNoteForm}
        setShowAddNoteForm={setShowAddNoteForm}
        editNoteData={editNoteData}
        setEditNoteData={setEditNoteData}
        setShowDialogBox={setShowDialogBox}
        setDialogType={setDialogType}
      />

      <div className={`mainScreen ${isMobile && isHeaderVisible ? "blur" : ""}`}>
        {isMobile && (
          <div className="titleContainer">
            <button
              className="hamburgerIcon"
              onClick={() => setIsHeaderVisible(true)}
            >
              <img src={hamburgerIcon} alt="menu" />
            </button>
            <div className="textContainer">
              <h1 className="headerTitle">EazNote</h1>
            </div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1055/1055642.png"
              alt="EazNote Logo"
              className="headerLogo"
            />
          </div>
        )}

        <div className="notesDisplayContainer">
          {/* Screen Title */}
          <div className="screenTitle">
            <h2>{getScreenTitle(screenType)}</h2>
          </div>

          {/* No Notes Division */}
          {notesToDisplay().length === 0 && (
            <div className="noNotes">{getNoNotesAvailableText(screenType)}</div>
          )}

          {/* Note Container Division */}
          {notesToDisplay().length > 0 && (
            <div className="noteContainer">
              {notesToDisplay().map((note) => {
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
