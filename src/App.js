
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Service from './components/Service/Service';
import Banner from './Pages/Home/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Blog from './Pages/Blog/Blog';
import Checkout from './Pages/Cheakout/Checkout';
import NoteFound from './Pages/NotFound/NoteFound';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/login' element={<Login></Login>}></Route>
            <Route path='/signup' element={<Register></Register>}></Route>
            <Route path='/about' element={<About></About>}></Route>
            <Route path='/service' element={<Contact></Contact>}></Route>
            <Route path='/blog' element={<Blog></Blog>}></Route>
            <Route path='/checkout' element={<Checkout></Checkout>}></Route>
            <Route path='*' element={<NoteFound></NoteFound>}></Route>
        </Routes>
       
    </div>
  );
}

export default App;
