"use client";
import Image from "next/image";
import React from "react";
import "./servicesSection.scss";
import sectionImgBg from "@/assets/section-bg.png";

const ServicesSection = ({ data, sectionID }) => {
    let sectionCards = data.sectionCards.map((el) => (
        <div
            key={el.id}
            className={`section__card ${data.status ? "card-bg" : ""}`}
        >
            <Image width={56} height={56} src={el.sectionCardImg} alt="img" />
            <h3>{el.sectionCardTitle}</h3>
        </div>
    ));
    return (
        <section
            id={`${sectionID}`}
            className={`sectionId ${data.status ? "bg" : ""}`}
        >
            <div className="container">
                <h2 className="section__title">{data.sectionTitle}</h2>
                <div className={`section ${data.status ? "row-reverse" : ""}`}>
                    <div className="section__left">
                        <p>{data.sectionDesc}</p>
                        <div className="section__cards">{sectionCards}</div>
                    </div>
                    <div className="section__right">
                        <Image
                            width={""}
                            height={""}
                            src={data.sectionImg}
                            alt="img"
                        />
                        <Image
                            width={""}
                            height={""}
                            src={sectionImgBg}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
