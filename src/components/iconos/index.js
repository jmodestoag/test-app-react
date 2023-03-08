import React from 'react';
import Icon from 'mod-icon-library'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap'

function RowColLayoutExample() {
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>    <h1>Iconos SVG Personalizados</h1> </Col>
            </Row>
            <Row >
                <Col>
                    <Form.Label>deleteIcon</Form.Label>
                    <Form.Group className="mb-3">
                        <Icon name="deleteIcon" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>chatUnreadIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="chatUnreadIcon" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>chatUnreadIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="chatUnreadIcon" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>ticketPlusIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="ticketPlusIcon" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>ticketPlusCircularIcon</Form.Label>
                    <Form.Group className="mb-3" >
                        <Icon name="ticketPlusCircularIcon" />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Label>notificacionesIcon</Form.Label>
                    <Form.Group className="mb-3">
                        <Icon name="notificacionesIcon" />
                    </Form.Group>
                </Col>
            </Row>
        </Container>
    );
}

function Iconos() {
    return (
        <>
            <RowColLayoutExample />
        </>
    );
}

export default Iconos;