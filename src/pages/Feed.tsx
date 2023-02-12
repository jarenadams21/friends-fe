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
/*
function CardRow() {
    return (
        <Container className="d-flex justify-content-evenly">
        <Row className="m-auto mb-5">
            <EventCard></EventCard>
            <EventCard></EventCard>
            <EventCard></EventCard>
        </Row>
    </Container>
    )
}*/

function InfoCard() {
    return (
        <article
  className="rounded-xl bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 p-0.5 shadow-xl transition hover:animate-background hover:bg-[length:400%_400%] hover:shadow-sm hover:[animation-duration:_4s]"
>
  <div className="rounded-[10px] bg-white p-4 !pt-20 sm:p-6">
    <a href="#">
      <h3 className="mt-0.5 text-lg font-medium text-gray-900">
        Hi brother
      </h3>
    </a>

    <div className="mt-4 flex flex-wrap gap-1">
      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        Snippet
      </span>

      <span
        className="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-xs text-purple-600"
      >
        JavaScript
      </span>
    </div>
  </div>
</article>
    )
}

function InfoRowUnderBanner() {
    return (
        <Container className="d-flex mb-5 justify-content-between">
            <InfoCard/>
            <InfoCard/>
            <InfoCard/>
        </Container>
    )
}


function Feed() {
  const params  = useParams();
  const id = params.id;


    return (<div className="bg-indigo-300">
    
    <Navbar id={id}/>
    <FeedBanner/>
    <InfoRowUnderBanner/>
    <EventCardsList />

    </div>

    )
}

export default Feed ;
