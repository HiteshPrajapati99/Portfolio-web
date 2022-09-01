import React from "react";
import { Link } from "react-router-dom";
import { Button, NavLink } from "react-bootstrap";
import { AiOutlineHome } from "react-icons/ai";
import { BiMobileAlt } from "react-icons/bi";
import { GrMail } from "react-icons/gr";

function Contact() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className="hero_cap">
            <h2>Contact us</h2>
          </div>
          <nav>
            <NavLink as={Link} to={"/"}>
              Home
            </NavLink>
            &nbsp;/ &nbsp;
            <NavLink as={Link} to={"contact"}>
              Contact
            </NavLink>
          </nav>
        </div>
      </div>

      <section className="contact-section">
        <div className="container">
          <div className="d-none d-sm-block mb-5 pb-4 ">
            <div
              id="map"
              style={{
                height: "480px",
                position: "relative",
                overflow: "hidden",
              }}
              className=""
            >
              <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpfS1oRGreGSBU5HHjMmQ3o5NLw7VdJ6I&amp;callback=initMap"></script>
            </div>
          </div>
        </div>
      </section>

      <div class="row" style={{ margin: "30px" }}>
        <div class="col-12">
          <h2 class="contact-title">Get in Touch</h2>
        </div>
        <div class="col-lg-8">
          <form
            class="form-contact contact_form"
            action="contact_process.php"
            method="post"
            id="contactForm"
            novalidate
          >
            <div class="row">
              <div class="col-12">
                <div class="form-group">
                  <textarea
                    class="form-control w-100"
                    name="message"
                    id="message"
                    cols="30"
                    rows="9"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Message'"
                    placeholder=" Enter Message"
                  ></textarea>
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control valid"
                    name="name"
                    id="name"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter your name'"
                    placeholder="Enter your name"
                  />
                </div>
              </div>
              <div class="col-sm-6">
                <div class="form-group">
                  <input
                    class="form-control valid"
                    name="email"
                    id="email"
                    type="email"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter email address'"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="col-12">
                <div class="form-group">
                  <input
                    class="form-control"
                    name="subject"
                    id="subject"
                    type="text"
                    onfocus="this.placeholder = ''"
                    onblur="this.placeholder = 'Enter Subject'"
                    placeholder="Enter Subject"
                  />
                </div>
              </div>
            </div>
            <div class="form-group mt-3">
              <Button className="sendbutton " size="lg">
                Send
              </Button>
            </div>
          </form>
        </div>
        <div class="col-lg-3 offset-lg-1">
          <div class="media contact-info">
            <span class="contact-info__icon">
              <AiOutlineHome />
            </span>
            <div class="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon">
              <BiMobileAlt />
            </span>
            <div class="media-body">
              <h3>+1 253 565 2365</h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div class="media contact-info">
            <span class="contact-info__icon">
              <GrMail />
            </span>
            <div class="media-body">
              <h3>
                <p>HiteshhPrajapati@skilliq.in</p>
              </h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-area text-light ">
          <div className="container">
            <div className="footer-top footer-padding">
              <div className="row justify-content-center">
                <div className="col-lg-6">
                  <div className="footer-top-cap text-center">
                    <img
                      src="data:image/webp;base64,UklGRqAEAABXRUJQVlA4TJMEAAAv0gAMEH9kkG2kopzH+5PtIQQCSSj7qywlEEhxKDPsuJEkRdqqriH/DTx6ngHUpLZtG8ZtcsoduFYAQBgQMSAAggEwAIAACMAEcABMAIaJBWHCIBCEYUIARp9hgjggDoABYmLCABDoYRCAAACAIBCCgVgQAEEwEASA+wsEABAE8UYiEQgEHI5GI/HBC4lCopBIJOr1SgQSjRscDUcj4Gg4HIVGoeFwOKjd2qTIbd5w0mYUtFnUoXXEmrDZFmOtzCAMszlsxv/sqaruEvR8jeg/BLdtJEnyVHdP9rJT1cfOEyD0Yu76o1lUjO7U6/W5649RKVqoM83ffIrK0HM2KqZwq65r4fZzVIDmGdVSeFpP0uLdF8i5btRTtZzxwuwcI7Xw10tkWY/qNn2LLOsPI38jxzp7zTYuXUSO9dC4/x5Z1m9G/o2Z9FJR8w0tIYT9TjOyTRpsUKwxzxE721Qj2xTLzr/KEBoQDRG3YQl97qptXL6AiEhRrxrGHxNmOpU8QXPYybtUkK4iao6CPKqNcSOD+xEJgagNS+j7xv2PSIeoRZrp1LyMeSVuxMwK0sCPRG9sWEL/YuR/E7QtIQwReTWuktGtHA1jEXM2DKHPX7GNK+eT6PS+pWAG1KYNdoZe0TbNTQghDLI+iTJbnMdEWZjTy46PItQGxZKxkRz6nnH/MxIQ+cqox7T0LcxCvMHClzLN/NuLhJ7EjBxjk9HC8myzkRz6JyP3DNRknKDOoisbPBaNW6woY+VUO0APZCE19IXLtnH1nIHeMrRszqC01SJOJD3usZXER652g8yjidTQ/xn3vyKdwH6xclZLW05pdYiuHgtFqZrwoV3sxAK0kRr6ByMPANuP+ch6geoi4cdMECWvgmAnMfTFS7Zx7ayRTqwYYw1YT/xj3P8OE2NBO9N6pa2GJAaDg41QqkU7C0Xf+WVizERq6O+MPMTG5iSKIB7llMDk9JANWtxCuXKav0VtRg3Qbgy9JlJDf2Mbc7NoPfOWmjRhhQHAfuIzpLRiUI3rFZ8r9YuOiZ3SphYL6aFf3F02cB34jD6yIhYdFR5wYSwhfady7VwBlLdjwQG+YNNieWoxhX5VWErlETbN0NQuOw0UURGJu409s6wg6I2F8PFzXbsx2UIDeH57IWXMA+1EdOR1M2jRwxxzanr5B/avIO6YHqJF9Sek2LWEfqdjZ3LhJvBV6a/dDvygEqaW8H/IILsfrhxwNSXDoIcJU+hApz7Yzj8ZvTmv8wxbmMHxzXbgApvUsU6PSHrlylFbQQDfOcZmOjjYMIV+4yQRHX8/obAAdHD3/VgZNXiHtSOnfayA1QndOE3ECvyC+OT6HOM2cFTMyH7kV4dJ6GjHFgCYfVQWnmO7sDOwFfnVu0NECYU/gfeZk5EDyLL2kq6v2zdxOydKF10OmVZP5EUzX5aFnUR0ugnZ1oZRomjhi9bDNPnhm8i4DlKSPt+BrOu1TxOORg+9hsxr+0R0dG9A/hUiR4N7UAV646R2NPXx26gGNU7LcWQ3KkPieWy87XVUh/jzWN8mVIr2Eg3vQ9Wo+5P3kH8BAA=="
                      alt=""
                      data-pagespeed-url-hash={3314867680}
                      onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                    />
                    <span>
                      <a href="#">
                        <span>
                          hiteshPrajapati@skiliq,mail.in
                          <a href="#"></a>
                        </span>
                      </a>
                    </span>
                    <p>221B Baker Street, Post office Box 353 </p>
                    <p>Park Road, USA - 215431</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="row d-flex justify-content-between align-items-center">
                <div className="col-xl-9 col-lg-8">
                  <div className="footer-copy-right">
                    <p>
                      Copyright © All rights reserved | This template is made
                      with <i className="fa fa-heart" aria-hidden="true" /> by{" "}
                      <a href="https://colorlib.com" target="_blank">
                        Colorlib
                      </a>
                    </p>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-4">
                  <div className="footer-social f-right">
                    <a>Stay Connected</a>
                    <a href="#">
                      <i className="fab fa-twitter" />
                    </a>
                    <a href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a href="#">
                      <i className="fas fa-globe" />
                    </a>
                    <a href="#">
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;
