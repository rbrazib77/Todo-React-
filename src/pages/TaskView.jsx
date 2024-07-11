import React, { useState } from "react";
import Container from "../components/Container";
import { useDispatch, useSelector } from "react-redux";
import { formatDistance } from "date-fns";
import { deleteNote } from "../../feartures/noteSlice";
import Update from "../components/Update";
import { Helmet } from "react-helmet-async";

const TaskView = () => {
  const initialShow = 6;
  const [loadmore, setLoadMore] = useState(initialShow);
  const [modal, setModal] = useState(false);
  let [editname, setEditName] = useState("");
  let [editprojecttitle, setEditProjectTitle] = useState("");
  let [editprojectdescription, setEditProjectDescription] = useState("");
  let [editid, setEditId] = useState("");
  const { notes } = useSelector((state) => state.note);
  const dispatch = useDispatch();

  const handelDelete = (id) => {
    dispatch(deleteNote(id));
  };
  const handleLoadMore = () => {
    setLoadMore((prve) => prve + 3);
  };

  const handelUpdate = (note) => {
    setModal(true);
    setEditName(note.name);
    setEditProjectTitle(note.projecttitle);
    setEditProjectDescription(note.projectdescription);
    setEditId(note.id);
  };

  if (modal) {
    return (
      <Update
        setModal={setModal}
        editname={editname}
        editprojecttitle={editprojecttitle}
        editprojectdescription={editprojectdescription}
        editid={editid}
        setEditName={setEditName}
        setEditProjectTitle={setEditProjectTitle}
        setEditProjectDescription={setEditProjectDescription}
      />
    );
  }

  return (
    <section>
      <Helmet>
        <title>View Task</title>
      </Helmet>
      <Container>
        <div className="px-4 md:px-0">
          <div className="md:grid grid-cols-3 gap-x-4 ">
            {notes.slice(0, loadmore).map((note) => {
              return (
                <div className="shadow-md p-3 mt-6" key={note.id}>
                  <h2 className="text-2xl font-bold font-roboto">
                    {note.name}
                  </h2>
                  <p className="font-roboto font-normal text-lg py-1">
                    {note.projecttitle}
                  </p>
                  <p className="font-roboto font-normal text-base">
                    {note.projectdescription}
                  </p>
                  <div className="flex justify-between gap-x-5 mt-4">
                    <p className="">
                      {formatDistance(note.createAt, new Date(), {
                        addSuffix: true,
                      })}
                    </p>
                    <div className="flex gap-x-5">
                      <button
                        className="bg-primary px-3 py-1 text-white rounded-md font-roboto font-normal "
                        onClick={() => handelUpdate(note)}
                      >
                        Update
                      </button>
                      <button
                        className="bg-red-700 px-3 py-1 text-white rounded-md font-roboto font-normal"
                        onClick={() => handelDelete(note.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {loadmore < notes.length && (
            <div className="text-center">
              <button
                className="bg-gray-700 text-white px-6 py-2 rounded-md mt-6"
                onClick={handleLoadMore}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TaskView;
