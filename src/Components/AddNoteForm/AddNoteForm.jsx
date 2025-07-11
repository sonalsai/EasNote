import { useForm } from "react-hook-form";
import CloseIcon from "../../assets/closeIcon.svg";
import "./AddNoteForm.scss";

const AddNoteForm = ({ showAddNoteForm, setShowAddNoteForm }) => {
  const { register, handleSubmit } = useForm({
    defaultValues: { noteTitle: "", noteContent: "" },
  });

  const formSubmit = (data) => {
    console.log(data);

    if (data.noteTitle.trim() === "" && data.noteContent.trim() === "") {
      closeForm();
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

    closeForm();
    window.location.reload();
  };

  const closeForm = () => {
    setShowAddNoteForm(false);
  };

  return (
    <form
      className={`addNoteForm ${showAddNoteForm ? "show" : ""}`}
      id="addNoteForm"
      onSubmit={handleSubmit((data) => formSubmit(data))}
    >
      <div className="formHeader">
        <h2 className="formTitle">Add a New Note</h2>
        <button
          type="button"
          className="closeButton"
          onClick={() => {
            closeForm();
          }}
        >
          <img src={CloseIcon} alt="" />
        </button>
      </div>
      <div className="formFields">
        {/* Note Title */}
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

        {/* Note Content */}
        <div className="formGroup">
          <textarea
            id="noteContent"
            {...register("noteContent")}
            placeholder=" "
          ></textarea>
          <label htmlFor="noteContent">Content</label>
        </div>
      </div>

      {/* Submit Button */}
      <div className="buttonContainer">
        <button type="submit" className="submitButton">
          Add Note
        </button>
      </div>
    </form>
  );
};

export default AddNoteForm;
