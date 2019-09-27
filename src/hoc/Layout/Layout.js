import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/UI/Footer/Footer';
import Wrapper from '../Wrapper/Wrapper';

const Layout = props => {

    return (
        <div>
            <Header title="Projeto" />
                <Wrapper>
                    {props.children}
                </Wrapper>
            <Footer />
        </div>
    );

}

export default Layout;