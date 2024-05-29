import './App.css'
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import BlogPage from './pages/Blog/BlogPage';
import ArticlePage from './pages/Article/ArticlePage';
import Navbar from './components/Navbar/Navbar';

function App() {

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/article" element={<ArticlePage />} />
      </Routes>
    </>

  )

}

export default App
