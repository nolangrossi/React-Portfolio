import React from "react";

const Resume = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', color: '#333' }}>My Resume</h1>
      <iframe
        src="https://docs.google.com/document/d/e/2PACX-1vRO3dVOO6Ge-NZ5lvJpO1r_ipF5hMfusiSCqrJj0hcMXTbQKgeeZp4qAd2OmoDOA9hZr5fe6laVqoi8/pub?embedded=true"
        width="100%"
        height="780px"
        style={{ border: 'none' }}
        title="Resume"
      ></iframe>
    </div>
  );
};

export default Resume;