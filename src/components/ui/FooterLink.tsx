

export default function FooterLink({socialDetails}: any) {

    return (
        <a href={socialDetails.link} target="_blank">{socialDetails.social}</a>
    )
}