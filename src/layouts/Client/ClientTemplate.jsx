import React from 'react'
import HeaderMenu from './Header/HeaderMenu';
import Footer from './Footer/Footer';
import withLayout from '../../hoc/withLayouts';

function ClientTemplate(props) {
    
    return (

            <div className ="themeClient">
                <HeaderMenu/>
                    {props.children}
                <Footer/>
            </div>
    )
}

export default withLayout(ClientTemplate);