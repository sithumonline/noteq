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
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                Loading...
              </h1>
            </div>
          </div>
        </section>
      </>
    );

  if (isError)
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
                {!error}
              </h1>
            </div>
          </div>
        </section>
      </>
    );

  if (isSuccess && data) {
    const nt = data.data;
    if (nt instanceof Array) {
      return (
        <div>
          <Navbar />
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
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
            </div>
          </section>
        </div>
      );
    }
  }

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-900 tracking-widest">
              Quick Note
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
