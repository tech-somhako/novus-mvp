"use client"

import { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ onUploadSuccess, uploadUrl }) => {
  const [files, setFiles] = useState([]);
  const [message, setMessage] = useState('');
  const [isUploading, setIsUploading] = useState(false);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    if (selectedFiles.length > 10) {
      setMessage('You can upload up to 10 files only.');
      return;
    }
    setFiles(selectedFiles);
    setMessage('');
  };

  // Handle file upload
  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage('Please select files to upload.');
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append('files', file);
    });

    try {
      setIsUploading(true);
      const response = await axios.post(uploadUrl, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      setMessage('Files uploaded successfully!');
      setFiles([]);
      setIsUploading(false);

      // Callback to notify parent of success
      if (onUploadSuccess) onUploadSuccess(response.data);
    } catch (error) {
      setMessage(error.response?.data?.detail || 'Upload failed.');
      setIsUploading(false);
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', borderRadius: '5px', maxWidth: '400px' }}>
      <h4>Upload Files</h4>
      <input type="file" multiple onChange={handleFileChange} />
      <button 
        onClick={handleUpload} 
        disabled={isUploading}
        style={{ marginTop: '10px', padding: '5px 10px' }}
      >
        {isUploading ? 'Uploading...' : 'Upload'}
      </button>
      {message && <p style={{ color: message.includes('successfully') ? 'green' : 'red' }}>{message}</p>}
    </div>
  );
};

export default FileUpload;
