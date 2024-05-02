import { useState } from "react";
import "./App.css";
import Header from "./component/header/Header";
import Home from "./component/home/Home";
import SearchComponent from "./component/home/SearchComponent";
import QuestionDetailPage from "./component/detailpage/QuestionPage";
import { Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
