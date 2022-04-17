
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Service from './components/Service/Service';
import Banner from './Pages/Home/Banner/Banner';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Routes>
            <Route path='/' element={<Home></Home>}></Route>
        </Routes>
        <Banner></Banner>
        <Service></Service>
    </div>
  );
}

export default App;
