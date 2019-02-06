import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Classes from './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


class Layout extends Component {
    render() {
        return (
            <Aux className={Classes.Layout}>
                <Navbar/>{/*
                <SideDrawer open={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />*/}
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </Aux>
        )

    }
}


export default Layout;