import { Container } from 'react-bootstrap';
import { BsBookmarkPlus, BsBookmarkFill } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { FcCalendar } from 'react-icons/fc';
import {SiGooglemaps} from 'react-icons/si';
import Navbar from './Navbar';
import {useParams} from 'react-router-dom';
import EventProps from './Props/EventProps';
import axios from 'axios';
import { url } from '../constants';

/*
    To Display:
        -> Location 
        -> Name 
        -> Date/Time 
        -> Img 
        -> tags / interests 
        -> description 
        -> Bookmarked indicator (idk)
*/

function BookMark() {

    const [mark, setBookmark] = useState(false);

    function updateBookmark() {

        setBookmark(!mark);
    }

    return mark ? (
        <BsBookmarkPlus size={42} onClick={updateBookmark} className="hover:scale-110 transition duration-300 ease-in-out ms-auto mt-2"/>
    ) : (
        <BsBookmarkFill size={42} onClick={updateBookmark} className="hover:scale-110 transition duration-300 ease-in-out ms-auto mt-2"/>
    )

}

interface eNTest {

    id: number,
    location: string,
    name: string,
    date: string,
    img: string,
    tags: Array<string>,
    description: string
}

const p1: eNTest = 
{
    id: 5134,
    location: 'Bermuda',
        name: 'Hockey Game',
        date: 'February 2nd',
        img: 'https://overthehedgeblog.files.wordpress.com/2012/01/hammy.jpg?w=584',
        tags: ['sports', 'social'],
        description: 'Come watch NEU vs Harvard with my boy Paul'
    
}

const p2: eNTest = 
{
    id: 783,
    location: 'Boston',
        name: 'Walk',
        date: 'February 4th',
        img: 'https://overthehedgeblog.files.wordpress.com/2012/01/hammy.jpg?w=584',
        tags: ['sports', 'social'],
        description: 'Come watch NEU vs Harvard with my boy Paul'
    
}

const data: Array<eNTest> = [p1, p2];

function TagBubbles(props:any) {

  return (
            <span
  className="whitespace-nowrap rounded-full bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 m-3 px-2.5 py-0.5 text-sm text-purple-700"
>

  {props}
  
</span>
  )
}

function Event() {
    const [eventProps, setEventProps] = useState<EventProps>();
 
    const params  = useParams();
    const id = params.id;
    const eid = params.eid;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    useEffect(() => {
        axios.get(url + "events/" + eid)
            .then(res => {
                console.log(res.data);
                setEventProps(res.data);
            }).catch(err => `Error: ${err}`);
        console.log("Hi" + eventProps?._id);
    }, []);
    return (
        <>
        <Navbar id={id}/>
                <Container className="p-5 bg-gradient-to-l from-green-50 via-blue-50 to-purple-50 mt-5 d-flex justify-content-evenly flex-column">
            <div className="">
            <img 
            src={p1.img}
            width={'65%'}
            className="mx-auto"
            ></img>
            </div>
            <BookMark/>
            <p>
            {eventProps?.dateTime.toLocaleString().split('T')[0] }
            </p>
            <h1 className="text-5xl font-bold">
            {eventProps?.name} 
            </h1>
            <div className="mb-5 mt-5">
            --Placeholder Div--
            </div>
            <h3 className="text-4xl">
                When {"&"} where
            </h3>


            <div className="d-flex">
            <div className="date ms-5 mt-3">
            <FcCalendar
             className="bg-light"
             size={50}
             />
            <h5>
            {eventProps?.dateTime.toLocaleString().split('T')[0] }
                </h5>
                <h5>
                {eventProps?.dateTime.toLocaleString().split('T')[1].split('.')[0] } EST
                </h5>
            </div>
            <div className="location ms-5 mt-3">
                <SiGooglemaps size={50}/>
                <h5>
                    {eventProps?.location}
                </h5>
            </div>
            </div>




            <div className="mb-5 mt-5">
            --Placeholder Div--
            </div>
            <h3 className="text-4xl">
                About the event
            </h3>
            <div className="About">
            
            <p className="text-xl">
                {p1.description}
            </p>
            </div>
            <div className="mb-5 mt-5">
            --Placeholder Div--
            </div>
            <div className="tags">
            <h3 className="mb-3">
                Tags
            </h3>
            {p1.tags.map(TagBubbles)}
            </div>
            </Container>
            </>
    )
}

export default Event;