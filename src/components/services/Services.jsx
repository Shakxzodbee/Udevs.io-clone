import { SERVICES } from "@/static";
import Image from "next/image";
import React from "react";
import "./services.scss";

const Services = () => {
    let servicesItems = SERVICES.map((card) => (
        <div key={card.id} className="services__card">
            <div className="services__card__img">
                <Image width={30} height={30} src={card.img} alt="img" />
            </div>
            <h3>{card.title}</h3>
        </div>
    ));
    // console.log(SERVICES);
    return (
        <section id="services">
            <div className="container">
                <div className="services">
                    <h2 className="section__title">Our services</h2>
                    <div className="services__cards">{servicesItems}</div>
                </div>
            </div>
        </section>
    );
};

export default Services;
