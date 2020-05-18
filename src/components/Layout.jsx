import React from 'react';
import Header from './Header.jsx';

const Layout = ({children}) => {
    return (
        <React.Fragment>
            <Header/>
            {children}
        </React.Fragment>
    )
}
export default Layout;