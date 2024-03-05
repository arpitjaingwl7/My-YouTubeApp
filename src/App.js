
import { Provider } from 'react-redux';
import './App.css';
import Body from './Components/Body';
import Head from './Components/Head';
import Sidebar from './Components/Sidebar';
import store from './utils/store';
import { Route, Routes } from 'react-router-dom';
import WatchPage from './Components/WatchPage';



/*
Youtube
    -Home
        -Head
        -Body
          -SideBar
          -MainContainer
              -ButtonList
              -VideoContainer
                  -VideoCart
      -WatchPage
          -Head
          -WatchVideoContainer
          -SideMenu
          -Coment
*/


// const appRouter



function App() {
  return (
    <Provider store={store}>
    <div className="App">
     <Head></Head>
     {/* <Body></Body> */}
<Routes>
  <Route path='/' element={<Body></Body>} ></Route>
  <Route path='/watch' element={<WatchPage></WatchPage>}></Route>
</Routes>

    </div>
    </Provider>
  );
}

export default App;
