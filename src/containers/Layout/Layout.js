import React from 'react';
import Aux from '../../hoc/Auxilary';
import Classes from './Layout.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';


const Layout =props=>{
        return (
            <Aux className={Classes.Layout}>
                <Navbar/>
                <main>
                    {props.children}
                </main>
                <Footer/>
            </Aux>
        )
}


export default Layout;