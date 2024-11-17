import React, { useState, useEffect } from 'react';
import '../admin/admincss/CarouselImages.css';
import { Link } from 'react-router-dom'

function ImageUploadGallery() {
  const [file, setFile] = useState(null);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const response = await fetch('http://localhost:3000/carousel/images');
    const data = await response.json();
    setImages(data);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('name', name);
    formData.append('description', description);

    const response = await fetch('http://localhost:3000/carousel/uploads', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    alert(result.message);
    fetchImages();
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/carousel/images/${id}`, {
      method: 'DELETE',
    });
    fetchImages();
  };

  return (
    <div className="container">
      <div className="home-navigation">
      <a><Link to={'/AdminHome'}>Home</Link></a>
      </div>
      <div className="upload-section">
        <h2>Image Upload</h2>
        <input
          type="text"
          className="upload-input"
          placeholder="Image Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="upload-input"
          placeholder="Image Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input type="file" className="upload-input" onChange={handleFileChange} />
        <button className="upload-button" onClick={handleUpload}>Upload</button>
      </div>

      <div className="gallery-section">
        <h2>Uploaded Images</h2>
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image._id} className="gallery-item">
              <img src={`http://localhost:3000/${image.path}`} alt={image.name} className="gallery-item-image" />
              <div className="gallery-item-details">
                <h3>{image.name}</h3>
                <p>{image.description}</p>
              </div>
              <button className="delete-button" onClick={() => handleDelete(image._id)}>
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No images available</p>
        )}
      </div>
    </div>
  );
}

export default ImageUploadGallery;
