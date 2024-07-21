import React from "react";
import "./team.scss";
import teamImg from "@/assets/team/team-img.svg";
import Image from "next/image";

const Team = () => {
    return (
        <section id="team">
            <div className="container">
                <h2 className="section__title">Team</h2>
                <div className="team">
                    <div className="team__left">
                        <p>
                            For each project, we form a team that includes a
                            project manager, business analyst, UI / UX designer,
                            DevOps, QA engineer, backend and front-end
                            developers.
                        </p>
                        <p>100+</p>
                        <p>Dedicated team</p>
                    </div>
                    <div className="team__right">
                        <Image width={""} height={""} src={teamImg} alt="img" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
