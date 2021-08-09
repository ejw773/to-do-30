import React from 'react';
import RenderCards from './RenderCardsComponent';
import projectInfo from '../shared/projectInfo'

const ProjectCard = () => {
    const renderCards = projectInfo.map((item) => 
        <RenderCards key={item.day} title={item.title} link={item.link} day={item.day}/>
    );
    return (
        <ul>
            {renderCards}
        </ul>
    )
}

export default ProjectCard;
