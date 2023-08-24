import React, { useState } from "react";

import ListingPage from "./Component/ListingPage";
import NewProject from "./Component/NewProject";
import NewTask from "./Component/NewTask";
import { TimeTrackerProvider } from "./Context/TrackerContext";

const App = () => {
  return (
    <div className="App">
      <p>Time tracking app</p>
      <TimeTrackerProvider>
        <NewProject></NewProject>
        <NewTask></NewTask>

        <ListingPage></ListingPage>
      </TimeTrackerProvider>
    </div>
  );
};
export default App;
