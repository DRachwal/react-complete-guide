import { Link, useLoaderData } from "react-router-dom";
import createError from "../helpers/createError";

import classes from "./EventsList.module.css";

const EventsList = () => {
  const { events } = useLoaderData();

  return (
    <div className={classes.events}>
      <h1>All Events</h1>
      <ul className={classes.list}>
        {events.map((event) => (
          <li key={event.id} className={classes.item}>
            <Link to={event.id}>
              <img src={event.image} alt={event.title} />
              <div className={classes.content}>
                <h2>{event.title}</h2>
                <time>{event.date}</time>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsList;

export const eventsLoader = async () => {
  const result = await fetch("http://localhost:8080/events");

  if (!result.ok) {
    // throw new Response(result.statusText, {
    //   status: result.status,
    //   statusText: result.statusText,
    // });
    throw createError(result);
  }

  return result;
};
