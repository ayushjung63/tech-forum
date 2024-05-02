import React, { useState } from "react";
import TagButton from "./TagButton";

const tagsList = [
  { id: 1, name: "Java" },
  { id: 2, name: "Spring" },
  { id: 3, name: "Hibernate" },
  { id: 4, name: "JPA" },
  { id: 5, name: "Persistance" },
];

function TextContainer({ value }) {
  return (
    <div style={{ fontSize: "15px", fontStyle: "italic", color: "GrayText" }}>
      {value}
    </div>
  );
}

export default function TagContainer() {
  const [selectedTags, setSelectedTags] = useState([]);

  console.log(selectedTags);

  return (
    <div className="tag-container">
      <h3>Filter by Tags</h3>
      <div>
        <h5>Applied Tags</h5>
        <div className="tag-list">
          {selectedTags.length > 0 ? (
            selectedTags.map((tag) => (
              <TagButton
                tag={tag}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
              />
            ))
          ) : (
            <TextContainer value={"Filter based on Tag below.."} />
          )}
        </div>
      </div>
      <h5>TAGS</h5>
      <div className="tag-list">
        {tagsList.map((tag) => (
          <TagButton
            tag={tag}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        ))}
      </div>
    </div>
  );
}
