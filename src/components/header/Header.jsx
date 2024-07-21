"use client";
import Image from "next/image";
import Link from "next/link";
import React, { memo, useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";
import service1 from "@/assets/header/service-1.svg";
import service2 from "@/assets/header/service-2.svg";
import service3 from "@/assets/header/service-3.svg";
import service4 from "@/assets/header/service-4.svg";
import service5 from "@/assets/header/service-5.svg";
import portfolio from "@/assets/header/portfolio.svg";
import portfolio2 from "@/assets/header/portfolio-2.svg";
import portfolio3 from "@/assets/header/portfolio-3.svg";
import portfolio4 from "@/assets/header/portfolio-4.svg";
import language1 from "@/assets/header/language-1.svg";
import language2 from "@/assets/header/language-2.svg";
import "./header.scss";
import { useTranslation } from "react-i18next";

const sections = [
    { id: "services" },
    { id: "team" },
    { id: "mobile" },
    { id: "erp" },
    { id: "design" },
    { id: "opt" },
    { id: "it" },
    { id: "clients" },
    { id: "delever" },
    { id: "sms" },
    { id: "goodzone" },
    { id: "iman" },
    { id: "contact" },
];

const Header = () => {
    const [show, setShow] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const { t, i18n } = useTranslation();

    useEffect(() => {
        const handleScroll = () => {
            let current = "";

            sections.forEach((section) => {
                const sectionElement = document.getElementById(section.id);
                if (window.pageYOffset >= sectionElement.offsetTop - 60) {
                    current = section.id;
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header>
            <div className="header container">
                <div className="header__logo">
                    <Link href={"/"}>
                        <Image width={100} height={""} src={logo} alt="logo" />
                    </Link>
                </div>
                <nav className={`header__nav ${show ? "show" : ""}`}>
                    <div className="header__close">
                        <div>
                            <Image
                                width={100}
                                height={50}
                                src={logo}
                                alt="logo"
                            />
                        </div>
                        <IoClose onClick={() => setShow(false)} />
                    </div>
                    <ul className="header__list">
                        <li
                            className={`header__item ${
                                activeSection === "services" ? "active" : ""
                            }`}
                            onClick={() => setShow(false)}
                        >
                            <Link href={"#services"}>{t("Direction")}</Link>
                        </li>
                        <li
                            className={`header__item ${
                                activeSection === "team" ? "active" : ""
                            }`}
                            onClick={() => setShow(false)}
                        >
                            <Link href={"#team"}>{t("Command")}</Link>
                        </li>
                        <li
                            className={`header__item ${
                                activeSection === "mobile"
                                    ? "active"
                                    : "" || activeSection === "erp"
                                    ? "active"
                                    : "" || activeSection === "design"
                                    ? "active"
                                    : "" || activeSection === "opt"
                                    ? "active"
                                    : "" || activeSection === "it"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href={"#mobile"}>
                                <span>{t("Services")}</span>{" "}
                                <RiArrowDropDownLine />
                            </Link>
                            <ul
                                className="header__dropdown"
                                style={{ minWidth: "300px" }}
                            >
                                <span className="header__dropdown__title">
                                    Services
                                </span>
                                <li>
                                    <Link href={"#mobile"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service1}
                                            alt="image"
                                        />
                                        <span>
                                            Development of mobile applications
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#erp"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service2}
                                            alt="image"
                                        />
                                        <span>
                                            Development and implementation ERP
                                            systems
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#design"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service3}
                                            alt="image"
                                        />
                                        <span>
                                            User interface, User experience
                                            design
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#opt"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service5}
                                            alt="image"
                                        />
                                        <span>
                                            Optimization IT consulting
                                            infrastructure
                                        </span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#it"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={service4}
                                            alt="image"
                                        />
                                        <span>IT consulting</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li
                            className={`header__item ${
                                activeSection === "tools" ? "active" : ""
                            }`}
                            onClick={() => setShow(false)}
                        >
                            <Link href={"#tools"}>{t("Tools")}</Link>
                        </li>
                        <li
                            className={`header__item ${
                                activeSection === "clients" ? "active" : ""
                            }`}
                            onClick={() => setShow(false)}
                        >
                            <Link href={"#clients"}>{t("Clients")}</Link>
                        </li>
                        <li
                            className={`header__item ${
                                activeSection === "delever"
                                    ? "active"
                                    : "" || activeSection === "sms"
                                    ? "active"
                                    : "" || activeSection === "goodzone"
                                    ? "active"
                                    : "" || activeSection === "iman"
                                    ? "active"
                                    : ""
                            }`}
                        >
                            <Link href={"#delever"}>
                                <span>Portfolio</span> <RiArrowDropDownLine />
                            </Link>
                            <ul className="header__dropdown">
                                <span className="header__dropdown__title">
                                    Portfolio
                                </span>
                                <li>
                                    <Link href={"#delever"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={portfolio}
                                            alt="image"
                                        />
                                        <span>Deliver</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#sms"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={portfolio2}
                                            alt="image"
                                        />
                                        <span>Sms.uz</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#goodzone"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={portfolio3}
                                            alt="image"
                                        />
                                        <span>Goodzone</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href={"#iman"}>
                                        <Image
                                            width={40}
                                            height={40}
                                            src={portfolio4}
                                            alt="image"
                                        />
                                        <span>Iman</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li className="header__item">
                            <Link href={"#"}>
                                <span>{t("Language")}</span>{" "}
                                <RiArrowDropDownLine />
                            </Link>
                            <ul className="header__dropdown">
                                <li>
                                    <Link
                                        href={"#"}
                                        onClick={(e) =>
                                            i18n.changeLanguage("ru")
                                        }
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={language1}
                                            alt="image"
                                        />
                                        <span>Rus</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href={"#"}
                                        onClick={(e) =>
                                            i18n.changeLanguage("en")
                                        }
                                    >
                                        <Image
                                            width={40}
                                            height={40}
                                            src={language2}
                                            alt="image"
                                        />
                                        <span>Eng</span>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <Link
                        href={"#contact"}
                        className="header__btn"
                        onClick={() => setShow(false)}
                    >
                        {t("Contact")}
                    </Link>
                </nav>
                <button onClick={() => setShow(true)} className={`header__bar`}>
                    <FaBars />
                </button>
            </div>
        </header>
    );
};

export default memo(Header);
