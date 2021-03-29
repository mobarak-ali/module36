import React from 'react';
import { Button, Card } from 'react-bootstrap';
import './News.css'

const News = (props) => {
    const {title,content,url,source,urlToImage} = props.article;
    return (
        <Card>
            <Card.Header>{source.name}</Card.Header>
            <Card.Img className="img-thumbnail" variant="top" src={urlToImage} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{content}</Card.Text>
                <a href={url} target="_blank" rel="noopener noreferrer">
                <Button variant="primary">Read More</Button> </a> 
            </Card.Body>
        </Card>
    );
};

export default News;