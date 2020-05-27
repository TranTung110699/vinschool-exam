import React, {Component} from "react";
import './App.css';
import Menu from "./components/Menu/Menu";
import MenuBeforeLogin from "./components/MenuBeforeLogin/MenuBeforeLogin";
import SideDrawer from "./components/SideMenu/SideDrawer";
import Home from "./components/Home/Home";
import Backdrop from "./components/Backdrop/Backdrop";
import Footer from "./components/Footer/Footer";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Statistical from "./components/statistic-by-month-and-unit/statistical";

class App extends Component {

    state = {
        sideDrawerOpen: false,
    };

    drawerToggleClickHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    backdropClickHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };


  render() {

      let backdrop;

      if (this.state.sideDrawerOpen) {
          backdrop = <Backdrop click={this.backdropClickHandler} />;
      }

    return (
        <Router>
        <div style={{ height: "100%" }}>
            {/*<MenuBeforeLogin/>*/}

            <Menu drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}

            <main style={{marginTop: "80px",marginBottom:'30px'}}>
                <Switch>
                    <Route path="/" component={Home} exact/>
                    <Route path="/static" component={Statistical} exact/>
                </Switch>
            </main>

            <Footer />
        </div>
            </Router>
    );
  }
}

export default App;
