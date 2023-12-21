import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./live.css"

const LivePreview = () => {
  const location = useLocation();
  const { html, css } = location.state;

  useEffect(() => {
    const updatePreview = () => {
      const iframe = document.getElementById("previewFrame");
      const iframeDocument = iframe.contentDocument;
      iframeDocument.open();
      iframeDocument.write(`
      <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@400;500;600&family=Inter:wght@600&family=Lobster+Two:wght@700&display=swap" rel="stylesheet">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100;300;400;700;900&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
      </head>
            <style>${css}</style>
          <body>${html}
          </body>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>

</html>
      `);
      iframeDocument.close();
    };

    updatePreview();
  }, [html, css]);

  const handleDownload = () => {
    const iframe = document.getElementById("previewFrame");
    const iframeDocument = iframe.contentDocument;
    const htmlContent = `<!DOCTYPE html>${iframeDocument.documentElement.outerHTML}`;
    
    const blob = new Blob([htmlContent], { type: "text/html" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "preview.html";
    link.click();
  };

  return (
    <div className="live-preview-container">
      <div className="previewComplete">
        <h2>Live Preview:</h2>
        <iframe
          title="preview"
          id="previewFrame"
          style={{ width: '100%', height: '100vh', border: 'none' }}
        />
      </div>
      <button className="download-button" onClick={handleDownload}>
        Download
      </button>
    </div>
  );
};

export default LivePreview;
