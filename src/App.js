import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/Main';
import Blog from './components/Blog';
import Materials from './components/Materials';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Main />} />
        <Route path="blog" element={<Blog />} />
        <Route path="materials" element={<Materials />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
