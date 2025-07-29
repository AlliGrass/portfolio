
interface ContactInputProps {
    placeholderText: string,
    inputValue: string,
    handleInputValueChange: () => void
}

export default function ContactInput({placeholderText, inputValue, handleInputValueChange}: ContactInputProps) {

    return (<>
        {
            placeholderText === "Write Message"? 
                <textarea className="border border-defined-light bg-primary-light dark:border-defined-dark dark:bg-primary-dark" placeholder={placeholderText} value={inputValue} onChange={handleInputValueChange}/> 
                : 
                <input className="border border-defined-light bg-primary-light dark:border-defined-dark dark:bg-primary-dark" type={placeholderText === "example@email.com"? "email" : "text" } placeholder={placeholderText} value={inputValue} onChange={handleInputValueChange}/>
        }
    </>)
}