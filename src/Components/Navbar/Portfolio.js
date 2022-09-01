import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Portfolio() {
  return (
    <>
      <div className="main-container">
        <div className="row">
          <div className="hero_cap">
            <h2>My Portfoli</h2>
          </div>
          <nav>
            <NavLink as={Link} to={"/"}>
              Home
            </NavLink>
            &nbsp;/ &nbsp;
            <NavLink as={Link} to={"portfolio"}>
              My Portfolio
            </NavLink>
          </nav>
        </div>
      </div>

      <section className="services-area  services-padding">
        <div className="container mt-5  ">
          <div className="project-heading mb-35">
            <div className="row align-items-end">
              <div className="col-lg-6">
                <div className="section-tittle">
                  <h2>What Services you will Get from me!</h2>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="properties__button">
                  <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                      <a
                        className="nav-item nav-link active"
                        id="nav-home-tab"
                        data-toggle="tab"
                        href="#nav-home"
                        role="tab"
                        aria-controls="nav-home"
                        aria-selected="false"
                      >
                        All
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-profile-tab"
                        data-toggle="tab"
                        href="#nav-profile"
                        role="tab"
                        aria-controls="nav-profile"
                        aria-selected="false"
                      >
                        {" "}
                        Branding
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-contact-tab"
                        data-toggle="tab"
                        href="#nav-contact"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Logo
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-last-tab"
                        data-toggle="tab"
                        href="#nav-last"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        UI/UX{" "}
                      </a>
                      <a
                        className="nav-item nav-link"
                        id="nav-technology"
                        data-toggle="tab"
                        href="#nav-techno"
                        role="tab"
                        aria-controls="nav-contact"
                        aria-selected="false"
                      >
                        Web Design
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="tab-content active" id="nav-tabContent">
                <div
                  className="tab-pane fade active show"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="https://preview.colorlib.com/theme/personalportfolio/assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-contact"
                  role="tabpanel"
                  aria-labelledby="nav-contact-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                            alt=""
                            data-pagespeed-url-hash="4253337567"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                                alt=""
                                data-pagespeed-url-hash="3958837646"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-last"
                  role="tabpanel"
                  aria-labelledby="nav-last-tab"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                            alt=""
                            data-pagespeed-url-hash="3958837646"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                                alt=""
                                data-pagespeed-url-hash="252870192"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="nav-techno"
                  role="tabpanel"
                  aria-labelledby="nav-technology"
                >
                  <div className="services-caption">
                    <div className="row">
                      <div className="col-lg-8 col-md-8 col-sm-8">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices3.png.pagespeed.ic._OiupxHuSe.webp"
                            alt=""
                            data-pagespeed-url-hash="252870192"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="row">
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices2.png.pagespeed.ic.ptrM11wVrw.webp"
                                alt=""
                                data-pagespeed-url-hash="4253337567"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                          <div className="col-lg-12">
                            <div className="single-services mb-30">
                              <img
                                src="assets/img/service/xservices1.png.pagespeed.ic.CUSBfud6Mi.webp"
                                alt=""
                                data-pagespeed-url-hash="3958837646"
                                onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices4.png.pagespeed.ic.hVym9sD8pi.webp"
                            alt=""
                            data-pagespeed-url-hash="547370113"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices5.png.pagespeed.ic.RIUpuP8Qre.webp"
                            alt=""
                            data-pagespeed-url-hash="841870034"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="single-services mb-30">
                          <img
                            src="assets/img/service/xservices6.png.pagespeed.ic.suCHqM6822.webp"
                            alt=""
                            data-pagespeed-url-hash="1136369955"
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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

export default Portfolio;
