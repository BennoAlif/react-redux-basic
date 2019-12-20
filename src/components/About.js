import React from "react";
import Rainbow from "../hoc/Rainbow"

const About = () => {
  return (
    <div>
      <h4 className="center">About</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat
        corporis commodi sint nihil voluptates tempora veniam vero, eaque
        doloremque exercitationem animi, laborum dolore provident voluptate
        alias voluptatibus error laboriosam quidem.
      </p>
    </div>
  );
};

export default Rainbow(About);
