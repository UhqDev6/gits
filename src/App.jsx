import React from 'react';
import Header from './components/moleculas/header';
import HomePage from './pages/homepage';

function App() {
  return (
    <div className="w-full font-poppins">
      <header>
        <Header />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
