import React, {useEffect} from 'react';
import {Authorize} from './pages/SignIn';
import { Route, Switch, useHistory } from 'react-router-dom';
import Home from './pages/Home/Home';
import {useDispatch} from 'react-redux';
import {AuthApi} from './services/api/authApi';
import {setUserData} from './store/ducks/user/actionCreators';

function App() {
    const history = useHistory();
    const dispatch = useDispatch();

    const checkAuth = async () => {
        try {
            const {data} = await AuthApi.getMe();
            dispatch(setUserData(data));
            history.replace('/home');
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])

  return (
    <div className="App">
        <b>TEST</b>
        <Switch>
            <Route path='/signIn' component={Authorize}/>
            <Route path='/' component={Home}/>
        </Switch>
    </div>
  );
}

export default App;
