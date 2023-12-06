import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./characters.css";
import OpenExternalSiteButton from "../utils/diceroll/diceroll";
import PDFViewer from "../utils/pdfviewer/PDFviewer";

const Characters = () => {
  const defaultPdfSource = "/charSheets/nocharselect.pdf";
  const pdfIframeRef = useRef(null);
  const diceRollerIframeRef = useRef(null);
  const navigate = useNavigate();
  const [pdfLoaded, setPdfLoaded] = useState(false);
  const [charactersVisible, setCharactersVisible] = useState(true);

  const handleClick = (character) => {
    // Update the pdf iframe source dynamically
    pdfIframeRef.current.src = `/charSheets/${character}.pdf`;
    setPdfLoaded(false); // Reset the state when a new PDF is clicked

    // Hide the "characters" container
    setCharactersVisible(false);
  };

  const handlePdfLoad = () => {
    // Set the state to indicate that the PDF has loaded
    setPdfLoaded(true);
  };

  useEffect(() => {
    // Set the default PDF source
    pdfIframeRef.current.src = defaultPdfSource;
  }, [defaultPdfSource]);

  return (
    <div>
      <div className="container transit">
        {charactersVisible && (
          <div className="characters">
            <ul className="list-group">
              <li className="list-group-item">
                <button
                  className="btn btn-success btnStyle"
                  onClick={() => handleClick("Rob")}
                >
                  Rob
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="btn btn-success btnStyle"
                  onClick={() => handleClick("Taylor")}
                >
                  Taylor
                </button>
              </li>
              <li className="list-group-item">
                <button
                  className="btn btn-success btnStyle"
                  onClick={() => handleClick("???")}
                >
                  ???
                </button>
              </li>
            </ul>
          </div>
        )}
        <div className="pdfViewer">
          <iframe
            ref={pdfIframeRef}
            width="100%"
            height="1000px"
            title="PDF Viewer"
            onLoad={handlePdfLoad} // Call the handlePdfLoad function on iframe load
          />
        </div>
        <div className="diceRoller">
          {/* Embed the external dice roller website */}
          <iframe
            ref={diceRollerIframeRef}
            width="100%"
            height="500px" // Adjust the height as needed
            title="Dice Roller"
            src="http://www.edexalted.com/exalteddiceroller/#/diceRollerAdvanced" // Replace with the actual URL of the external dice roller website
          />
          {/* Or, if you want to use a local dice roller, uncomment the line below */}
          {/* <iframe ref={diceRollerIframeRef} width="100%" height="500px" title="Dice Roller" src="/utils/diceroll/diceroll2.jsx" /> */}
        </div>
      </div>
    </div>
  );
};

export default Characters;
