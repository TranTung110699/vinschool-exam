import React, {Component} from "react";
import './App.css';
import Menu from "./Component/Menu/Menu";
import MenuBeforeLogin from "./Component/MenuBeforeLogin/MenuBeforeLogin";
import SideDrawer from "./Component/SideMenu/SideDrawer";
import Home from "./Component/Home/Home";
import Backdrop from "./Component/Backdrop/Backdrop";
import Footer from "./Component/Footer/Footer"

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
        <div style={{ height: "100%" }}>
            {/*<MenuBeforeLogin/>*/}

            <Menu drawerClickHandler={this.drawerToggleClickHandler} />
            <SideDrawer show={this.state.sideDrawerOpen} />
            {backdrop}

            <main style={{marginTop: "80px",marginBottom:'30px'}}>
                <Home />
            </main>

            <Footer />
        </div>
    );
  }
}

export default App;
