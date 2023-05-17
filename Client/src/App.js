import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPhones from './pages/AllPhones';
import DetailsPhone from './pages/DetailsPhone';
/* import Error from './pages/Error';
import NotFound from './pages/NotFound'; */



function App() {
return (
  <div className="App">
      <Routes>
      <Route path="/" element={<AllPhones />} />
      <Route path="/phones/:phoneId" element={<DetailsPhone />} />
    {/* <Route path="/error" element={<Error/>} />
    <Route path="*" element={<NotFound/>} /> */}
    </Routes>
</div>
);
}
export default App;
