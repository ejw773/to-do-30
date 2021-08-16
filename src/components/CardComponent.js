import React from 'react';
import RenderCards from './RenderCardsComponent';
import projectInfo from '../shared/projectInfo';

const ProjectCard = () => {
    const renderCards = projectInfo.map((item) => 
        <RenderCards key={item.day} day={item.day} title={item.title} comment={item.comment} />
    );
    return (
        <ul>
            {renderCards}
        </ul>
    )
}

export default ProjectCard;
