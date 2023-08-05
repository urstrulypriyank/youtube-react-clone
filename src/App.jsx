import { Provider } from "react-redux";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import HomePageBody from "./components/HomePageBody";
import Loader from "./components/Loader";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import VideoCardShimmer from "./components/VideoCardShimmer";
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
          <Suspense fallback={<VideoCardShimmer />}>
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
    < >
      <Headder />
      <div className="mt-14 flex ">
        <Sidebar />
      </div>
      <Outlet />
    </>
  );
}
