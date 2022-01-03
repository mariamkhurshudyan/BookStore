import React from "react";
import PropTypes from "prop-types";

const Title = ({ headingText, headingLevel, className }) => {
  const Heading = headingLevel;
  return (
      <Heading className={className} >{headingText}</Heading>
  );
};

Title.propTypes = {
  headingText: PropTypes.string.isRequired,
  headingLevel: PropTypes.string,
  className: PropTypes.string
};
Title.defaulProps = {
  headingLevel: "h1",
};

export default Title;
