import { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import CloseIcon from "../../assets/closeIcon.svg";
import "./AddNoteForm.scss";
import { DialogType } from "../../enums";

const AddNoteForm = ({
  showAddNoteForm,
  setShowAddNoteForm,
  editNoteData,
  setEditNoteData,
  setShowDialogBox,
  setDialogType,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const isSaved = useRef(false);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (!showAddNoteForm) {
      setIsVisible(false);
      setTimeout(() => {
        setEditNoteData(null);
        isSaved.current = false;
        reset();
      }, 300);
    }
  }, [showAddNoteForm, setEditNoteData, reset, setShowAddNoteForm]);

  useEffect(() => {
    if (editNoteData) {
      reset({
        noteTitle: editNoteData.title,
        noteContent: editNoteData.content,
      });
    } else {
      reset({
        noteTitle: "",
        noteContent: "",
      });
    }
  }, [editNoteData, reset]);

  useEffect(() => {
    if (showAddNoteForm) {
      setIsVisible(true);
    }
  }, [showAddNoteForm]);

  const handleClose = () => {
    //displaying modal when the form is not saved and has unsaved changes
    if (
      !isSaved.current &&
      !editNoteData &&
      (watch("noteTitle").trim() !== "" || watch("noteContent").trim() !== "")
    ) {
      setShowDialogBox(true);
      setDialogType(DialogType.CONFIRM_ADD_CLOSE);
      console.warn("Note not saved yet, closing without saving.");
      return;
    }

    //displaying modal when the form is not saved and has unsaved changes in edit mode
    if (
      !isSaved.current &&
      editNoteData &&
      (watch("noteTitle").trim() !== editNoteData?.title ||
        watch("noteContent").trim() !== editNoteData?.content)
    ) {
      setShowDialogBox(true);
      setDialogType(DialogType.CONFIRM_EDIT_CLOSE);
      console.warn("Edited Note not saved yet, closing without saving.");
      return;
    }

    setIsVisible(false);
    setTimeout(() => {
      setEditNoteData(null);
      setShowAddNoteForm(false);
      isSaved.current = false;
      reset();
    }, 300);
  };
  const handleSave = (data) => {
    if (data.noteTitle.trim() === "" && data.noteContent.trim() === "") {
      isSaved.current = true;
      handleClose();
      return;
    }

    const storedNotes = JSON.parse(localStorage.getItem("notes")) || [];

    if (editNoteData) {
      const updatedNotes = storedNotes.map((note) =>
        note.id === editNoteData.id
          ? {
              ...note,
              title: data.noteTitle,
              content: data.noteContent,
              updatedAt: new Date().toLocaleString(),
            }
          : note
      );
      isSaved.current = true;
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
    } else {
      const newNote = {
        id: Date.now(),
        title: data.noteTitle,
        content: data.noteContent,
        isFavNote: false,
        isLockedNote: false,
        isDeletedNote: false,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString(),
      };
      storedNotes.push(newNote);
      localStorage.setItem("notes", JSON.stringify(storedNotes));
      isSaved.current = true;
    }

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
        onSubmit={handleSubmit(handleSave)}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="formHeader">
          <h2 className="formTitle">
            {editNoteData ? "Edit Note" : "Add a New Note"}
          </h2>
          <button type="button" className="closeButton" onClick={handleClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>

        <div className="formFields">
          <div className="formGroup">
            <input
              type="text"
              id="noteTitle"
              {...register("noteTitle", {
                maxLength: 25,
              })}
              placeholder=" "
              autoComplete="off"
            />
            <label htmlFor="noteTitle">Title</label>
            {errors.noteTitle && (
              <span className="errorMessage">
                Title cannot exceed 25 characters.
              </span>
            )}
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
            {editNoteData ? "Update Note" : "Add Note"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNoteForm;
