import React from "react";
import "../../css/home.css";
import HomeContent from "../Content";
import QuestionContainer from "./QuestionContainer";
import TagContainer from "./TagContainer";
import Content from "../Content";
import SearchComponent from "./SearchComponent";
import Header from "../header/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <SearchComponent />
      <br />
      <Content>
        <QuestionContainer />
        <TagContainer />
      </Content>
      <Header />
    </div>
  );
}
