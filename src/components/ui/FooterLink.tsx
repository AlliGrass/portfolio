

export default function FooterLink({socialDetails}: any) {

    return (
        <a href={socialDetails.link}>{socialDetails.social}</a>
    )
}