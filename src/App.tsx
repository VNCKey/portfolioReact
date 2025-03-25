import "./App.css";
import Footer from "./components/screenMain/Footer";
import Header from "./components/screenMain/Header";
import Main from "./components/screenMain/Main";

//Todos los comoponentes Empiezan con mayuscula CamelCase
const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
