import React from "react";
import PropTypes from "prop-types";

const Title = ({ headingText, headingLevel }) => {
  const Heading = headingLevel;
  return (
    <div>
      <Heading>{headingText}</Heading>
    </div>
  );
};

Title.propTypes = {
  headingText: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
};
Title.defaulProps = {
  headingLevel: "h1",
};

export default Title;
