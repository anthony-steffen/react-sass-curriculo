import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

import pdfSrc from '../../resume.pdf';

import '../styles/pages/curriculo.sass';

function Curriculo() {
  const [pageNumber, setPageNumber] = useState(1);
  pdfjs.GlobalWorkerOptions.workerSrc = `
  //cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const onDocumentLoadSuccess = ({ numPages }) => {
    setPageNumber(numPages);
  };

  return (
    <div className="curriculo">
      <Document
        file={ pdfSrc }
        onLoadSuccess={ onDocumentLoadSuccess }
        className="curriculo__pdf"
      >
        <Page
          pageNumber={ pageNumber }
        />
      </Document>
    </div>
  );
}

export default Curriculo;
