import React from 'react';

const LoaderAnim = ()=>{
  return(
      
  <div className="loader loader--style5" title="4">
  <svg height="30px" id="Layer_1" style={{"enableBackground":"new 0 0 50 50"}} width="100%" version="1.1" viewBox="0 0 24 30" x="0px" y="0px" xmlSpace="preserve">
	<rect height="10" width="4" fill="#333" x="0" y="0"/>
    <animateTransform attributeType="xml"
        attributeName="transform" type="translate"
        values="0 0; 0 20; 0 0"
        begin="0.2s" dur="0.6s" repeatCount="indefinite" />
    </rect>
	<rect height="10" width="4" fill="#333" x="10" y="0"/>
	<rect height="10" width="4" fill="#333" x="20" y="0"/>
</svg>
</div>
  )
};

export default LoaderAnim;