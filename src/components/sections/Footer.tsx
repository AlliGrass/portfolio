import FooterLink from "../ui/FooterLink"
import footerLinks from "@/temp/data/personalLinks.json"


export default function Footer() {

    return (
        <footer className="bg-[linear-gradient(180deg,#f0f0ff47_3%,#424874_7%,#f0f0ff_12%)] dark:bg-[linear-gradient(180deg,#1A1A1D47_3%,#A64D79_7%,#1A1A1D_12%)] p-6 row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
            {
                Object.values(footerLinks).map((socialDetails) => {
                return (
                    <FooterLink socialDetails={socialDetails}/>
                )
                })
            }
        </footer>
    )
}