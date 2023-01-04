import React, { Component } from 'react';
// import MyComponent from './MyComponent';
// import Say from './Say';
// import EventPractice from './EventPractice';
// import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';

class App extends Component {
  render() {
    return (
      <div>
        <ScrollBox ref={(ref) => this.scrollBox=ref} />
        <button onClick={() => this.scrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
      </div>
    );
  }
}

export default App;

//import './App.css';

// const App = () => {
//   return <EventPractice />;
// };

// function App() {
//   const name = 'react';
//   return (
//     <header>
//       <div className="react">{name}</div>
//       <p></p>
//     </header>
//   );
// }
