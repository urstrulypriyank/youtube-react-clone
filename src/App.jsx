import { Provider } from "react-redux";
import Headder from "./components/Headder";
import Sidebar from "./components/Sidebar";
import store from "./utils/store";

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
        <Sidebar />
      </Provider>
    </>
  );
}

export default App;
