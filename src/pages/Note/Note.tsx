import { useQuery } from "react-query";
import { Note_API } from "../../api/note";

export default function NotePage() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "todo",
    Note_API.getNote
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
              <div key={todo.ID}>
                {todo.note} | {todo.ID}
              </div>
            ))}
          </header>
        </div>
      );
    } 
    if (nt instanceof Object) {
      return (
        <div>
          <header>
            <h1>Todos</h1>
            {nt.note} | {nt.ID}
          </header>
        </div>
      );
    }
  }

  return <div>TodosPag</div>;
}
