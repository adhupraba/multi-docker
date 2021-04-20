import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Fib from './Fib';
import logo from './logo.svg'
import OtherPage from './OtherPage';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <img src={ logo } className='App-logo' alt='logo' />
          <div className='App-link'>
            <Link to='/'>Home</Link>
            <h1>Fibonacci Calculator</h1>
            <Link to='/otherpage'>Other Page</Link>
          </div>
        </header>
        <div>
          <Route path='/' exact component={ Fib } />
          <Route path='/otherpage' component={ OtherPage } />
        </div>
      </div>
    </Router>
  );
}

export default App;
