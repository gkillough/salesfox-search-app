import './App.css';
import Header from 'modules/components/Header/header';
import Home from 'modules/pages/Home/home';
import ReactGA from 'react-ga';

function App() {
  ReactGA.initialize('G-1DH4G83WZL');
  return (
    <div className="App">
    <Header />
    <Home />
    </div>
  );
}

export default App;
