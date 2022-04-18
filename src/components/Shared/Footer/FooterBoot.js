import React from 'react';
import { Button } from 'react-bootstrap';

const FooterBoot = () => {
    return (
        <footer class="footer-area2 pt-5">
      
        <div class="background-footer">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-left">
                            <div class="footer-logo">
                                <a href="#"><img src="images/logo2.png" alt="logo" width="179" height="45"/></a>
                            </div>
                            <p className='pt-3'>Finbuzz Consultancy Services provides support services to US Defined Contribution Plan Third Party Administrators. Our services are based on Outsourcing model </p>
                         
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-middle">
                            <h2 class="footer-title">What We Do</h2>
                            <div class="row">
                                <div class="col-xl-12">
                                    <ul class="footer-list">
                                        <li><a href="#"><i class="fas fa-angle-right"></i>Financial Advice</a></li>
                                        <li><a href="#"><i class="fas fa-angle-right"></i>Planning Strategies</a></li>
                                        <li><a href="#"><i class="fas fa-angle-right"></i>Taxation Planning</a></li>
                                        <li><a href="#"><i class="fas fa-angle-right"></i>Investment Trading</a></li>
                                    </ul>
                                </div>
                             
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-4 col-sm-6">
                        <div class="footer-right2">
                            <h2 class="footer-title">Get Updates!</h2>
                            <p>Sign up for our latest news &amp; articles. We won’t give you spam mails.</p>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Enter your Email"/>
                                <div class="input-group-append">
                                    <Button>Subscribe </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row justify-content-center">
                            <div class="col-lg-12 text-center my-5">
                                <div class="copyright-area">
                                    <p> &copy; finbuzz Consulting  {new Date().getFullYear()} All Rights Reserved </p>
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};

export default FooterBoot;