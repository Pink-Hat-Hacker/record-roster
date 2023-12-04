import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import testIMG from '../assets/test.jpeg';
import AddAlbumModal from './AddAlbumModal';
import React, { useState } from 'react';
import { Container, Button, Card, ListGroup, OverlayTrigger, Row, Col, Tooltip } from 'react-bootstrap';

export function Dashboard() {
    return (
        <div className='dash-container'>
            <Row className='dash-container-row' md={20}>
                <ColumnWithOptions></ColumnWithOptions>
                <Col className='populate-cards'>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant='top' src={testIMG} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

const ColumnWithOptions: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);
    const [showAddAlbumModal, setShowAddAlbumModal] = useState(false);

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option: string) => {
        if (option === 'manual') {
            setShowAddAlbumModal(true);
        }
        console.log(`Selected option: ${option}`);
        setShowOptions(false);
    };
    return (
        <Col className="d-flex align-items-center justify-content-flex-start" id='add-album-col'>
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip">Select an option</Tooltip>}
            >
                <i className="bi bi-plus-circle" id='p-c-icon' onClick={handleToggleOptions}></i>
            </OverlayTrigger>

            {showOptions && (
                <ListGroup className="options-list" variant="flush">
                    <ListGroup.Item action onClick={() => handleOptionClick('manual')}>
                        Manual Entry
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => handleOptionClick('barcode')}>
                        Barcode Scan
                    </ListGroup.Item>
                    <ListGroup.Item action onClick={() => handleOptionClick('image-detection')}>
                        Image Detection
                    </ListGroup.Item>
                </ListGroup>
            )}
            {/* AddAlbumModal */}
            <AddAlbumModal show={showAddAlbumModal} onHide={() => setShowAddAlbumModal(false)} />
        </Col>
    );
};
