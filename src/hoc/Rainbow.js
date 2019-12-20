import React from "react";

const Rainbow = WrappedComponent => {
  const colour = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple"
  ];
  const randomColour = colour[Math.floor(Math.random() * 6)];
  const className = randomColour + "-text";

  return props => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default Rainbow;
