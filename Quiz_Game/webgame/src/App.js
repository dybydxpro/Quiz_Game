import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './component/Login';
import Main from './component/Main';
import Score from './component/Score';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/score" element={<Score/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
