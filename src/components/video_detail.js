import React from 'react';
import Loading from 'react-loading';

const VideoDetail = ({video})=>{

  if(!video){
    return (
     <div className="video-detail col-md-8">
      <span className="loader">
        <Loading type='spokes' color='red' />
      </span>
     </div>
    
    )
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;
  
  return(
  <div className="video-detail col-md-8">
   <div className="embed-responsive embed-responsive-16by9">
      <iframe src={url} className="embed-responsive-item"></iframe>
    </div>
    <div className="details">
      <div><h4>{ video.snippet.title }</h4></div>
      <div>{ video.snippet.description }</div>
    </div>
  </div>
  
  );
};

export default VideoDetail;