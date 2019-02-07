import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Classes from './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import SideDrawer from '../../components/Navbar/SideDrawer/SideDrawer';


class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false })
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer }
        })
    }
    render() {
        return (
            <Aux className={Classes.Layout}>
                <Navbar toggle={this.sideDrawerToggleHandler} />
                <SideDrawer open={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )

    }
}


export default Layout;