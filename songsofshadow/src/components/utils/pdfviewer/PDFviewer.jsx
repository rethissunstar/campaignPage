import React, { useState, useEffect } from "react";

const PDFViewer = ({ character }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [character]);

  const pdfSource = character ? `characters/charSheets/${character}.pdf` : "";

  return (
    <div>
      {loaded && (
        <iframe
          src={pdfSource}
          title="PDF Viewer"
          width="100%"
          height="600px"
          sandbox="allow-same-origin allow-scripts"
        />
      )}
    </div>
  );
};

export default PDFViewer;
