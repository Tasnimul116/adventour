import "../components/FooterStyle.css";
import React from 'react'



export default function Footer() {
  return (
    <div className="footer">

        <div className="top">

            <div>
                <h1>Adventure</h1>
                <p>Choose Your Travel destination</p>

                
                </div>
            <div>
            <a href="/"> <i className="fa-brands fa-facebook-square"></i></a>
            <a href="/"> <i className="fa-brands fa-twitter-square"></i></a>
            <a href="/"> <i className="fa-brands fa-behance-square"></i></a>
            <a href="/"> <i className="fa-brands fa-instagram-square"></i></a>

            </div>

        </div>

        <div className="middle">
            <div>
                <h4>Project</h4>
                <a href="/">Changelog</a>
                <a href="/">Status</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Github</a>
                <a href="/">Issuses</a>
                <a href="/">Project</a>
                <a href="/">Twitter</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Troubleshooting</a>
                <a href="/">Status</a>
                <a href="/">Contact Us</a>
            </div>
            <div>
                <h4>Project</h4>
                <a href="/">Terms & Conditions</a>
                <a href="/">Privacy Policy</a>
                <a href="/">License</a>
                <a href="/">All Versions</a>
            </div>

        </div>
        <div className="bottom">
            <p>© Made By Tasnimul Hasan Mahi</p>
        </div>
      
    </div>
  )
}
