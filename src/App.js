
import './App.css';
import BlogPage from './Pages/BlogPage';
import Header from './Components/Header';
import Home from './Pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import ReadMorePage from './Pages/ReadMorePage';
import PageNotFound from './Pages/PageNotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/bollywood" element={<BlogPage category="Bollywood"/>}/>
        <Route path="/technology" element={<BlogPage category="Technology" />} />
        <Route path="/technology" element={<BlogPage category="Technology" />} />
        <Route path="/hollywood" element={<BlogPage category="Hollywood" />} />
        <Route path="/fitness" element={<BlogPage category="Fitness" />} />
        <Route path="/food" element={<BlogPage category="Food" />} />
        <Route path="/category/:id"  element = {<ReadMorePage/>} />
        <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
