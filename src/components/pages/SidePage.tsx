import { useNavigationRefs } from "@/context/NavigationRefsContext";
import Experience from "../sections/side/Experience";
import Resume from "../sections/side/Resume";
import Contact from "../sections/side/Contact";


export default function SidePage({toggleSidePage}: any) {
    const {experienceRef} = useNavigationRefs()

    return (
        <div className="2xl:px-25">
            <Experience ref={experienceRef} toggleSidePage={toggleSidePage}/>

            <Contact/>
            {/* Contact Section  */}
        </div>
    )
}