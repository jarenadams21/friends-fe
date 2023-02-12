import {Container, Row, Col} from 'react-bootstrap';
import EventCard from './Feed/EventCard';
import EventCardsList from './Feed/EventCardsList';
import Navbar from './Navbar';
import {useParams} from 'react-router-dom';

function FeedBanner() {
return (
    <Container>
        <img 
    className="mb-5"
    src="https://a.espncdn.com/photo/2010/0929/nba_g_hornets01_576.jpg"
    />
    </Container>
)
}



function Feed() {
  const params  = useParams();
  const id = params.id;


    return (<div className="bg-indigo-300">
    
    <Navbar id={id}/>
    <FeedBanner/>
    <EventCardsList/>

    </div>

    )
}

export default Feed ;
