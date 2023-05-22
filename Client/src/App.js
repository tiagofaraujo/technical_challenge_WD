import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AllPhones from './pages/AllPhones';
import Spinner from './component/Spinner';
import { useState, useEffect } from 'react';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
    <div className="App">
    <Spinner />;
    </div>
    );
  } else {
    return (
      <div className="App">
          <Routes>
            <Route path="/" element={<AllPhones />} />
          </Routes>
           </div>
    );
  }
}

export default App;
