import {Container, Row, Col} from 'react-bootstrap';
import EventCard from './EventCard';
import Navbar from './Navbar';

function Feed() {
    return (<>
    <h1>Hai</h1>
    <Navbar/>
    <Container className="d-flex justify-content-center">
        <Row className="mt-5 mb-5">
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
        </Row>
    </Container>
    <Container className="d-flex justify-content-center">
    <Row className="">
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
        </Row>
        </Container>
    
    </>

    )
}

export default Feed;