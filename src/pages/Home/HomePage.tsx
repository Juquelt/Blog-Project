import Messages from '../../components/Message/Message';
import { Message } from '../../services/interfaces/Message';
import Contact from '../../components/Contact/Contact';
import Carousel from '../../components/Carousel/Carousel';
import './HomePage.css';

interface HomePage {
    handleSubmitMessage: (message: Message) => void;
}

export default function HomePage() {

    return(
        <>  

            <div>
                <h3>Boite de reception des messages</h3>

                <Messages/>
                <Messages/>
                <Messages/>
            </div>


            <div>
                <h3> Nous contacter </h3>

                <Contact/>
            </div>

            <div>
                <h2>Le dernier article</h2>

                <Carousel/>
            </div>

        </>
    )
}