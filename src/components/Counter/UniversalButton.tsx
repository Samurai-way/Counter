import React from 'react';
// import a from "../App.module.css";
// import {PropsType} from "./Component";
//
//
// export const UniversalButton = (props: PropsType) => {
//
//     let onCLickHundler = () => {
//         props.setCount(props.count + 1)
//     }
//     let onButtonClick = () => {
//         props.setCount(0)
//     }
//     let buttonStyle2 = {
//         backgroundColor: 'red'
//     }
//     let buttonStyle = {
//         backgroundColor: 'green'
//     }
//     let background = {
//         backgroundColor: 'black'
//     }
//
//     return (
//         <div style={props.count === 5 ? background : undefined} className={a.button}>
//             <button style={props.count === 5 ? buttonStyle2 : undefined}
//                     className={a.button1}
//                     onClick={onCLickHundler}
//                     disabled={props.count === 5}>click
//             </button>
//             <button style={props.count === 5 ? buttonStyle : undefined}
//                     className={a.button2} onClick={onButtonClick}
//                     disabled={props.count === 0}>int
//             </button>
//         </div>
//     );
// }