import React,{useState,useEffect} from 'react'
import {Route,Switch} from 'react-router-dom'
import HomePage from "./pages/homepage/Homepage.component";
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/signin/signInAndSignUpPage'
import { auth } from './firebase/firebase.utils'
import './App.css'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setCurrentUser(user)
    })
  }, [])

  useEffect(() => {
    console.log(currentUser)
  },[currentUser])
  
  return (
    <div>
      <Header currentUser={currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
