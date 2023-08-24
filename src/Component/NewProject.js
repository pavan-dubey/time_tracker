import React, { useState } from "react";

import { useTracker } from "../Context/TrackerContext";

function NewProject({ newproject }) {
  const [projectname, setProjectname] = useState("");
  const { dispatch } = useTracker();
  const onSubmit = (e) => {
    if (!projectname) {
      return;
    }
    e.preventDefault();
    dispatch({ type: "IN_PROJECT", payload: projectname });
    setProjectname("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="projectInput"
        placeholder="Enter your project name"
        value={projectname}
        onChange={(e) => setProjectname(e.target.value)}
      />
      <button className="projectButton" type="submit">
        Add New Project
      </button>
    </form>
  );
}

export default NewProject;
