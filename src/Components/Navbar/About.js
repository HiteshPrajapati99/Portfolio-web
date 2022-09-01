import React from "react";
import { NavLink } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { Button } from "react-bootstrap";

function About() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className="hero_cap">
            <h2>About Me</h2>
          </div>
          <nav>
            <NavLink as={Link} to={"/"}>
              Home
            </NavLink>
            &nbsp;/ &nbsp;
            <NavLink as={Link} to={"about"}>
              About Me
            </NavLink>
          </nav>
        </div>
      </div>
      <div className="formargin">
        <div className="container">
          <div className="row  justify-content-between align-items-center ">
            <div className="col-lg-6 col-md-6 mt-5">
              <div className="abou-me-img mb-30 ">
                <img
                  src="https://preview.colorlib.com/theme/personalportfolio/assets/img/gallery/xaboutme.png.pagespeed.ic.wJ8K68WHqJ.webp"
                  alt=""
                />
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="about-me-caption ">
                <h2>
                  I Create Products <br />
                  Not Just Art.
                </h2>
                <p className="pb-30">
                  Unlimited rewards. enjoy attractive discounts flexible Payme
                  options global usage. Unlimited rewards. enjoy attracti exible
                  ayment options global usage.
                </p>
                <h5>
                  Duis aute irure dolor in reprehenderit in voluptate velit esse
                  cillum.
                </h5>
                <p>
                  Unlimited rewards. enjoy attractive discounts flexible Payme
                  options global usage. Unlimited rewards. enjoy attracti exible
                  ayment options global usage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        className="about-area section-paddingt30 "
        style={{ marginTop: "100px" }}
      >
        <div className="container">
          <div className="row ">
            <div className="col-lg-5">
              <div className="about-caption mb-50">
                <h3>Designing With Passion While Exploring The World.</h3>
                <p className="pera1">
                  Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                  labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus.
                </p>
                <p>
                  Consectetur adipiscing elit, sed do eiusmod tempor ididunt ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="about-caption2">
                <h3>
                  Any Type Of Query
                  <br /> & Discussion.
                </h3>
                <p>Late talk with me</p>
                <div className="send-cv">
                  <NavLink className="ateg" as={Link} to={"/"}>
                    Hiteshhp@skiliq.in
                  </NavLink>
                  <BsFillArrowRightSquareFill size="50px" className="arrow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="wantToWork-area w-padding2  ">
        <div className="container">
          <div className="row align-items-center justify-content-between ">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="wantToWork-caption wantToWork-caption2">
                <h2>Dont worry for contact i`m available</h2>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-3">
              <Button size="lg" className="contatbuttonhome">
                Contact Me Now
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* cards */}

      <div class="client-comments section-paddingt30">
        <div class="container">
          <div class="row">
            <div class="col-xl-6 col-lg-8 col-md-10">
              <div class="section-tittle mb-70">
                <h2>Some Possitive Feedback That Encourage Us</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5">
          <div className="card-body">
            <div class="latest-blog-area">
              <div class="col-xl-4 card-body">
                <div class="blog-wrapper">
                  <div class="blog-inner">
                    <div class="blog-top">
                      <div class="person-img">
                        <img
                          src="assets/img/gallery/xblog1.png.pagespeed.ic.z4d2Tq3oGA.webp"
                          alt=""
                        />
                      </div>
                      <div class="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 card-body">
                <div class="blog-wrapper">
                  <div class="blog-inner">
                    <div class="blog-top">
                      <div class="person-img">
                        <img
                          src="assets/img/gallery/xblog3.png.pagespeed.ic.VrOAiMGtdT.webp"
                          alt=""
                        />
                      </div>
                      <div class="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-xl-4 card-body">
                <div class="blog-wrapper">
                  <div class="blog-inner">
                    <div class="blog-top">
                      <div class="person-img">
                        <img
                          src="assets/img/gallery/xblog2.png.pagespeed.ic.vduKNjHUYq.webp"
                          alt=""
                        />
                      </div>
                      <div class="comment-person">
                        <h2>Bradley Erickson</h2>
                        <span>UI/UX Designer</span>
                      </div>
                    </div>
                    <p>
                      Consectetur adipisicing elit, seddosdoe eiusmod tempor
                      incididunt utore etstes dolore magna aliqua. Ut imminim
                      restai veniam, quis nostrud.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="brand-area pb-bottom">
        <div class="container">
          <div className="brand-inrow">
            <div
              class="brand-active brand-border pt-50 pb-40 mb-5"
              style={{
                display: "inline-flex",
                margin: "20px 150px",
              }}
            >
              <div class="single-brand">
                <img
                  src="assets/img/gallery/xbrand1.png.pagespeed.ic.vsJKXq8o6n.webp"
                  alt=""
                  data-pagespeed-url-hash="1771442224"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div class="single-brand">
                <img
                  src="assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp"
                  alt=""
                  data-pagespeed-url-hash="2065942145"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div class="single-brand">
                <img
                  src="assets/img/gallery/xbrand3.png.pagespeed.ic.BidJFeCvq3.webp"
                  alt=""
                  data-pagespeed-url-hash="2360442066"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div class="single-brand">
                <img
                  src="assets/img/gallery/xbrand4.png.pagespeed.ic.W5ZAIexfpO.webp"
                  alt=""
                  data-pagespeed-url-hash="2654941987"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
              <div class="single-brand">
                <img
                  src="assets/img/gallery/xbrand2.png.pagespeed.ic.rFiXzXgh9r.webp"
                  alt=""
                  data-pagespeed-url-hash="2065942145"
                  onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                />
              </div>
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

export default About;
