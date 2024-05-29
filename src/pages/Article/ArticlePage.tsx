import Form from '../../components/Form/Form';
import { Author } from '../../services/interfaces/Author';
import './ArticlePage.css';

interface ArticlePage {
    handleSubmitMessage: (message: Author) => void;
    authors: Author[];
}

export default function ArticlePage(props: ArticlePage) {

    const { handleSubmitMessage , authors} = props;

    return (
        <>
            <Form handleSubmitMessage={handleSubmitMessage, authors}></Form>
        </>
    )
}

//Comment rajouter une date dans l'article alors qu'elle apparait dans la page du blog ? Proposez de mettre une date ?
//Mais ça sortirais du cadre de l'exercice en cours.