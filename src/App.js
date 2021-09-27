import React, { Component } from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import { ToastContainer } from 'react-toastify';

import './styles/essential_audio.css'
import './styles/normalize.css'
import "./styles/bootstrap.min.css";
import './styles/index.css'
import 'react-toastify/dist/ReactToastify.css';
import NavBar from './components/common/navBar';
import HomePage from './components/homePage';
import ArtistPage from './components/artistPage';
import Artists from './components/artists';
import CreateAccountForm from './components/createAccountForm';
import Genres from "./components/genres";
import SignInForm from './components/signInForm';
import Songs from './components/songs';
import SuggestionPage from './components/suggestionPage';
import UserExperience from './components/userExperience';
import NotFound from './components/common/notFound';
import AlbumPage from './components/albumPage';
import SongPage from './components/songPage';
import ScrollToTop from "./components/common/scrollToTop";
import ForgetPassword from './components/forgetPasswordPage';



class App extends Component {

  componentDidMount() {
    const essential = document.createElement("script")
    essential.src = "/masters-of-rock-frontend/src/utils/essential_audio.js"
    essential.async = true

    document.body.appendChild(essential)
  }

  render() {
    return <React.Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <header>
        <NavBar />
      </header>
      <main className="container">

        <Switch>
          <Route path="/albums/:id" component={AlbumPage} />
          <Route path="/song/:id" component={SongPage} />
          <Route path="/artists/:id" component={ArtistPage} />
          <Route path="/artists" component={Artists} />
          <Route path="/createAccount" component={CreateAccountForm} />
          <Route path="/genres" component={Genres} />
          <Route path="/homePage" component={HomePage} />
          <Route path="/signIn" component={SignInForm} />
          <Route path="/songs/:type" component={Songs} />
          <Route path="/songs" component={Songs} />
          <Route path="/suggestion" component={SuggestionPage} />
          <Route path="/yourExperience" component={UserExperience} />
          <Route path="/forgetPassword" component={ForgetPassword} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/homePage" />
          <Redirect to="/not-found" />
        </Switch>
        <ScrollToTop />

      </main>
    </React.Fragment>;
  }
}

export default App;