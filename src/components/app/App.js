import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.scss';

import AppHeader from '../appHeader/AppHeader';
import AppFooter from '../appFooter/AppFooter';
import ShareWidget from '../shareWidget/ShareWidget';

import {MainPage, SingleUserPage, Page404} from '../pages';

function App() {
  return (
    <Router>
      <div className="App">
        <AppHeader/>
        <ShareWidget/>

        <main className="main-content">
          <div className='container'>
            <div className='row'>
              <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='/user/:id' element={<SingleUserPage/>}/>
                <Route path='*' element={<Page404/>}/>
              </Routes>             
            </div>
          </div>
        </main>

        <AppFooter/>
      </div>
    </Router>
  );
}

export default App;
