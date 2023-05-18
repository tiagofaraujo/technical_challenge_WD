import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPhones from './pages/AllPhones';


function App() {
return (
  <div className="App">
      <Routes>
      <Route path="/" element={<AllPhones />} />
    </Routes>
</div>
);
}
export default App;