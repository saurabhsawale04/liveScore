import React from 'react';
import Match from './Match';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Nabar';


const App = () => {
    return(<>
    <Navbar/>
    <Switch>
        <Route exact path="/" render={()=><Match name=''/>}/>
        <Route exact path="/oneday" render={()=><Match name='ODI'/>}/>
        <Route exact path="/twenty20" render={()=><Match name='Twenty20'/>}/>
        <Redirect to='/' />
    </Switch>
    <footer className='foot'>
        <div>Copyright &copy; {new Date().getFullYear()} Saurabh Sawale</div>
    </footer>
    </>);
};

export default App;