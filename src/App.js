import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Shared/Header/Header';
import Service from './components/Service/Service';

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Service></Service>
    </div>
  );
}

export default App;
