import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Gallery from './components/Gallery/Gallery';

const App = () => (
  <>
    <Header />
    <Main
      title="Portfolio"
      description="Agency provides a full service range including technical skills, design, business understanding."
    />
    <Gallery />
  </>
);

export default App;
