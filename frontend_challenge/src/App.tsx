import React from 'react';
import NewsList from './components/NewsList';

const App: React.FC = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My News App</h1>
      <NewsList />
    </div>
  );
};

export default App;