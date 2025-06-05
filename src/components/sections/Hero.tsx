

export default function Hero({toggleSidePage}: any) {

    return(
        <div className="justify-items-center">
            <h1>Allison Grasso</h1>
            <h2>Software Engineer</h2>
            <p>Based in Melbourne, Australia. With a love for problem solving I strive to push myself through challenges</p>
            <button>Projects \/</button> {""}
            <button onClick={toggleSidePage}>Experience {"-->"}</button>
        </div>
    )
}