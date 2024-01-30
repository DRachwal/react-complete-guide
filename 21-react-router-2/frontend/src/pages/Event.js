import { useLoaderData } from "react-router-dom";
import createError from "../helpers/createError";

import EventItem from "../components/EventItem";

const Event = () => {
  const { event } = useLoaderData();
  console.log("event", event);
  return <EventItem event={event} />;
};

export default Event;

export const eventLoader = async ({ request, params }) => {
  const { id } = params;
  const result = await fetch(`http://localhost:8080/events/${id}`);

  if (!result.ok) throw createError(result);

  return result;
};
