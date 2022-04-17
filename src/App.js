
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Service from './components/Service/Service';
import Banner from './Pages/Home/Banner/Banner';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Banner></Banner>
        <Service></Service>
    </div>
  );
}

export default App;
