// https://console.firebase.google.com/
// https://developers.facebook.com/app
// https://chatengine.io/projects
// https://app.netlify.com/teams/osamasaad1237/overview


import React from "react";
import { BrowserRouter , Switch , Route } from 'react-router-dom'

import { AuthProvider } from "../contexts/AuthContext";

import Chats from "./Chats";
import Login from "./Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
