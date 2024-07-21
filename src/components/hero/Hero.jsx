"use client";
import React from "react";
import logo from "@/assets/logo.svg";
import Image from "next/image";
import heroImg from "@/assets/hero/hero-img.svg";
import "./hero.scss";
import { Cursor, Typewriter, useTypewriter } from "react-simple-typewriter";
import Link from "next/link";

const Hero = () => {
    return (
        <section>
            <div className="container">
                <div className="hero ">
                    <div className="hero__left">
                        <Image width={250} height={""} src={logo} alt="logo" />
                        <h1 className="hero__title">IT-Outsourcing Company</h1>
                        <h1 className="hero__title-bot" color="red">
                            <Typewriter
                                words={[
                                    "User interface, User experience design",
                                    "Optimization IT consulting infrastructure",
                                    "Optimization IT consulting infrastructure",
                                    "Development of mobile applications",
                                    "Development and implementation ERP systems",
                                ]}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={120}
                                deleteSpeed={50}
                            />
                        </h1>
                        <Link href={"#contact"}>Contact</Link>
                    </div>
                    <div className="hero__right">
                        <Image width={""} height={""} src={heroImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
