import { Provider } from "react-redux";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import HomePageBody from "./components/HomePageBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import Results from "./components/Results";

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
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <Results />,
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
