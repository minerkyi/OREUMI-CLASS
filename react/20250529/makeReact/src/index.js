/* @jsx createElement */
import {createElement, render} from "./react.js";

function Title() {
  return (
    <div>
      <h1 className="title">hello react clone</h1>
      <strong>hello~~~</strong>
    </div>
  );
}

// console.log(Title());

render(<Title />, document.querySelector('#root'));

// const tag = {
//   tag: 'div',
//   props: {
//     id: 'root',
//     class: 'container'
//   },
//   children: [
//     {
//       tag: 'h1',
//       props: {},
//       children: [
//         'hello react'
//       ]
//     },
//     {
//       tag: 'a',
//       props: {
//         href: 'https://www.test.com'
//       },
//       children: [
//         'go to this site'
//       ]
//     }
//   ]
// }