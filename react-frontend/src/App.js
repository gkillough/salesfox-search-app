import './App.css';
import Header from 'modules/components/Header/header';
import Home from 'modules/pages/Home/home';
// import ReactGA from 'react-ga';

function App() {
  // ReactGA.initialize('UA-194080179-1');
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
