import { Container } from 'react-bootstrap';
import EventCard from './Feed/EventCard';
import EventCardsList from './Feed/EventCardsList';

const myPlans = [];

function HeaderTemplate() {
    return (
        <header aria-label="Page Header">
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <div className="text-center sm:text-left">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Welcome Back, User!
        </h1>
      </div>

      <div className="gap-4 sm:mt-0 sm:flex-row sm:items-center">
      <p className="mt-1.5 text-sm text-gray-500">
          Let's make a plan! 🎉
        </p>
        <button
          className="block rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring"
          type="button"
        >
          Create Event
        </button>
      </div>
    </div>
  </div>
</header>

    )
}

function MyPlans() {
    return (
        <Container>
            <HeaderTemplate/>
            <Container>
                <EventCardsList/>
            </Container>
        </Container>
    )
}

export default MyPlans;