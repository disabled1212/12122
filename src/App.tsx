import { Routes, Route, Link } from 'react-router-dom';

import { Homepage } from './pages/Homepage';
import { About } from './pages/Aboutpage';
import { Blogpage } from './pages/Blogpage';
import { Notfoundpage } from './pages/Notfoundpage';

function App() {
  return (
      <>
        <header>
          <Link to="/">About</Link>
          <Link to="/posts">Home</Link>
          <Link to="/about">Blog</Link>
        </header>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/posts" element={<Blogpage />} />
          <Route path="*" element={<Notfoundpage />} />
        </Routes>
      </>
  );
}

export default App;

