import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "../../assets/closeIcon.svg";
import "./AddNoteForm.scss";

const AddNoteForm = ({ showAddNoteForm, setShowAddNoteForm }) => {
  const [isVisible, setIsVisible] = useState(false);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: { noteTitle: "", noteContent: "" },
  });

  useEffect(() => {
    if (showAddNoteForm) {
      setIsVisible(true);
    }
  }, [showAddNoteForm]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => {
      setShowAddNoteForm(false);
      reset();
    }, 300);
  };

  const formSubmit = (data) => {
    if (data.noteTitle.trim() === "" && data.noteContent.trim() === "") {
      handleClose();
      return;
    }

    const note = {
      id: Date.now(),
      title: data.noteTitle,
      content: data.noteContent,
      isFavNote: false,
      isLockedNote: false,
      isDeletedNote: false,
      createdAt: new Date().toLocaleString(),
    };

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    storedNotes.push(note);
    localStorage.setItem("notes", JSON.stringify(storedNotes));

    handleClose();
    window.location.reload();
  };

  if (!showAddNoteForm) {
    return null;
  }

  return (
    <div
      className={`addNoteOverlay ${isVisible ? "is-visible" : ""}`}
      onClick={handleClose}
    >
      <form
        className={`addNoteContainer ${isVisible ? "is-visible" : ""}`}
        onSubmit={handleSubmit(formSubmit)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="formHeader">
          <h2 className="formTitle">Add a New Note</h2>
          <button type="button" className="closeButton" onClick={handleClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>

        <div className="formFields">
          <div className="formGroup">
            <input
              type="text"
              id="noteTitle"
              {...register("noteTitle")}
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="noteTitle">Title</label>
          </div>

          <div className="formGroup textArea">
            <textarea
              id="noteContent"
              {...register("noteContent")}
              placeholder=" "
            ></textarea>
            <label htmlFor="noteContent">Content</label>
          </div>
        </div>

        <div className="buttonContainer">
          <button type="submit" className="submitButton">
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
