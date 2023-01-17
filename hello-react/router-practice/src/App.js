import './App.css';
import React, { useState } from 'react';

const App = () => {
  const [splitMe, setSplitMe] = useState(null);
  let Sample;

  const handleClick = () => {
    import('./SplitMe').then(({ default: SplitMe }) => {
      setSplitMe(true);
      Sample = SplitMe
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <Sample />
    </div>
  );
};

export default App;