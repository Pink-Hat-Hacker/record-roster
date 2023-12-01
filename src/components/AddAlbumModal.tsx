// AddAlbumModal.tsx
import React, { useState, ChangeEvent } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

interface AddAlbumModalProps {
  show: boolean;
  onHide: () => void;
}

const AddAlbumModal: React.FC<AddAlbumModalProps> = ({ show, onHide }) => {
  const [artistName, setArtistName] = useState('');
  const [albumName, setAlbumName] = useState('');
  const [labelId, setLabelId] = useState('');
  const [notes, setNotes] = useState('');
  const [selectedImage, setSelectedImage] = useState<File | undefined>(undefined);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = (event.target.files as FileList)[0];
    setSelectedImage(file);
  };

  const handleSave = () => {
    console.log('Album data:', { artistName, albumName, labelId, notes, selectedImage });
    // send to mongo

    //reset to empty when closed
    setArtistName('');
    setAlbumName('');
    setLabelId('');
    setNotes('');
    setSelectedImage(undefined);
    onHide();
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Add Album</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="artistName">
            <Form.Label>Artist Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter artist name"
              value={artistName}
              onChange={(e) => setArtistName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="albumName">
            <Form.Label>Album Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter album name"
              value={albumName}
              onChange={(e) => setAlbumName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="labelId">
            <Form.Label>Label ID</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter label ID"
              value={labelId}
              onChange={(e) => setLabelId(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="image">
            <Form.Label>Upload Image</Form.Label>
            <Form.Control
              id="custom-file"
              type='file'
              onChange={handleImageChange}
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddAlbumModal;