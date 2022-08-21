import React, {useState} from 'react';
import a from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {CounterTable} from "./components/Counter_table/Counter_table";

function App() {

  return (
    <div className={a.wrapper}>
        <CounterTable/>
        <Counter/>
    </div>
  );
}

export default App;
