import { useForm } from "react-hook-form";
import "./AddNoteForm.scss";

const AddNoteForm = () => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: { noteTitle: "", noteContent: "" },
  });

  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="addNoteForm"
      id="addNoteForm"
      onSubmit={handleSubmit((data) => formSubmit(data))}
    >
      <div className="formFields">
        {/* Note Title */}
        <div className="formGroup">
          <label htmlFor="noteTitle">Title</label>
          <input
            type="text"
            id="noteTitle"
            {...register("noteTitle")}
            placeholder="Enter note title"
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
