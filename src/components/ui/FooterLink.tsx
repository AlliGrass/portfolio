interface FooterLinkProps {
    socialDetails: {
        social: string,
        img_src: string,
        href_link: string
    }
}

export default function FooterLink({socialDetails}: FooterLinkProps) {
    return (
        <a href={socialDetails.href_link} target="_blank">{socialDetails.social}</a>
    )
}