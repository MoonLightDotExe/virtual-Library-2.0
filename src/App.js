import './App.css';
import CourseCard from './components/CourseCard';
import Header from './components/Header';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UdemyPage from './components/UdemyPage';
import Library from './components/Library';

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route exact path='/' element={
              <>
                <Header />
                <CourseCard />
              </>
            }></Route>
            <Route path='/youtube' element={<UdemyPage />}></Route>
            <Route path='/library' element={<Library />}></Route>
            <Route path='/udemy' element={<UdemyPage />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
