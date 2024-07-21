"use client";
import Image from "next/image";
import React from "react";
import "./portfolio.scss";

const PortfolioSection = ({ data, sectionID }) => {
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
                <div className={`section ${data.status ? "row-reverse" : ""}`}>
                    <div className="section__left">
                        <div className="section__logo">
                            <Image
                                width={""}
                                height={""}
                                src={data.sectionLogo}
                                alt="logo"
                            />
                            <span
                                style={{
                                    color: data.sectionTypeColor,
                                    background: data.sectionTypeBg,
                                }}
                            >
                                {data.sectionType}
                            </span>
                        </div>
                        <div className="section__img-media">
                            <Image
                                width={""}
                                height={500}
                                src={data.sectionImg}
                                alt="img"
                            />
                        </div>
                        <p>{data.sectionDesc}</p>
                        <h3>What we did?</h3>
                        <div className="section__cards">{sectionCards}</div>
                    </div>
                    <div className="section__img">
                        <Image
                            width={""}
                            height={500}
                            src={data.sectionImg}
                            alt="img"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
