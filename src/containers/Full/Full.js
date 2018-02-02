import React, {Component} from 'react';
import {Link, Switch, Route, Redirect} from 'react-router-dom';

import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Sidebar from '../../components/Sidebar/';
import Breadcrumb from '../../components/Breadcrumb/';
import Aside from '../../components/Aside/';
import Footer from '../../components/Footer/';

import Dashboard from '../../views/Dashboard/';
import Login from "../../views/Pages/Login/Login";

import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';

class Full extends Component {

    componentDidMount() {
        addResponseMessage("Welcome to this awesome chat!");
    }




    render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <main className="main">
            <Breadcrumb />
            <Container fluid>
              <Switch>
                <Route path="/login" name="Login Page" component={Login}/>
                <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                <Redirect from="/" to="/login"/>
              </Switch>
            </Container>
          </main>
          <Aside />
          <Widget
              profileAvatar={"img/avatars/7.jpg"}
              title="MB Trading chat "
              subtitle=""
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Full;
