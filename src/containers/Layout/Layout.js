import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';


class Layout extends Component {
    render() {
        return (
            <Aux>
                {/*<Navbar/>
                <SideDrawer open={this.state.showSideDrawer} click={this.sideDrawerClosedHandler} />*/}
                <main>
                    {this.props.children}
                </main>
            </Aux>
        )

    }
}


export default Layout;