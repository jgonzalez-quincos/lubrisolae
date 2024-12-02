import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
    const [file, setFile] = useState(null);

    const uploadFile = async () => {
        if (!file) {
            alert("Please select a file!");
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        await fetch("http://localhost:3000/upload", {
            method: "POST",
            body: formData,
        });
        alert("File uploaded!");
    };

    return (
        <div className="container mt-5">
            <h1>File Upload</h1>
            <div className="mb-3">
                <input
                    type="file"
                    className="form-control"
                    onChange={(e) => setFile(e.target.files[0])}
                />
            </div>
            <button className="btn btn-primary" onClick={uploadFile}>
                Upload File
            </button>
        </div>
    );
}

export default App;