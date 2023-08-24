import React, { useState } from "react";

import { useTracker } from "../Context/TrackerContext";

function NewTask({ newtask }) {
  const [taskname, settaskname] = useState("");
  const [hours, setHours] = useState("");
  const { state, dispatch } = useTracker();
  const onSubmit = (e) => {
    e.preventDefault();
    if (!taskname || !hours) {
      return;
    }
    dispatch({ type: "IN_TASK", payload: taskname });
    dispatch({
      type: "IN_HOURS",
      payload: { project: taskname, task: taskname, hours },
    });
    settaskname("");
    setHours("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        className="taskInput"
        placeholder="Enter task name"
        value={taskname}
        onChange={(e) => settaskname(e.target.value)}
      />
      <input
        type="number"
        className="taskInput"
        placeholder="Hours"
        value={hours}
        onChange={(e) => setHours(e.target.value)}
      />
      <button className="taskButton" type="submit">
        Add Task
      </button>
    </form>
  );
}

export default NewTask;
