import Image from "next/image";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import Team from "@/components/team/Team";
import ServicesSection from "@/components/services-section/ServicesSection";
import {
    DELIVER,
    DESIGN,
    ERP,
    GOODZONE,
    IMAN,
    IT,
    MOBILE,
    OPT,
    SMS,
} from "@/static";
import Clients from "@/components/clients/Clients";
import PortfolioSection from "@/components/portfolio-section/PortfolioSection";
import Work from "@/components/work/Work";
import Contact from "@/components/contact/Contact";
import Tools from "@/components/tools/Tools";
import chat from "@/assets/chat.png";
import "./module.scss";

export default function Home() {
    return (
        <main>
            <Hero />
            <Services />
            <Team />
            <ServicesSection data={MOBILE} sectionID={"mobile"} />
            <ServicesSection data={ERP} sectionID={"erp"} />
            <ServicesSection data={DESIGN} sectionID={"design"} />
            <ServicesSection data={OPT} sectionID={"opt"} />
            <ServicesSection data={IT} sectionID={"it"} />
            <Tools />
            <Clients />
            <PortfolioSection data={DELIVER} sectionID={"delever"} />
            <PortfolioSection data={SMS} sectionID={"sms"} />
            <PortfolioSection data={GOODZONE} sectionID={"goodzone"} />
            <PortfolioSection data={IMAN} sectionID={"iman"} />
            <Work />
            <Contact />
            <div className="chat__img">
                <Image width={40} height={40} src={chat} alt="chat" />
            </div>
        </main>
    );
}