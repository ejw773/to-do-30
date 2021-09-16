import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const RenderList = ({bullet}) => {
    return (
        <ListGroupItem>{bullet}</ListGroupItem>
    )
}

export default RenderList;