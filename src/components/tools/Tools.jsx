"use client";
import { TOOLS } from "@/static";
import Image from "next/image";
import React, { useState } from "react";
import "./tools.scss";

const Tools = () => {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setValue((prevValue) =>
            prevValue === selectedValue ? "" : selectedValue
        );
    };

    let toolsItems = TOOLS.map((el) => (
        <div
            key={el.id}
            className={`tools__card ${value && value !== el.job ? "opas" : ""}`}
        >
            <Image width={24} height={24} src={el.img} alt="img" />
            <p>{el.title}</p>
        </div>
    ));
    return (
        <section id="tools">
            <div className="container">
                <div className="tools">
                    <h2 className="section__title">Tools</h2>
                    <form className="tools__form" action="">
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="frontend"
                                value={"frontend"}
                                checked={value === "frontend"}
                                onChange={handleChange}
                            />
                            <label htmlFor="frontend">Frontend</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="backend"
                                value={"backend"}
                                checked={value === "backend"}
                                onChange={handleChange}
                            />
                            <label htmlFor="backend">Backend</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="devops"
                                value={"devops"}
                                checked={value === "devops"}
                                onChange={handleChange}
                            />
                            <label htmlFor="devops">Devops</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="testing"
                                value={"testing"}
                                checked={value === "testing"}
                                onChange={handleChange}
                            />
                            <label htmlFor="testing">Testing</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="design"
                                value={"design"}
                                checked={value === "design"}
                                onChange={handleChange}
                            />
                            <label htmlFor="design">UI/UX</label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="infrastructure"
                                value={"infrastructure"}
                                checked={value === "infrastructure"}
                                onChange={handleChange}
                            />
                            <label htmlFor="infrastructure">
                                Infrastructure
                            </label>
                        </div>
                        <div>
                            <input
                                type="radio"
                                name="job"
                                id="mobile"
                                value={"mobile"}
                                checked={value === "mobile"}
                                onChange={handleChange}
                            />
                            <label htmlFor="mobile">mobile</label>
                        </div>
                    </form>
                    <div className="tools__cards">{toolsItems}</div>
                </div>
            </div>
        </section>
    );
};

export default Tools;
