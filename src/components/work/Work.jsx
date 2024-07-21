import { WORK } from "@/static";
import Image from "next/image";
import React from "react";
import "./work.scss";

const Work = () => {
    let workItems = WORK.map((card) => (
        <div key={card.id} className="work__card">
            <div>
                <Image width={80} height={80} src={card.img} alt="img" />
            </div>
            <div className="work__card__info">
                <h3>{card.title}</h3>
                <p>{card.desc}</p>
            </div>
        </div>
    ));
    return (
        <section id="work">
            <div className="container">
                <div className="work">
                    <h2 className="section__title">How we work!</h2>
                    <div className="work__cards">{workItems}</div>
                </div>
            </div>
        </section>
    );
};

export default Work;
