import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Page from './components/Page';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');

  return (
    <div>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Page currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
