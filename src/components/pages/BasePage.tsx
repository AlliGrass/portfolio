import AboutMe from "@/components/sections/AboutMe";
import Capabilities from "@/components/sections/Capabilities";
import Hero from "@/components/sections/Hero";
export default function BasePage({toggleSidePage}: any) {

    return (
        <div>
                  
            <Hero toggleSidePage={toggleSidePage}/>

        
            <AboutMe/>
    
            <Capabilities/>
        </div>
    )
}