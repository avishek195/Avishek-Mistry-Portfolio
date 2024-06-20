import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Home from "./Components/Home/Home";
import Project from "./Components/Projects/Project";
import MainLayout from "./Layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Home />
      <About />
      <Project />
      <Contact />
    </MainLayout>
  );
}

export default App;
