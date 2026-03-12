import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Cards from "./components/cards"
import MainText from "./components/MainText";
import Work from "./components/Work";
import SecondMainText from "./components/SecondMainText";
import Collabs from "./components/Collabs";
import Industries from "./components/Industries";
import Stats from "./components/Stats";
import Values from "./components/Values";
import Commitment from "./components/Commitment";

import EventsSecHome from "./components/EventsSecHome";



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
