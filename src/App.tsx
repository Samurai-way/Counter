import React, {useState} from 'react';
import app from './App.module.css';
import {Counter} from "./Counter/Counter";
import {ChangeCounter} from "./ChangeCounter/ChangeCounter";

function App() {



  let [value, setValue]=useState<number>(0);



  return (
    <div className={app.wrapper}>
    <Counter value={value}
             setValue={setValue}/>

    <ChangeCounter/>
    </div>
  );
}

export default App;
