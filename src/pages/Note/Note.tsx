import { toNamespacedPath } from "path/posix";
import { useQuery } from "react-query";
import { Note_API } from "../../api/note";

export default function NotePage() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "todo",
    Note_API.getNote
  );

  if (isLoading)
    return (
      <>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">
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
              <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">
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
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                {nt.map((todo) => (
                  <p key={todo.ID} className="leading-relaxed text-lg">
                    {todo.note}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      );
    }
    if (nt instanceof Object) {
      return (
        <div>
          <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
              <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                <p className="leading-relaxed text-lg" key={nt.ID}>
                  {nt.note}
                </p>
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
            <h1 className="text-2xl font-medium title-font mb-4 text-gray-100 tracking-widest">
              Quick Note
            </h1>
          </div>
        </div>
      </section>
    </>
  );
}
