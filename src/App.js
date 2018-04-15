import React from 'react';
//import Button from './button/Button';
import { BrowserRouter, Route } from "react-router-dom";
import PostList from './postList/PostList';
import Home from './home/Home';
import AppNavbar from './navbar/AppNavbar';
import PostDetail from './postDetail/PostDetail';
import './App.css';

/* const App = () => (
  
    <div>
        <AppNavbar/>

        <Switch>
          <Route exact path="/" render={Home}/>
          <Route path="/posts" component={PostList} />
          <Route path="/post/:id" component={PostDetail} />
        </Switch>
        
    </div>
  
); */

class App extends React.Component {
  render() {
      return (
        <BrowserRouter>
          <div>
              <AppNavbar/>
              
                <Route exact path="/" render={(props) => <Home {...props}/>}/>
                <Route path="/posts" component={PostList} />
                <Route path="/post/:id" component={PostDetail} />
              
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
