import logo from './logo.svg';
import './App.css';
import Header from './componants/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Players from './componants/Players/Players';
import Login from './componants/Login/Login';
import Register from './componants/Register/Register';
import NotFound from './componants/NotFound/NotFound';
import PlayersDetails from './componants/PlayersDetails/PlayersDetails';
import RequireAuth from './RequireAuth';


function App() {
  
  return (
    <div className="">
     <Header></Header>
     <Routes>
       <Route path='/' element={<Home></Home>}></Route>
       <Route path='/players' element={
         <RequireAuth>
           <Players></Players>
         </RequireAuth>
       }></Route>
       <Route path='/login' element={<Login></Login>}></Route>
       <Route path='/register' element={<Register></Register>}></Route>
       <Route path='/food/:fooddet' element={<PlayersDetails></PlayersDetails>}></Route>
       <Route path='*' element={<NotFound></NotFound>}></Route>

     </Routes>
    </div>
  );
}

export default App;
