import React from "react";
import "../../css/tagcontainer.css";

export default function TagButton({ tag, selectedTags, setSelectedTags }) {
  const handleTagClick = (tag) => {
    if (tag?.isApplied) {
      const newList = selectedTags.filter((t) => t.id != tag.id);
      setSelectedTags(newList);
    } else {
      setSelectedTags([...selectedTags, { ...tag, isApplied: true }]);
    }
  };

  return (
    <div>
      <button className="tag-btn" onClick={() => handleTagClick(tag)}>
        {tag?.name}
      </button>
    </div>
  );
}
