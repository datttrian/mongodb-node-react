import React from "react";

const ContestPreview: React.FC<{
  contest: any;
  onClick: any;
}> = ({ contest, onClick }) => {
  const handleClick = (event) => {
    event.preventDefault();

    // Navigate to a new view
    onClick();
  };

  return (
    <div className="contest-preview" onClick={handleClick}>
      <div className="category">{contest.categoryName}</div>
      <div className="contest">{contest.contestName}</div>
    </div>
  );
};

export default ContestPreview;
