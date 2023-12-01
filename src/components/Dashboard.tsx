import 'bootstrap/dist/css/bootstrap.min.css';
import './Dashboard.css';
import React, { useState } from 'react';
import { Button, Col, Container, ListGroup, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';

export function Dashboard() {
    return (
        <Container>
            <ColumnWithOptions></ColumnWithOptions>
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
                <ListGroup className="options-list">
                    <Button variant="light" onClick={() => handleOptionClick('manual')}>
                        Manual Entry
                    </Button>
                    <Button variant="light" onClick={() => handleOptionClick('barcode')}>
                        Barcode Scan
                    </Button>
                    <Button variant="light" onClick={() => handleOptionClick('image-detection')}>
                        Image Detection
                    </Button>
                </ListGroup>
            )}
        </Col>
    );
};
