import React from "react";
import clients1 from "@/assets/clients/clients1.svg";
import clients2 from "@/assets/clients/clients2.svg";
import clients3 from "@/assets/clients/clients3.svg";
import clients4 from "@/assets/clients/clients4.svg";
import clients5 from "@/assets/clients/clients5.svg";
import clients6 from "@/assets/clients/clients6.svg";
import clients7 from "@/assets/clients/clients7.svg";
import Image from "next/image";
import "./clients.scss";

const Clients = () => {
    return (
        <section id="clients">
            <div className="clients">
                <div className="container">
                    <h2 className="section__title">Clients</h2>
                </div>
                <marquee behavior="scroll" direction="left" scrollamount="5">
                    <ul className="clients__logo">
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients1}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients2}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients3}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients4}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients5}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients6}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients7}
                                alt="img"
                            />
                        </li>
                    </ul>
                </marquee>

                <marquee behavior="scroll" direction="right" scrollamount="5">
                    <ul className="clients__logo">
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients1}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients2}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients3}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients4}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients5}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients6}
                                alt="img"
                            />
                        </li>
                        <li>
                            <Image
                                width={200}
                                height={80}
                                src={clients7}
                                alt="img"
                            />
                        </li>
                    </ul>
                </marquee>
            </div>
        </section>
    );
};

export default Clients;
