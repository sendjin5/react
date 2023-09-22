import React, {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Profile from './pages/Profile';
import Layout from './Layout';
import Articles from './pages/Articles';
import Article from './pages/Article';
import Login from './pages/Login'
import Mypage from './pages/Mypage'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile/:username" element={<Profile />} />   {/*:(콜론이 붙으면 파라미터)*/}
          <Route path="/articles" element={<Articles />} >
            <Route path=":id" element={<Article />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
