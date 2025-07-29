interface FooterLinkProps {
    socialDetails: any
}

export default function FooterLink({socialDetails}: FooterLinkProp) {

    return (
        <a href={socialDetails.link} target="_blank">{socialDetails.social}</a>
    )
}