import ContactInput from "@/components/ui/side/ContactInput";
import { useState } from "react";


export default function Contact() {

    const [isValidContactForm, setIsValidContactForm] = useState(true)

    const [emailSubjectOptionInput, setEmailSubjectOptionInput] = useState("")

    const [contactNameInput, setContactNameInput] = useState("")
    const [emailAddressInput, setEmailAddressInput] = useState("")
    const [emailSubjectInput, setEmailSubjectInput] = useState("Career")
    const [emailMessageInput, setEmailMessageInput] = useState("")

    const handleEmailSubjectOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailSubjectOptionInput(e.target.value)
        e.target.value !== "other"? setEmailSubjectInput(e.target.value) : setEmailSubjectInput("")
    }

    const handleContactNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setContactNameInput(e.target.value)
    }

    const handleEmailAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailAddressInput(e.target.value)
    }

    const handleEmailSubjectChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailSubjectInput(e.target.value)
    }

    const handleEmailMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailMessageInput(e.target.value)
    }


    const handleSubmit = async () => {
        if (contactNameInput === "" || emailAddressInput === "" || emailSubjectInput === "" || emailMessageInput === "") {
            setIsValidContactForm(false)
            return
        }

        try {
        const response = await fetch('/api/contact', {
            method: "POST",
            headers: {
            'Content-Type': "application/json"
            },
            body: JSON.stringify({ 
                emailSubject: emailSubjectInput,
                emailAddress: emailAddressInput,
                contactName: contactNameInput,
                emailMessage: emailMessageInput
            })
        });
        
        const data = await response.json();
        if (response.ok) {
            console.log("Success!", data);
        } else {
            console.log("Failed:", data);
            // This will now show more detailed error info
        }
        } catch (error) {
        console.log("Network error:", error);
        }
    }

    return (
        <div className="w-120 p-10 flex flex-col justify-self-center bg-secondary-light dark:bg-secondary-dark">
            <h1>Get In Touch</h1>
            <h2 className="flex justify-between">Name {!isValidContactForm && contactNameInput === "" && <span className="text-[#D70040]">Required</span> }</h2>
            <ContactInput placeholderText={"Your Name"} inputValue={contactNameInput} handleInputValueChange={handleContactNameChange} />
            <h2 className="flex justify-between">Email {!isValidContactForm && emailAddressInput === "" && <span className="text-[#D70040]">Required</span> }</h2>
            <ContactInput placeholderText={"example@email.com"} inputValue={emailAddressInput} handleInputValueChange={handleEmailAddressChange} />
            <h2 className="flex justify-between">Topic {!isValidContactForm && emailSubjectInput === "" && <span className="text-[#D70040]">Required</span> }</h2>
            <select className="border border-defined-light bg-primary-light dark:border-defined-dark dark:bg-primary-dark" onChange={handleEmailSubjectOptionChange} name="" id="">
                <option value="Career">Career</option>
                <option value="Freelance/Contract">Freelance/Contract</option>
                <option value="Collaboration">Collaboration</option>
                <option value="Question/Feedback">Question/Feedback</option>
                <option value="other">Other</option>
            </select>
            { emailSubjectOptionInput === "other" && <ContactInput placeholderText={"Topic"} inputValue={emailSubjectInput} handleInputValueChange={handleEmailSubjectChange} />}
            <h2 className="flex justify-between">Detail {!isValidContactForm && emailMessageInput === "" && <span className="text-[#D70040]">Required</span> }</h2>
            <ContactInput placeholderText={"Write Message"} inputValue={emailMessageInput} handleInputValueChange={handleEmailMessageChange} />


            <button onClick={handleSubmit}>Submit Message</button>
        </div>
    )
}