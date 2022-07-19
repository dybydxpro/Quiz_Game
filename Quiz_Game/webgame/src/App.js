import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from './component/Login';
import Main from './component/Main';
import Score from './component/Score';

import GameLearningLoading from './component/game/learning/GameLearningLoading';
import GameLearningOver from './component/game/learning/GameLearningOver';
import GameLearning from './component/game/learning/GameLearning';
import GameFairLoading from './component/game/fair/GameFairLoading';
import GameFairOver from './component/game/fair/GameFairOver';
import GameFair from './component/game/fair/GameFair';
import GameGoodLoading from './component/game/good/GameGoodLoading';
import GameGoodOver from './component/game/good/GameGoodOver';
import GameGood from './component/game/good/GameGood';
import GameExpertLoading from './component/game/expert/GameExpertLoading';
import GameExpertOver from './component/game/expert/GameExpertOver';
import GameExpert from './component/game/expert/GameExpert';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/main" element={<Main/>} />
          <Route path="/score" element={<Score/>} />
          <Route path="/gamelearning/loading" element={<GameLearningLoading/>} />
          <Route path="/gamelearning/over" element={< GameLearningOver/>} />
          <Route path="/gamelearning" element={<GameLearning/>} />
          <Route path="/gamefair/loading" element={<GameFairLoading/>} />
          <Route path="/gamefair/over" element={< GameFairOver/>} />
          <Route path="/gamefair" element={<GameFair/>} />
          <Route path="/gamegood/loading" element={<GameGoodLoading/>} />
          <Route path="/gamegood/over" element={< GameGoodOver/>} />
          <Route path="/gamegood" element={<GameGood/>} />
          <Route path="/gameexpert/loading" element={<GameExpertLoading/>} />
          <Route path="/gameexpert/over" element={< GameExpertOver/>} />
          <Route path="/gameexpert" element={<GameExpert/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
