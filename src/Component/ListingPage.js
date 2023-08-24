import React from "react";
import { useTracker } from "../Context/TrackerContext";

function ListingPage() {
  const { state } = useTracker();
  console.log(state);
  const calculateTotalHours = (date, project, task) => {
    if (
      state.dailyHours[date] &&
      state.dailyHours[date][project] &&
      state.dailyHours[date][project][task]
    ) {
      return state.dailyHours[date][project][task];
    }
    return 0;
  };

  return (
    <div className="listPage">
      <div className="m1">
        <h2>Projects</h2>
        <ol>
          {state?.projects?.map((project, index) => (
            <li key={index}>{project}</li>
          ))}
        </ol>
      </div>
      <div className="m1">
        <h2>Tasks</h2>
        <ol>
          {state?.tasks?.map((task, index) => (
            <li
              key={index}
              style={{
                marginLeft: "-20px",
              }}
            >
              {task} - {new Date().toISOString().split("T")[0]}:{" "}
              {calculateTotalHours(
                new Date().toISOString().split("T")[0],
                task,
                task
              )}{" "}
              hours
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default ListingPage;
