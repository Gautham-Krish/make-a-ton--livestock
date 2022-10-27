import React from "react";
import "./App.css";
import "./Design.css";
import "./Navbar";
import Form from "./components/Form";
import Navbar from "./Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Tech from "./pages/Tech";
import Vision from "./pages/Vision";
import Login from "./components/Login";
function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = (
        <>
          <About />
          <Login />
          <Vision />
          <Contact />
          <Form />
        </>
      );
      break;
    case "/about":
      Component = (
        <>
          <About />
        </>
      );
      break;
    case "/login":
      Component = <Login />;
      break;
    case "/vision":
      Component = <Vision />;
      break;
    case "/contact":
      Component = <Contact />;
      break;
    case "/signup":
      Component = <Form />;
      break;
  }
  return (
    <>
      <Navbar />

      {Component}
    </>
  );
}

export default App;
