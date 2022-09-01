import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { FiPenTool } from "react-icons/fi";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";

function Services() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className="hero_cap">
            <h2>My Services</h2>
          </div>
          <nav>
            <NavLink as={Link} to={"/"}>
              Home
            </NavLink>
            &nbsp; / &nbsp;
            <NavLink as={Link} to={"services"}>
              My Services
            </NavLink>
          </nav>
        </div>
      </div>

      <section className="categories-area section-padding3 ">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6">
              <div className="section-tittle mb-70">
                <h2>What Services you will Get from me!</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen">
                    <FiPenTool />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">UI/UX Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker">
                    <HiOutlineSpeakerphone />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Digital Marketing</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio">
                    <GrGallery />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Website Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categories-area section-padding3 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-speaker">
                    <HiOutlineSpeakerphone />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Digital Marketing</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-portfolio">
                    <GrGallery />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">Website Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-cat text-center mb-50">
                <div className="cat-icon">
                  <span className="flaticon-pen">
                    {" "}
                    <FiPenTool />
                  </span>
                </div>
                <div className="cat-cap">
                  <h5>
                    <a href="services.html">UI/UX Design</a>
                  </h5>
                  <p>
                    Free resource that will help nderstand thecv designc process
                    and improve theroi nderstand the design process andisei
                    impro are of vquality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="wantToWork-area w-padding2  "
        style={{ marginBottom: "300px" }}
      >
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

export default Services;
