import React from "react";

const Title = ({ headingText, headingLevel }) => {
  const Heading = headingLevel;
  return (
    <div>
      <Heading>{headingText}</Heading>;
    </div>
  );
};

export default Title;
