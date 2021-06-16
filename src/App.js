// import logo from './logo.svg';
// import './App.css';
// import login from './request/login';
import shops from './shops'
import list from './list'
import login from './request/login'
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
      <div>
          <BrowserRouter>
        {/*<Route path="/" component={Home} />*/}
        {/*<Route path="/login" component={login} />*/}
          <Route path="/shops" component={shops}/>
              <Route path="/list" component={list}/>
              <Route path="/login" component={login}/>
          </BrowserRouter>
      </div>
  );
}

export default App;
