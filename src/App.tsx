import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route,
  Link,
  useHistory,
  useLocation
} from "react-router-dom";
import Dash from './components/DashboardLayoutComponent/Dashlayout';
import Detail from "./pages/DetailComponent";

const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
    setTimeout(cb, 100) // fake async
  },
  signout(cb) {
    this.isAuthenticated = false
    setTimeout(cb, 100) // fake async
  }
}

function PrivateRoute({ children, ...rest }) {
  return (
    <Route {...rest} render={({ location }) => {
      return fakeAuth.isAuthenticated === true
        ? children
        : <Redirect to={{
            pathname: '/login',
            state: { from: location }
          }} />
    }} />
  )
}

function AuthButton () {
  const history = useHistory()

  return fakeAuth.isAuthenticated === true
    ? <p>
        Welcome! <button onClick={() => {
          fakeAuth.signout(() => history.push('/'))
        }}>Sign out</button>
      </p>
    : <p>You are not logged in.</p>
}

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/details/:id">
            <Detail />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

function Login() {
  const [
    redirectToReferrer,
    setRedirectToReferrer
  ] = React.useState(false)

  const { state } = useLocation()

  const login = () => fakeAuth.authenticate(() => {
    setRedirectToReferrer(true)
  })

  if (redirectToReferrer === true) {
    return <Redirect to={state?.from || '/'} />
  }

  return (
    <div>
      <p>You must log in to view the page</p>
      <button onClick={login}>Log in</button>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <Dash></Dash>
    </div>
  );
}
