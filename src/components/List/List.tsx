import { List } from "../../services/interfaces/List";
import './List.css';

export default function Lists(props: any) {

    const { lists } = props;

    return(
        <>
        <div>
            <img src='https://m.media-amazon.com/images/I/51InKCgVYDL._SL500_.jpg' />
            <ul>
                {/* 
                    <div>
                        <li>Titre</li>
                        <li> - </li>
                        <li>Date de la création de l'article</li>
                    </div>
                    <li>Description</li>
                */}

                {
                        lists.map((message: List, index: number) => (
                            <div key={index}>
                                <li> {message.title} </li>
                                <li> {message.random} </li>
                                <li> {message.date} </li>
                                <br/>
                                <li> {message.description} </li>
                            </div>
                        ))
                    }
            </ul>
        </div>
        </>
    )
}