import Filter from '../Filter';
import Listing from '../Listing';
import './styles.css';

export default function ListingBody() {
    return (
        <main className='container'>
            <Filter />
            <Listing />
        </main>
    );
}