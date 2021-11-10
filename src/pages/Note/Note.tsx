import { useQuery } from "react-query";
import { Note_API } from "../../api/note";

export default function NotePage() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "todos",
    Note_API.signInUser
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
          <header>
            <h1>Todos</h1>
            {nt.map((todo) => (
              <div key={todo.ID}>{todo.note} | {todo.ID}</div>
            ))}
          </header>
        </div>
      );
    }
  }

  return <div>NotePage</div>;
}
