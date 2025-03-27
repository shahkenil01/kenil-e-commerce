import { LuShirt } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { Link } from 'react-router-dom';
import newsLetterImg from '../../assets/images/newsletter.png';
import { IoMailOutline } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
    return(
        <footer>
            
            <section className="newsLetterSection mt-3 mb-4 d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <p class="text-white mb-1">20% discount for your first order</p>
                            <h3 class="text-white">Join our newsletter and get...</h3>
                            <p class="text-light">Join our email subscription now to get updates on <br /> promotions and coupons.</p><br/>
                            <form>
                                <IoMailOutline/>
                                <input type="text" placeholder="Your Email Address"/>
                                <Button>Subscribe</Button>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img className="img" src={newsLetterImg } />
                        </div>
                    </div>
                </div>
            </section>

            <div className="container">

                <div className="topInfo row">
                    <div className="col d-flex align-items-center">
                        <span><LuShirt/></span>
                        <span className="ml-2">Everyday fresh products</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><TbTruckDelivery/></span>
                        <span className="ml-2">Free delivery for order over ₹700</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><RiDiscountPercentLine/></span>
                        <span className="ml-2">Daily Mega Discounts</span>
                    </div>
                    <div className="col d-flex align-items-center">
                        <span><LiaRupeeSignSolid/></span>
                        <span className="ml-1">Best price on the market</span>
                    </div>
                </div>


                <div className="row mt-5 linksWrap">
                    <div className="col-1">
                        <h5>FRUIT & VEGETABLES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col-2">
                        <h5>BREAKFAST & DAIRY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col-3">
                        <h5>MEAT & SEAFOOD</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col-4">
                        <h5>BEVERAGES</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                    <div className="col-5">
                        <h5>BREADS & BAKERY</h5>
                        <ul>
                            <li><Link to="#">Fresh Vegetables</Link></li>
                            <li><Link to="#">Herbs & Seasonings</Link></li>
                            <li><Link to="#">Fresh Fruits</Link></li>
                            <li><Link to="#">Cuts & Sprouts</Link></li>
                            <li><Link to="#">Exotic Fruits & Veggies</Link></li>
                            <li><Link to="#">Packaged Produce</Link></li>
                            <li><Link to="#">Party Trays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright mt-3 pt-3 pb-3 d-flex">
                    <p className="mb-0">Copyright 2025. All rights reserved.</p>
                    <ul className="list list-inline ml-auto mb-0 socials">
                        <li className="list-inline-item">
                            <Link to="#"><FaFacebookF/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><FaTwitter/></Link>
                        </li>
                        <li className="list-inline-item">
                            <Link to="#"><IoLogoInstagram/></Link>
                        </li>
                    </ul>
                </div>

            </div>
        </footer>
    )
}

export default Footer;