import React, {useState} from 'react';
import a from './App.module.css';
import {Counter} from "./components/Counter/Counter";
import {CounterTable} from "./components/Counter_table/Counter_table";



function App() {

    let [value, setValue]=useState<number>(0)

  return (
    <div className={a.wrapper}>
        <CounterTable/>
        <Counter value={value} setValue={setValue}/>
    </div>
  );
}

export default App;
