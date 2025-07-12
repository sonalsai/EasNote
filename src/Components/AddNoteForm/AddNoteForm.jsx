import { useForm } from "react-hook-form";
import CloseIcon from "../../assets/closeIcon.svg";
import "./AddNoteForm.scss";

const AddNoteForm = ({ setShowAddNoteForm }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { noteTitle: "", noteContent: "" },
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  const closeForm = () => {
    setShowAddNoteForm(false);
  };

  return (
    <form
      className="addNoteForm"
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
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            id="noteTitle"
            {...register("noteTitle")}
            placeholder="Enter note title"
            autoComplete="off"
          />
        </div>

        {/* Note Content */}
        <div className="formGroup">
          <label htmlFor="noteContent">Content</label>
          <textarea
            id="noteContent"
            {...register("noteContent")}
            placeholder="Enter note content"
          ></textarea>
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
