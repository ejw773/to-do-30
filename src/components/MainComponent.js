import React from 'react';
import Jumbotron from './JumbotronComponent';
import CardContainer from './CardContainerComponent';
import Header from './HeaderComponent';

const Main = () => {
    return (
        <div>
            <Header />
            <Jumbotron />
            <CardContainer />
        </div>
    )
}

export default Main;