const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000;

// Connect to MongoDB
mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const albumSchema = new mongoose.Schema({
  artistName: String,
  albumName: String,
  year: String,
  labelId: String,
  notes: String,
  selectedImage: String, // Store the image URL in MongoDB
});

const Album = mongoose.model('Album', albumSchema);

app.use(cors());
app.use(express.json());

// API endpoint to save album data
app.post('/api/albums', async (req, res) => {
  try {
    const newAlbum = new Album(req.body);
    await newAlbum.save();
    res.status(201).json(newAlbum);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
