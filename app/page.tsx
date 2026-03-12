import dynamic from "next/dynamic";
import HeroSection from "./components/HeroSection";

const Cards = dynamic(() => import("./components/cards"));
const MainText = dynamic(() => import("./components/MainText"));
const Work = dynamic(() => import("./components/Work"));
const SecondMainText = dynamic(() => import("./components/SecondMainText"));
const Collabs = dynamic(() => import("./components/Collabs"));
const EventsSecHome = dynamic(() => import("./components/EventsSecHome"));
const Industries = dynamic(() => import("./components/Industries"));
const Stats = dynamic(() => import("./components/Stats"));
const Values = dynamic(() => import("./components/Values"));
const Commitment = dynamic(() => import("./components/Commitment"));

export default function Home() {
  return (
    <>

    <HeroSection/>
    <Cards/>
    <MainText/>
    <Work/>
    <SecondMainText/>
    <Collabs/>
    <EventsSecHome/>
    <Industries/>
    <Stats/>
    <Values/>
    <Commitment/>

    </>
  );
}
