import React, { useState } from "react";
import QuestionCard from "./QuestionCard";
import Select from "react-select";

const filterOptions = [
  { value: "UPVOTE", label: "Upvote" },
  { value: "LATEST", label: "Latest" },
];

const questionList = [
  {
    id: 1,
    title:
      "How to correctly trace all outboud Node.js request on server apps with Express",
    description:
      "I try many library, last library I try was global-tunnel-ng, but still have no result. Usually I use fiddler to trace various request, my Fiddler listen port 8888, therefore I try to use",
    postedBy: "Ayush Basnet",
    postedDate: "2022 - 10 - 11",
  },
  {
    id: 2,
    title:
      "How to correctly trace all outboud Node.js request on server apps with Express",
    description:
      "I try many library, last library I try was global-tunnel-ng, but still have no result. Usually I use fiddler to trace various request, my Fiddler listen port 8888, therefore I try to use",
    postedBy: "Ayush Basnet",
    postedDate: "2022 - 10 - 11",
  },
  {
    id: 3,
    title:
      "How to correctly trace all outboud Node.js request on server apps with Express",
    description:
      "I try many library, last library I try was global-tunnel-ng, but still have no result. Usually I use fiddler to trace various request, my Fiddler listen port 8888, therefore I try to use",
    postedBy: "Ayush Basnet",
    postedDate: "2022 - 10 - 11",
  },
  {
    id: 4,
    title:
      "How to correctly trace all outboud Node.js request on server apps with Express",
    description:
      "I try many library, last library I try was global-tunnel-ng, but still have no result. Usually I use fiddler to trace various request, my Fiddler listen port 8888, therefore I try to use",
    postedBy: "Ayush Basnet",
    postedDate: "2022 - 10 - 11",
  },
  {
    id: 5,
    title:
      "How to correctly trace all outboud Node.js request on server apps with Express",
    description:
      "I try many library, last library I try was global-tunnel-ng, but still have no result. Usually I use fiddler to trace various request, my Fiddler listen port 8888, therefore I try to use",
    postedBy: "Ayush Basnet",
    postedDate: "2022 - 10 - 11",
  },
];

export default function QuestionContainer() {
  const [selectedFilter, setSelectedFilter] = useState(filterOptions[0]);
  console.log(selectedFilter);
  return (
    <div className="question-container">
      <SortContainer setSelectedFilter={setSelectedFilter} />
      <div>
        {questionList.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))}
      </div>
    </div>
  );
}

function SortContainer({ setSelectedFilter }) {
  const handleSelectChange = (e) => {
    setSelectedFilter(e.value);
  };
  return (
    <div className="filter-container">
      <h5 className="sort-by-text">Sort By</h5>
      <Select
        className="sort-by-select"
        defaultValue={filterOptions[0]}
        onChange={(e) => handleSelectChange(e)}
        options={filterOptions}
        theme={(theme) => ({
          ...theme,
          borderRadius: "10px",
          colors: {
            ...theme.colors,
          },
        })}
      />
    </div>
  );
}
