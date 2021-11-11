import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Note_API } from "../../api/note";
import { noteData } from "../../api/note/note.types";

export default function Todo(tn: noteData) {
  const queryClient = useQueryClient();

  const [form, setForm] = useState({
    note: tn.note,
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = useMutation(Note_API.create, {
    onSuccess: () => {
      setForm({
        note: "",
      });
      queryClient.invalidateQueries("todos");
    },
  });

  const handleUpdate = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDelete = useMutation(Note_API.remove, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handlePublic = useMutation(Note_API.update, {
    onSuccess: () => {
      window.open(`/note/${tn.userId}/${tn.ID}`, "_blank");
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDone = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handlePrivate = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <>
      <div className="xl:w-1/3 md:w-1/2 p-4">
        <div className="border border-gray-200 bg-gray-100 p-6 rounded-lg">
          <input
            type="note"
            name="note"
            onChange={updateForm}
            value={form.note}
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
          <br />
          <div className="flex flex-row items-center justify-between gap-4 w-full mt-8">
            {tn.CreatedAt ? null : (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() =>
                  form.note == ""
                    ? null
                    : handleCreate.mutate({
                        note: form.note,
                        userId: window.location.pathname.split("/")[2],
                      })
                }
              >
                Create
              </button>
            )}
            {tn.CreatedAt ? (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() =>
                  form.note == ""
                    ? null
                    : handleUpdate.mutate({ note: form.note, ID: tn.ID })
                }
              >
                Update
              </button>
            ) : null}
            {tn.CreatedAt ? (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() => handleDelete.mutate(tn.ID || "")}
              >
                Delete
              </button>
            ) : null}
            {tn.CreatedAt && !tn.public ? (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() => handlePublic.mutate({ public: true, ID: tn.ID })}
              >
                Public
              </button>
            ) : null}
            {tn.CreatedAt && tn.public ? (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() =>
                  handlePrivate.mutate({ public: false, ID: tn.ID })
                }
              >
                Private
              </button>
            ) : null}
            {tn.CreatedAt && !tn.complete ? (
              <button
                className="py-2 px-4  bg-purple-500 hover:bg-purple-600 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg"
                onClick={() => handleDone.mutate({ complete: true, ID: tn.ID })}
              >
                Done
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
