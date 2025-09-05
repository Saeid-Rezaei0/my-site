"use client"
import Services from "./Services/page";

import Resume from "./Resume/page";
import Examplework from "./Examplework/page";
import Header from "@/components/Header";
import Articles from "./Articles/page";
export default function Home() {
  return (
    <>
     <Header />
      <Resume />
      <Examplework />
    {/* <Work /> */}  
      <Services />
      <Articles />
      </>
  );
}
