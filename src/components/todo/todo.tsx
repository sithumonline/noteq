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
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDone = useMutation(Note_API.update, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  return (
    <div>
      {tn.ID} <br />
      <input type="note" name="note" onChange={updateForm} value={form.note} />
      <br />
      {tn.CreatedAt ? null : (
        <button
          onClick={() =>
            handleCreate.mutate({
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
          onClick={() => handleUpdate.mutate({ note: form.note, ID: tn.ID })}
        >
          Update
        </button>
      ) : null}
      {tn.CreatedAt ? (
        <button onClick={() => handleDelete.mutate(tn.ID || "")}>Delete</button>
      ) : null}
      {tn.CreatedAt ? (
        <button
          onClick={() => handlePublic.mutate({ public: true, ID: tn.ID })}
        >
          Public
        </button>
      ) : null}
      {tn.CreatedAt && !tn.complete ? (
        <button
          onClick={() => handleDone.mutate({ complete: true, ID: tn.ID })}
        >
          Done
        </button>
      ) : null}
    </div>
  );
}
