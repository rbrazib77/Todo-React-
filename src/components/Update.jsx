import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { updateNote } from "../../feartures/noteSlice";
import { ToastContainer, toast } from "react-toastify";
const Update = ({
  setModal,
  editname,
  editprojecttitle,
  editprojectdescription,
  editid,
  setEditName,
  setEditProjectTitle,
  setEditProjectDescription,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  let maxCharacters = 120;
  const handleChange = (e) => {
    const charCount = e.target.value;
    if (charCount.length <= maxCharacters) {
      setEditProjectDescription(charCount);
    }
  };
  const remainingCharacters = maxCharacters - editprojectdescription.length;
  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };

  const dispatch = useDispatch();

  const handleEdit = () => {
    const updatevalues = {
      id: editid,
      name: editname,
      projecttitle: editprojecttitle,
      projectdescription: editprojectdescription,
      createAt: new Date().toString(),
    };
    // console.log(updatevalues)
    // dispatch(updateNote(updatevalues));
    dispatch(updateNote(updatevalues));
    toast("Note Update Susess", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
  return (
    <>
      <ToastContainer />
      <div className="w-full bg-[rgba(255,255,255,0.8)]  h-screen fixed top-0 left-0 flex items-center justify-center ">
        <div className="w-[500px] shadow-md bg-white rounded-md py-3 px-6 ">
          <div className="relative">
            <div className="">
              <RxCross1
                onClick={() => setModal(false)}
                className="  absolute cursor-pointer top-0 -right-56 text-[#0000005e] rounded-full  bg-white text-4xl"
              />
            </div>
            <div>
              <h1 className="font-mono text-3xl font-bold mb-5 text-center">
                Update Your Note
              </h1>
            </div>
          </div>
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-600 outline-none mb-5"
            placeholder="Name"
            value={editname}
            onChange={(e) => setEditName(e.target.value)}
          />
          <input
            type="text"
            className="w-full py-2 px-3 border border-gray-600 outline-none"
            placeholder="Project Title"
            value={editprojecttitle}
            onChange={(e) => setEditProjectTitle(e.target.value)}
          />
          <textarea
            maxLength={400}
            rows={5}
            onChange={handleChange}
            className="w-full  py-2 px-3 border border-gray-600 outline-none resize-none rounded-md my-5"
            type="text"
            placeholder="Project Description"
            value={editprojectdescription}
          />
          {/* Checkbox Start */}
          <div className="flex justify-between">
            <label className="custom-checkbox flex items-center">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span className="checkmark"></span>
              <p>I want to Update this task</p>
            </label>
            <p className="text-right">
              {remainingCharacters} characters remaining
            </p>
          </div>
          {/* Checkbox End */}
          {isChecked ? (
            <button
              onClick={handleEdit}
              className="px-5 py-2 bg-primary font-mono font-bold rounded-md text-white mt-6"
            >
              Update
            </button>
          ) : (
            <button
              onClick={handleEdit}
              disabled={!isChecked}
              className="px-5 py-2 bg-green-300 font-mono font-bold rounded-md text-white mt-6"
            >
              Disabled
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Update;
