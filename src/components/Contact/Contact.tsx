import { useState } from 'react';
import { Message } from '../../services/interfaces/Message';
import './Contact.css';

interface ContactProp {
    handleSubmitMessage: (message: Message) => void;
}

export default function Contact(_props: ContactProp) {

    const [contact, setContact] = useState<any>({
        name: "",
        title: "",
        Message: ""
    })

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newContact = {...contact};
        newContact.name = "Nom"
        setContact(newContact);
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setContact({ ...contact, [name]: value })
    }

    return (
        <>
             <form onSubmit={(evt) => handleSubmit(evt)}>
                    <label htmlFor="name">Nom</label>

                    <input className="" type="text" name="name" id="name" onChange={(evt) => handleChange(evt)} />
                    <br />
                    <br />

                    <label htmlFor="sujet">Sujet:</label>

                    <input className="" type="text" name="title" id="title" onChange={(evt) => handleChange(evt)} />
                    <br />
                    <br />

                    <label htmlFor="message">Message</label>
                    <br />
                    <textarea name="message" id="message" onChange={(evt) => handleChange(evt)}>
                    </textarea>
                    <br />

                    <input type="submit" value="Envoyer" className="btn btn-secondary" />
                </form>
        </>
    )

}