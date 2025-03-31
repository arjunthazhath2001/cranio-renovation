import HomeHero from "@/sections/Home/HomeHero";
import CollabWithMind from "@/sections/Home/CollabWithMind";
import Navbar from "@/sections/Navbar";
import { CarouselDemo } from "@/sections/Home/WhyCranio";
export default function Home() {
  return (
    <>
      <Navbar/>
      <HomeHero />
      <CollabWithMind />
      <CarouselDemo/>
      
    </>
  );
}
