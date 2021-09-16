import React from 'react';
import RenderCards from './RenderCardsComponent';
import projectInfo from '../shared/projectInfo';
import reverseCards from './reverseCards';

const ProjectCard = () => {
    const cardsReversed = reverseCards(projectInfo);
    const renderCards = cardsReversed.map((item) => 
        <RenderCards key={item.day} day={item.day} title={item.title} comment={item.comment} bullets={item.bullets} />
    );
    return (
        <ul>
            {renderCards}
        </ul>
    )
}

export default ProjectCard;
