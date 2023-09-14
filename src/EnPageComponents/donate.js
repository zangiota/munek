import React, { Component } from 'react'
import donate from '../images/about_zangiota.mp4'
// import donate1 from '../images/maruza2.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ About us</h1>
      <h3 className='video_cl'> /Last news</h3>
      {/* <span className='text_news'>
      A GOOD WOMAN IMPROVES THE WORLD</span> */}
      <p className='video_text'> 
      Through this video, you can know all the information you are interested in about the Zangiota and the history of the memorial complex built in his name.</p>
      
      <video className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
     <p className='video_text'>The informant is the religious worker of Zangiota memorial complex:<span className='txt_abror'>Sunnatillayev Abror</span>.</p>
     {/* <video className='video_mosque' controls >
            <source src={donate1} type="video/mp4" />
          </video> */}
      </div>
      </div>
    );
  }   
}

export default video;