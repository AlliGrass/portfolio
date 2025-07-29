import { useContentData } from "@/context/ContentDataContext"
import FooterLink from "../ui/FooterLink"
import parseData from "@/lib/db/parseData"


export default function Footer() {
    const {pageContent} = useContentData()
    return (
        <footer className="bg-[linear-gradient(180deg,#f0f0ff47_3%,#424874_7%,#f0f0ff_12%)] dark:bg-[linear-gradient(180deg,#1A1A1D47_3%,#A64D79_7%,#1A1A1D_12%)] p-6 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            {
                parseData([pageContent, "personalLinks"]).filter((socialDetails) => socialDetails.social !== "logo").map((socialDetails, index) => {
                    return (
                        <FooterLink key={index} socialDetails={socialDetails} />
                    )
                })
            }
        </footer>
    )
}