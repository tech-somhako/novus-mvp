"use client"

import { useState } from "react";
import axios from "axios";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function UploadProfileTab() {
  const [files, setFiles] = useState([]); // State to store selected files
  const [message, setMessage] = useState(""); // State to show success/error messages
  const [isUploading, setIsUploading] = useState(false); // State to track upload progress

  // Allowed file extensions
  const allowedExtensions = ["pdf", "docx", "xls", "xlsx", "txt", "csv"];

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);

    // Validate file types
    const invalidFiles = selectedFiles.filter((file) => {
      const extension = file.name.split(".").pop().toLowerCase();
      return !allowedExtensions.includes(extension);
    });

    if (invalidFiles.length > 0) {
      setMessage(
        `Invalid file type(s): ${invalidFiles.map((f) => f.name).join(", ")}. Allowed types: pdf, docx, xls, xlsx, txt, csv.`
      );
      setFiles([]);
      return;
    }

    // Limit file uploads to 10
    if (selectedFiles.length > 10) {
      setMessage("You can upload up to 10 files only.");
      return;
    }

    setFiles(selectedFiles);
    setMessage("");
  };

  // Handle file upload to backend
  const handleUpload = async () => {
    if (files.length === 0) {
      setMessage("Please select files to upload.");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });

    try {
      setIsUploading(true);
      const response = await axios.post("http://172.207.42.36/upload/", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setMessage("Files uploaded successfully!");
      setFiles([]);
    } catch (error) {
      setMessage(error.response?.data?.detail || "Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <>
      <div className="w-full mt-5">
        <Card>
          <CardContent className="pt-6">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="files">Upload Resumes</Label>
              {/* Input with 'accept' to show only allowed file types */}
              <Input
                id="files"
                type="file"
                multiple
                accept=".pdf, .docx, .xls, .xlsx, .txt, .csv"
                onChange={handleFileChange}
              />
              {/* Upload button */}
              <Button
                onClick={handleUpload}
                disabled={isUploading}
                
              >
                {isUploading ? "Uploading..." : "Upload Files"}
              </Button>

              {/* Display messages */}
              {message && (
                <p
                  className={`mt-2 text-sm ${
                    message.includes("successfully") ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {message}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}