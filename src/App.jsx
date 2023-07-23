import { Provider } from "react-redux";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";
import HomePageBody from "./components/HomePageBody";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      {
        path: "/",
        element: <HomePageBody />,
      },
      {
        path: '/watch',
        element: <WatchPage/>
      }
    ],
  },
]);

function App() {
  return (
    <>
      {/* 
      PLANNING OF MY YOUTUBE APPLICATION

        <Headder/>  -done
            <TopLeft> -toggle not working
            <SearchBar> -done
            <TopRight>  -done  
        <SideBar/>
        <Body>
            <ButtonList>
            <CardContainer>
                <Card>

      
      */}

      <Provider store={store}>
        <Headder />
        <div className="mt-14 flex">
          <Sidebar />
          <div>
            <RouterProvider router={router}>
              <Outlet />
            </RouterProvider>
          </div>
        </div>
      </Provider>
    </>
  );
}

export default App;
