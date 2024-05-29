import './BlogPage.css';
import '../../components/List/List'
import Lists from '../../components/List/List';

export default function BlogPage() {

    return(
        <>
        
            <h2>Tout les articles du plus récent au plus ancien </h2>

            <Lists />
            <Lists />
            <Lists />

        </>
    )
}