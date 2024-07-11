import { useState } from "react";
import Container from "../components/Container";
import { useDispatch } from "react-redux";
import { addNote } from "../../feartures/noteSlice";
import { ToastContainer, toast } from "react-toastify";
const AddNote = () => {
  let [name, setName] = useState("");
  let [projecttitle, setProjectTitle] = useState("");
  let [projectdescription, setProjectDescription] = useState("");

  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();

  const handleAddNotes = (e) => {
    e.preventDefault();
    if (name != "" && projecttitle != "" && projectdescription != "") {
      const newNote = {
        id: Date.now().toString(32),
        name,
        projecttitle,
        projectdescription,
        createAt: new Date().toString(),
      };
      setName("");
      setProjectTitle("");
      setProjectDescription("");
      setIsChecked("");
      dispatch(addNote(newNote));
      toast("Note Add Susess", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.warn("Please Fill is The Fileds", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  let maxCharacters = 100;
  const handleChange = (event) => {
    const charCount = event.target.value;
    if (charCount.length <= maxCharacters) {
      setProjectDescription(charCount);
    }
  };
  const remainingCharacters = maxCharacters - projectdescription.length;

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <ToastContainer />
      <Container>
        <div className="md:w-[500px] shadow-md bg-white rounded-md py-3  md:px-6 mt-6 md:mt-0 ">
          <h1 className="font-roboto text-3xl font-bold mb-6 text-center">
            Add Your Note
          </h1>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            className="w-full py-2 px-3 border border-gray-600 outline-none mb-5"
            placeholder="Name"
            value={name}
          />
          <input
            type="text"
            onChange={(e) => setProjectTitle(e.target.value)}
            className="w-full py-2 px-3 border border-gray-600 outline-none"
            placeholder="Project Title"
            value={projecttitle}
          />
          <textarea
            maxLength={400}
            onChange={handleChange}
            rows={5}
            className="w-full  py-2 px-3 border border-gray-600 outline-none resize-none rounded-md my-5"
            type="text"
            placeholder="Project Description"
            value={projectdescription}
          />
          {/* Checkbox Start */}
          <div className="flex justify-between items-center gap-x-1">
            <label className="custom-checkbox flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              <p className="text-[12px]">I want to add this task</p>
            </label>
            <p className="text-right text-sm text-red-700">
              <span className="text-black">{remainingCharacters}</span> characters remaining
            </p>
          </div>
          {/* Checkbox End */}
          {isChecked ? (
            <button
              onClick={handleAddNotes}
              className="px-5 py-2 bg-primary font-roboto font-bold rounded-md text-white mt-6"
            >
              Add Note
            </button>
          ) : (
            <button
              onClick={handleAddNotes}
              disabled={!isChecked}
              className="px-5 py-2 bg-green-200 font-roboto font-bold rounded-md text-white mt-6"
            >
              Disabled
            </button>
          )}
        </div>
      </Container>
    </>
  );
};

export default AddNote;
