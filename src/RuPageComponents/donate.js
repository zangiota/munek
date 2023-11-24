import React, { Component } from 'react'
import donate from '../images/z_movie.mp4'
// import donate1 from '../images/maruza2.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
      <div className='video_content'>
      <h1 className='video_title'>/ О нас</h1>
      <h3 className='video_cl'> /Последние новости</h3>
      {/* <span className='text_news'>ХОРОШАЯ ЖЕНЩИНА УЛУЧШАЕТ МИР</span> */}
      <p className='video_text'>
      Благодаря этому видео вы сможете узнать всю интересующую вас информацию о Зангиоте и истории мемориального комплекса, построенного его именем.</p>
      <video  className='video_mosque' controls >
      <source src={donate} type="video/mp4"/>
     </video>
     {/* <p className='video_text' >Информант – религиозный деятель Зангиатинского мемориального комплекса: <span className='txt_abror'>Суннатиллаев Аброр</span>.
 </p> */}
     {/* <video className='video_mosque' controls >
            <source src={donate1} type="video/mp4" />
          </video> */}
      </div>
      </div>
    );
  }   
}

export default video;