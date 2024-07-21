"use client";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TextField } from "@mui/material";
import "./contact.scss";

const Contact = () => {
    return (
        <section id="contact">
            <div className="container">
                <h2 className="section__title">Contact us</h2>
                <div className="contact">
                    <p>Leave us a message</p>
                    <div className="contact__wrapper">
                        <form className="contact__form">
                            <TextField
                                id="outlined-basic"
                                label="Name"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                            />
                            <TextField
                                id="outlined-multiline-basic"
                                label="Briefly describe your project"
                                variant="outlined"
                                multiline
                                rows={4}
                            />
                            <button className="contact__form__btn">Send</button>
                        </form>

                        <div className="contact__left">
                            <ul className="contact__left__list">
                                <li>
                                    <FaLocationDot />
                                    <span>
                                        Ташкент, Мирзо-Улугбекский район, 5-й
                                        пр. Курган, 32 адрес
                                    </span>
                                </li>
                                <li>
                                    <FaPhoneAlt />
                                    <span>+998 33 66 00 999</span>
                                </li>
                                <li>
                                    <MdEmail />
                                    <span>iconazizbek.b@udevs.io</span>
                                </li>
                                <li>
                                    <FaTelegramPlane />
                                    <span>t.me/azizbekbakhodirov</span>
                                </li>
                                <li>
                                    <FaYoutube /> <FaInstagram /> <FaFacebook />
                                    <FaTwitter />
                                </li>
                            </ul>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d11992.72885232603!2d69.20430054999999!3d41.28313865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1720856970083!5m2!1sen!2s"
                                width="100%"
                                height="250"
                                style={{ border: "0", marginTop: "30px" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
