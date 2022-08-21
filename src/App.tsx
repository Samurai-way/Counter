import React, {useState} from 'react';
import app from './App.module.css';
import {Counter} from "./Counter/Counter";

function App() {



  let [value, setValue]=useState<number>(0);



  return (
    <div className={app.wrapper}>
    <Counter value={value}
             setValue={setValue}

    />




    </div>
  );
}

export default App;
