import React from "react";
import Content from "../Content";
import QuestionDetail from "./QuestionDetail";
import TagDetail from "./TagDetail";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

export default function QuestionPage({}) {
  const params = useParams();
  console.log(params.id);
  return (
    <div>
      <Header />
      <Content>
        <QuestionDetail />
        <TagDetail />
      </Content>
      <Header />
    </div>
  );
}
