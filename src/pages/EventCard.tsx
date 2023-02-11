import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Checkbox from 'react-bootstrap'

function EventCard() {
  return (
    <Card className="align-items-center mb-5 hover:border-red-600"
    style={{ width: '18rem', height: '18rem' }}>
      <Card.Img className="mt-2.5" variant="top" src="https://www.thisiscolossal.com/wp-content/uploads/2019/02/moon_crop.jpg"/>
      <input type="checkbox" className="position-absolute start-100 "></input>
      <Card.Body>
        <Card.Title>Name of Event</Card.Title>
        <Card.Text>
          Event Description
        </Card.Text>
        <div></div>
      </Card.Body>
    </Card>
  );
}

export default EventCard;