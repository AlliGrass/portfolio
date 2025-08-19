interface FooterLinkProps {
    socialDetails: {
        social: string,
        img_src: string,
        href_link: string
    }
}

export default function FooterLink({socialDetails}: FooterLinkProps) {
    return (
        <a href={socialDetails.href_link} target="_blank"><img src={socialDetails.img_src} className="w-20 py-8" alt="" /></a>
    )
}