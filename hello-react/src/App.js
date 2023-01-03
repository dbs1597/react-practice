import React, { Component } from 'react';
import MyComponent from './MyComponent';
import Say from './Say';

//import './App.css';

// function App() {
//   const name = 'react';
//   return (
//     <header>
//       <div className="react">{name}</div>
//       <p></p>
//     </header>
//   );
// }

// class App extends Component {
//   render() {
//     const name = 'react';
//     return (
//       <header>
//         <div className="react">{name}</div>
//         <p></p>
//       </header>
//     );
//   }
// }

const App = () => {
  return <Say />;
};

export default App;
