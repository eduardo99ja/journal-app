import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import { firebase } from '../firebase/firebase-config'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { useDispatch } from 'react-redux'
import { login } from '../actions/auth'

export const AppRouter = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      //if user object exists, evaluate uid
      if (user?.uid) {
        dispatch(login(user.uid, user.displayName))
      }
    })
  }, [dispatch])
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth' component={AuthRouter} />

          <Route exact path='/' component={JournalScreen} />

          <Redirect to='/auth/login' />
        </Switch>
      </div>
    </Router>
  )
}
