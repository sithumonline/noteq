import { useQuery } from "react-query";
import { Note_API } from "../../api/note";
import Navbar from "../../components/common/Navbar/Navbar";
import Todo from "../../components/todo/todo";

export default function NotesPage() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "todos",
    Note_API.getNotes
  );

  if (isLoading)
    return (
      <div>
        <h1>isLoading...</h1>
      </div>
    );

  if (isError)
    return (
      <div>
        <h1>{!error}</h1>
      </div>
    );

  if (isSuccess && data) {
    const nt = data.data;
    if (nt instanceof Array) {
      return (
        <div>
          <Navbar />
          <Todo />
          {nt.map((todo) => (
            <Todo
              ID={todo.ID}
              CreatedAt={todo.CreatedAt}
              note={todo.note}
              userId={todo.userId}
              complete={todo.complete}
              public={todo.public}
              key={todo.ID}
            />
          ))}
        </div>
      );
    }
  }

  return <div>TodosPage</div>;
}
