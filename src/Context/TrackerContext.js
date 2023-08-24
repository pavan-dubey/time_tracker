import React, { createContext, useContext, useEffect, useReducer } from "react";

const TimeTrackerContext = createContext();

const initialState = {
  projects: [],
  tasks: [],
  dailyHours: {},
};

const timeTrackerReducer = (state, action) => {
  switch (action.type) {
    case "IN_PROJECT":
      return { ...state, projects: [...state.projects, action.payload] };
    case "IN_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "IN_HOURS":
      const { project, task, hours } = action.payload;
      const date = new Date().toISOString().split("T")[0];
      const dailyHours = { ...state.dailyHours };
      if (!dailyHours[date]) {
        dailyHours[date] = {};
      }
      if (!dailyHours[date][project]) {
        dailyHours[date][project] = {};
      }
      if (!dailyHours[date][project][task]) {
        dailyHours[date][project][task] = 0;
      }
      console.log(dailyHours[date][project][task] + "2");
      dailyHours[date][project][task] += parseFloat(hours);

      return { ...state, dailyHours };
    default:
      return state;
  }
};

export const TimeTrackerProvider = ({ children }) => {
  const [state, dispatch] = useReducer(timeTrackerReducer, initialState);

  return (
    <TimeTrackerContext.Provider value={{ state, dispatch }}>
      {children}
    </TimeTrackerContext.Provider>
  );
};

export const useTracker = () => {
  const context = useContext(TimeTrackerContext);
  if (!context) {
    throw new Error("useTimeTracker must be used within a TimeTrackerProvider");
  }
  return context;
};
