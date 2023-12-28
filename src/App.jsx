import MainPage from "./Components/MainPage";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className=" fixed w-full h-screen ">
        <Header />
        <MainPage />
        <Footer />
      </div>
    </>
  );
}

export default App;
