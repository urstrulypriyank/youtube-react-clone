import { Provider } from "react-redux";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import HomePageBody from "./components/HomePageBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import WatchPage from "./components/WatchPage";
// import Results from "./components/Results";

import { lazy, Suspense } from "react";
// START OF LAZY IMPORTS
const WatchPage = lazy(() => import("./components/WatchPage"));
const Results = lazy(() => import("./components/Results"));

// END OF ALL TYPE OF IMPORTS
const router = createBrowserRouter([
  {
    path: "/",
    element: <Default />,
    children: [
      {
        path: "/",
        element: <HomePageBody />,
      },
      {
        path: "/watch",
        element: (
          <Suspense fallback={<Loader />}>
            <WatchPage />
          </Suspense>
        ),
      },
      {
        path: "/results",
        element: (
          <Suspense fallback={<Loader />}>
            <Results />
          </Suspense>
        ),
      },
    ],
  },
]);

// default co
function App() {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}
export default App;

function Default() {
  return (
    <>
      <Headder />
      <div className="mt-14 flex">
        <Sidebar />
      </div>

      <Outlet />
    </>
  );
}

function Loader() {
  return (
    <div className="flex items-center justify-center space-x-2 animate-bounce">
      <div className="w-8 h-8 bg-blue-400 rounded-full"></div>
      <div className="w-8 h-8 bg-green-400 rounded-full"></div>
      <div className="w-8 h-8 bg-black rounded-full"></div>
    </div>
  );
}
