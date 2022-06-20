import React from 'react';
import CardList from './components/CardList/CardList';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <h1 className='page-title'>Ты сегодня покормил кота?</h1>
        <CardList />
      </main>
    </div>
  );
}

export default App;
