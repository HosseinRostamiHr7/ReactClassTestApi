import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Cards = props => {
    const { title, teacher, time, price, image } = props;
    return (
        <Col className="col-xs-12 col-sm-6 col-md-4 col-lg-3 m-3">
            <Card className="shadow-lg" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {teacher}
                    </Card.Text>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <div className="text-primary">
                            <i className="fa fa-clock-o mx-1"></i>
                            {time}
                        </div>
                        <div>
                            <span className="mx-1 text-success">{price}</span>
                            <span className="text-success">تومان</span>
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Cards;