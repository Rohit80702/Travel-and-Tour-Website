import React, { useEffect } from 'react';
import './footer.css';
import video2 from '../../Assets/video (2).mp4';
import { FiChevronRight, FiSend } from 'react-icons/fi';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter, AiOutlineYoutube } from 'react-icons/ai';
import { FaTripadvisor } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} muted autoPlay loop type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div data-aos='fade-up' className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Travel with us</h2>
          </div>
          <div className="inputDiv flex">
            <input data-aos='fade-up' type="text" placeholder='Enter Email Address' />
            <button data-aos='fade-up' className="btn flex" type='submit'>
              SEND <FiSend className='icon' />
            </button>
          </div>
        </div>
        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className="logo flex">
                <MdOutlineTravelExplore className='icon' />ExploreEasy
              </a>
            </div>
            <div data-aos='fade-up' className="footerParagraph">
              Get ready to explore the world hassle-free with ExploreEasy! Our website is your go-to spot for discovering amazing places and planning your dream trip. Whether you're craving a beach getaway, city adventure, or cultural immersion, ExploreEasy makes it simple. With easy-to-use features and tons of options for booking hotels, and activities, ExploreEasy is here to make your travel dreams a reality. Start planning your next adventure with ExploreEasy today!   </div>
            <div data-aos='fade-up' className="footerSocials">
              <AiOutlineTwitter className='icon' />
              <AiOutlineYoutube className='icon' />
              <AiOutlineInstagram className='icon' />
              <FaTripadvisor className='icon' />
            </div>
          </div>
          <div className="footerLinks grid">
            {/* Group 1 */}
            <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
              <span className="groupTitle">
                OUR AGENCY
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Insurance
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Agency
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Tourism
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Payment
              </li>

            </div>
            {/* group 2 */}
            <div data-aos='fade-up' data-aos-duration='4000' className="linkGroup">
              <span className="groupTitle">
                PARTNERS
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Bookings
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Rentcars
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                HostelWorld
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Trivago
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                TripAdvisor
              </li>

            </div>
            {/* group 3 */}
            <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
              <span className="groupTitle">
                LAST MINUTE
              </span>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                London
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon' />
                California
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Indonesia
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Europe
              </li>
              <li className="footerList flex">
                <FiChevronRight className='icon' />
                Oceania
              </li>

            </div>
          </div>
          <div className="footerDiv flex">
            <small>BEST-TRAVEL-WEBSITE</small>
            <small>COPYRIGHT-RESERVED ---ROHIT-2024</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
