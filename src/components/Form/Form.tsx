import { useState } from 'react';
import { Author } from '../../services/interfaces/Author';
import './Form.css';

interface FormProp {
    handleSubmitMessage: (message: Author) => void;
    authors: Author[];
}

export default function Form(_props: FormProp) {


    const [form, setForm] = useState<any>({
        name: "",
        title: "",
        description: ""
    })


    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const newForm = {...form};
        newForm.author = "Auteur"
        setForm(newForm);
    }

    function handleChange(evt: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
        const { name, value } = evt.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>

            <form onSubmit={(evt) => handleSubmit(evt)}>
                <div id='formPosition'>
                    <label htmlFor="author">Nom auteur</label>

                    <input className="author" type="text" name="name" id="name" onChange={(evt) => handleChange(evt)} />
                    <br />

                    <label htmlFor="title">Titre</label>

                    <input className="title" type="text" name="title" id="title" onChange={(evt) => handleChange(evt)} />
                    <br />

                    <label htmlFor="description">Description</label>
                    <textarea name="description" id="description" onChange={(evt) => handleChange(evt)}>
                    </textarea>
                    <br />
                </div>

                <input type="submit" value="Envoyer" className="btn btn-secondary" />
            </form>

        </>
    )
}