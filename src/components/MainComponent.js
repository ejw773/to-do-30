import React from 'react';
import Jumbotron from './JumbotronComponent';
import CardContainer from './CardContainerComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent'

const Main = () => {
    return (
        <div>
            <Header />
            <Jumbotron />
            <CardContainer />
            <Footer />
        </div>
    )
}

export default Main;