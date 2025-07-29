import { useNavigationRefs } from "@/context/NavigationRefsContext";
import Experience from "../sections/side/Experience";
import Contact from "../sections/side/Contact";




export default function SidePage() {
    const {experienceRef} = useNavigationRefs()

    return (
        <div className="2xl:px-25">
            <Experience ref={experienceRef}/>

            <Contact/>
            {/* Contact Section  */}
        </div>
    )
}