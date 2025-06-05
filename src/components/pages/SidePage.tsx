import Experience from "../sections/Experience";
import Resume from "../sections/Resume";


export default function SidePage({toggleSidePage}: any) {


    return (
        <div className="">
            <Experience toggleSidePage={toggleSidePage}/>

            <Resume/>
        </div>
    )
}