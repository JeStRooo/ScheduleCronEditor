import React from 'react';

import {Provider} from "react-redux";

import ScheduleEditor from "./components/ScheduleEditor/ScheduleEditor";

import {store} from "./store/store";

import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ScheduleEditor />
      </div>
    </Provider>
  );
}

export default App;
