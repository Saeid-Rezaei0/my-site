"use client"
import Phone from "@/components/Phone";
import State from "@/components/State";
import Socials from "@/components/ui/Socials";
import { FiDownload } from "react-icons/fi";
import Services from "./Services/page";

import Resume from "./Resume/page";
import Examplework from "./Examplework/page";
import Header from "@/components/Header";
export default function Home() {
  return (
    <>
     <Header />
      <Resume />
      <Examplework />
    {/* <Work /> */}  
      <Services />
      </>
  );
}
