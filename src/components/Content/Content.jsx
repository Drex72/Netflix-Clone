import React from 'react'
import pic1 from '../../Images/pic1.PNG'
import pic2 from '../../Images/pic2.jpg'
import pic3 from '../../Images/pic3.png'
import './Content.css'
import '../../pages/Landing-Page/Landing-Page.css'
import Button from '../Button/Button'

const Content = () => {
  return (
    <div className="content container ">
      <div className="flex">
        <div className="text3">
          <h2>Enjoy on your TV</h2>
          <p>
            Watch on smart TV's, Playstation, Xbox, ChromeCat, Apple TV, Blu-ray players and more
          </p>
        </div>
        <img src={pic1} alt="" />
      </div>
      <div className="flex">
        <img src={pic2} alt="" />
        <div className="text3">
          <h2>Download your shows to watch offlinee</h2>
          <p>Save your favourite easily and always have something to watch</p>
        </div>
      </div>
      <div className="flex">
        <div className="text3">
          <h2>Watch Everywhere</h2>
          <p>Stream unlimited movies adn TV shows on youe phone, tablet, laptop and TV</p>
        </div>
        <img src="" alt="" />
      </div>
      <div className="flex">
        <img src={pic3} alt="" />
        <div className="text3">
          <h2>Create profile for kids</h2>
          <p>
            Send kids on adventures with their favourite characters in a space made just for them-
            free with your membership
          </p>
        </div>
      </div>
      <section className="question">
        <h1>Frequently Asked Questions</h1>
        <div className="questions">
          <div className="frequent-question">
            <a href="www.google.com">What is Netflix?</a>
            <p>+</p>
          </div>
          <div className="frequent-question">
            <a href="www.google.com">How much does Netflix cost?</a>
            <p>+</p>
          </div>
          <div className="frequent-question">
            <a href="www.google.com">Where can i watch?</a>
            <p>+</p>
          </div>
          <div className="frequent-question">
            <a href="www.google.com">How do i cancel?</a>
            <p>+</p>
          </div>
          <div className="frequent-question">
            <a href="www.google.com">What can i watch on Netflix?</a>
            <p>+</p>
          </div>
          <div className="frequent-question">
            <a href="www.google.com">Is Netflix good for Kids?</a>
            <p>+</p>
          </div>
        </div>
        <p>Ready to watch? Enter you email to create or restart your membership</p>
        <form className="footer-form" action="">
          <input className="email" type="email" name="" placeholder="Email Address" id="" />
          <Button />
        </form>
      </section>
    </div>
  )
}

export default Content
