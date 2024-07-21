import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import "./footer.scss";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer">
                    <Image width={200} height={100} src={logo} alt="logo" />
                    <div className="footer__top">
                        <ul className="footer__list">
                            <h3>About us</h3>
                            <li className="footer__item">
                                <Link href={"#services"}>Direction</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#team"}>Command</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#tools"}>Tools</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#clients"}>Clients</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <h3>Services</h3>
                            <li className="footer__item">
                                <Link href={"#mobile"}>
                                    Development of mobile applications
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#erp"}>
                                    Development and implementation ERP systems
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#design"}>
                                    User interface, User experience design IT
                                    consulting
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#opt"}>
                                    Optimization IT consulting infrastructure
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#it"}>IT consulting</Link>
                            </li>
                        </ul>
                        <ul className="footer__list">
                            <h3>Services</h3>
                            <li className="footer__item">
                                <Link href={"#delever"}>Delever</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#sms"}>Sms.uz</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#goodzone"}>Goodzone</Link>
                            </li>
                            <li className="footer__item">
                                <Link href={"#iman"}>Iman</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bot">
                        <p>© 2024 Udevs. All rights reserved</p>
                        <div className="footer__bot__icon">
                            <FaYoutube /> <FaInstagram /> <FaFacebook />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
