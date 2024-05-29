import { Message } from "../../services/interfaces/Message";
import './Message.css';

export default function Messages(props: any) {

    const { messages } = props;

    return (
        <>
             <div>
                <ul>
                    {/* 
                    <li>Amine</li> name
                    <li>Le react facile</li> title
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Identifiant Vivamus.</li> description
                    <li>29/05/2024</li> date 
                    */}
                    
                    {
                        messages.map((message: Message, index: number) => (
                            <div key={index}>
                                <li>  {message.name} </li>
                                <li> {message.title} </li>
                                <li> {message.description} </li>
                                <li> {message.date} </li>
                            </div>
                        ))
                    }
                </ul>

                <input type='submit' value="Voir" className="btn btn-secondary" />
            </div>
        </>
    )

}