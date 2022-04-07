import React from "react";
import "./vlog.css";
// import vlogVideo from "../../assets/videos/vlogDorm.mp4"; //embedded directly into the app

function Vlog() {
  return (
    <div className="vlog-container" id="2">
      {/* //embedded directly into the app */}
      {/* <video autoPlay muted loop controls className="vlog-video">
        <source src={vlogVideo} type="video/mp4" />
      </video> */}
      <iframe
        width="560"
        className="vlog-video"
        height="315"
        src="https://www.youtube.com/embed/EOTEBOaYJzE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        muted
      ></iframe>
    </div>
  );
}

export default Vlog;
