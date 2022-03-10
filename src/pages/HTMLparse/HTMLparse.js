import React from 'react';
import parse from 'html-react-parser';
import DOMPurify from 'dompurify';

const SpecialButton = ({ children, color }) => (
    <button style={{color}}>{children}</button>
);
  
const htmlFromCMS = `
    <div>Hi, 
        <SpecialButton color="red">My Button</SpecialButton>
    </div>`;

const htmlFrom = (htmlString) => {
        const cleanHtmlString = DOMPurify.sanitize(htmlString,
        { USE_PROFILES: { html: true } });
        const html = parse(cleanHtmlString);
        return html;
}

const HTMLparse = () => {
  return (
    <div>
      {/* {htmlFrom(htmlFromCMS)} */}
      {
          parse(htmlFromCMS)
      }
    </div>
  )
}

export default HTMLparse  