import "./App.css";

function App() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex-col md:flex-row justify-between flex gap-4 items-start mx-4 py-12">
        <div className="flex bg-white rounded-lg shadow dark:bg-gray-800 flex-col md:flex-row">
          {/* Info del clima */}
          <div className="relative w-full md:w-48 flex flex-col justify-center items-center">
            {/* Icono y temperatura */}
            <div className="flex w-full flex-row gap-2 justify-center">
              <div className="">Icono</div>
              <div className="">Temperatura</div>
            </div>
            {/* Estado del tiempo */}
            <div className="">Lluvioso</div>
          </div>
          <form className="flex-auto p-6">
            <div className="flex flex-wrap">
              <h1 className="flex-auto text-xl font-semibold dark:text-gray-50">
                Datos del clima
              </h1>
            </div>
            <div className="flex items-baseline mt-4 mb-6 text-gray-700 dark:text-gray-300">
              <div className="flex space-x-2">
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600 bg-gray-100 rounded-lg dark:bg-gray-600"
                    name="size"
                    value="xs"
                  ></input>
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="s"
                  ></input>
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="m"
                  ></input>
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="l"
                  ></input>
                </label>
                <label className="text-center">
                  <input
                    type="radio"
                    className="flex items-center justify-center w-6 h-6 accent-violet-600"
                    name="size"
                    value="xl"
                  ></input>
                </label>
              </div>
              <a
                href="#"
                className="hidden ml-auto text-sm text-gray-500 underline md:block dark:text-gray-300"
              >
                Size Guide
              </a>
            </div>
            <div className="flex mb-4 text-sm font-medium">
              <button
                type="button"
                className="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
              >
                Buy now
              </button>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
