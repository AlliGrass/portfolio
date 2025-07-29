
interface ButtonProps {
    buttonTitle: string,
    linkedRef: () => void
}

export default function Button({buttonTitle, linkedRef}: ButtonProps) {

    return (
        <a className="border rounded m-2 p-1  border-primary-text-light bg-button-light hover:bg-button-light-hover dark:border-primary-text-dark dark:bg-button-dark dark:hover:bg-button-dark-hover" onClick={linkedRef}>{buttonTitle}</a>
    )
}