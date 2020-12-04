import { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// STYLES
import './global/css/normalize.css';

// PAGES
import Accounts from './pages/Accounts';
import Edit from './pages/Edit';
import View from './pages/View';

function App() {
    let [_accounts, _setAccounts] = useState(null),
        [_currentAccount, _setCurrentAccount] = useState(null);
    
    useEffect(function() {
        if(window.localStorage.getItem('accounts')) {
            _setCurrentAccount(window.sessionStorage.getItem('currentAccount'));
            _setAccounts(JSON.parse(window.localStorage.getItem('accounts')));
        }
        else {
            let defaultAccounts = [
                {
                    id: 0,
                    image: 1,
                    name: 'Álvaro',
                    isAdmin: true
                },
                {
                    id: 1,
                    image: 2,
                    name: 'Claudia'
                },
                {
                    id: 2,
                    image: 3,
                    name: 'Boss Baby'
                }
            ];
            _setAccounts(defaultAccounts);
            _setCurrentAccount(false);
            window.localStorage.setItem('accounts', JSON.stringify(defaultAccounts));
            window.sessionStorage.setItem('currentAccount', false);
        }
    }, []);
    
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/'>
                    {
                        _accounts ? (
                            <Accounts admin={ false } accounts={ _accounts } />
                        ) : null
                    }
                </Route>
                <Route exact path='/ManageProfiles'>
                    {
                        _accounts ? (
                            <Accounts admin={ true } accounts={ _accounts } />
                        ) : null
                    }
                </Route>
                <Route exact path='/edit/new'>
                    <Edit account={ false } />
                </Route>
                <Route exact path='/edit/:id'>
                    {
                        _accounts ? (
                            (props) => (<Edit account={ _accounts[props.match.params.id] } />)
                        ) : null
                    }
                </Route>
                <Route exact path='/view/:id'>
                    {
                        _accounts ? (
                            (props) => (<View account={ _accounts[props.match.params.id] } />)
                        ) : null
                    }
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;