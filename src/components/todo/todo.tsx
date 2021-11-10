import { useState } from "react";
import { Note_API } from "../../api/note";
import { noteData } from "../../api/note/note.types";

export default function Todo(tn: noteData) {
  const [form, setForm] = useState({
    note: tn.note,
  });

  const updateForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleCreate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Note_API.create({note: form.note, userId: window.location.pathname.split("/")[2]});
  };

  const handleUpdate = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Note_API.update({ note: form.note, ID: tn.ID });
  };

  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Note_API.remove(tn.ID || "");
  };

  const handlePublic = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Note_API.update({ public: true, ID: tn.ID });
  };

  const handleDone = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    Note_API.update({ complete: true, ID: tn.ID });
  };

  return (
    <div>
      {tn.ID} <br />
      <input type="note" name="note" onChange={updateForm} value={form.note} />
      <br />
      {tn.CreatedAt ? null : (
        <button onClick={(e) => handleCreate(e)}>Create</button>
      )}
      {tn.CreatedAt ? (
        <button onClick={(e) => handleUpdate(e)}>Update</button>
      ) : null}
      {tn.CreatedAt ? (
        <button onClick={(e) => handleDelete(e)}>Delete</button>
      ) : null}
      {tn.CreatedAt ? (
        <button onClick={(e) => handlePublic(e)}>Public</button>
      ) : null}
      {tn.CreatedAt && !tn.complete ? (
        <button onClick={(e) => handleDone(e)}>Done</button>
      ) : null}
    </div>
  );
}
