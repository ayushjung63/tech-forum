import React from "react";
import "../../css/questioncard.css";
import QuestionAnswerIcon from "../../assets/question-icon.png";
import TagButton from "./TagButton";
import { useNavigate } from "react-router-dom";

const tagsList = [
  { id: 1, name: "Java" },
  { id: 2, name: "Spring" },
  { id: 3, name: "Hibernate" },
];

export default function QuestionCard({ question }) {
  const navigate = useNavigate();

  const handleQuestionClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <div>
      <div className="question-main-container">
        <div className="question-icon-container">
          <img src={QuestionAnswerIcon} />
          <p style={{ fontSize: "15px", textAlign: "left", color: "grey" }}>
            1 answer
          </p>
        </div>
        <div className="question-container">
          <h5 onClick={() => handleQuestionClick(question.id)}>
            {question.title}
          </h5>
          <p>{question.description}</p>
          <div className="card-bottom">
            <div className="tag-list">
              {tagsList.map((tag) => (
                <TagButton id={tag.id} tag={tag} />
              ))}
            </div>
            <div className="poster-detail">
              <p>
                {question.postedBy} asked on {question.postedDate}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="queustion-separator" />
    </div>
  );
}
