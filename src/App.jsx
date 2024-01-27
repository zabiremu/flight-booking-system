import "./assets/styles.css";
import Content from "./components/Content";
import Header from "./components/Header";
import store from "./redux/store.jsx";
import { Provider } from "react-redux";
const App = () => {
  return (
    <>
      <Provider store={store}>
        {/* header section start */}
        <Header />
        {/* header section end  */}
        {/* main section start */}
        <Content />
        {/* main section end */}
      </Provider>
    </>
  );
};

export default App;
