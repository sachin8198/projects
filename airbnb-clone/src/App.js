import './App.css';
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import SearchPage from './components/SearchPage'

function App() {
  return (
    <div className="app">
      <Header/>
      <Switch>
      <Route path="/search" render={(props)=><SearchPage {...props}/>}/>
      <Route path="/" render={(props)=><Home {...props}/>} />

      </Switch>
      <Footer/>
    </div>
  );
}

export default App;
