import logo from './logo.svg';
import './App.css';
import login from './request/login';
import { Route } from 'react-router-dom';

function App() {
  return (
      <div>
        {/*<Route path="/" component={Home} />*/}
        <Route path="/login" component={login
        } />
      </div>
  );
}

export default App;
