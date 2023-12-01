import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

export function Dashboard() {
    return (
        <Container>
            <Row>
                <ColumnWithOptions></ColumnWithOptions>
            </Row>
        </Container>
    );
}

const ColumnWithOptions: React.FC = () => {
    const [showOptions, setShowOptions] = useState(false);

    const handleToggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option: string) => {
        // Handle option click logic here
        console.log(`Selected option: ${option}`);
        // You can close the options after selection if needed
        setShowOptions(false);
    };

    return (
        <Col xs={2}>
            <OverlayTrigger
                placement="right"
                overlay={<Tooltip id="tooltip">Select an option</Tooltip>}
            >
                <i className="bi bi-plus-circle" onClick={handleToggleOptions}></i>
            </OverlayTrigger>

            {showOptions && (
                <ListGroup className="options-list">
                    <Button variant="light" onClick={() => handleOptionClick('manual')}>
                        Manual
                    </Button>
                    <Button variant="light" onClick={() => handleOptionClick('barcode')}>
                        Barcode
                    </Button>
                    <Button variant="light" onClick={() => handleOptionClick('image-detection')}>
                        Image Detection
                    </Button>
                </ListGroup>
            )}
        </Col>
    );
};
