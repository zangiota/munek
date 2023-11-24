import React, { Component } from 'react'
import donate from '../images/z_movie.mp4'
// import donate1 from '../images/maruza2.mp4'
import '../styles/video.css'

class video extends Component {
  render() {
    return (
      <div className="container">
        <div className='video_content'>
          <h1 className='video_title'>/ Biz haqimizda</h1>
          <h3 className='video_cl'>/Eng so'nggi yangiliklar</h3>
          {/* <span className='text_news'>СОЛИҲА АЁЛ ОЛАМНИ ОБОД ЭТАДИ</span> */}
          <p className='video_text'>
          Ushbu video orqali Zangiota shaxsi va unga atab qurilgan ziyoratgoh tarixi haqida sizga qiziq bo'lgan barcha ma'lumotlarni bilishingiz mumkin.
</p>


          <video className='video_mosque' controls >
            <source src={donate} type="video/mp4" />
          </video>
          {/* <p className='video_text'>Ma'lumot beruvchi shaxs Zangiota ziyoratgohi diniy hodimi: <span className='txt_abror'>Sunnatillayev Abror</span>.</p>
  */}
          {/* <video className='video_mosque' controls >
            <source src={donate1} type="video/mp4" />
          </video> */}
        </div>
      </div>
    );
  }
}

export default video;