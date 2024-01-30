import { useLoaderData } from "react-router-dom";

import EventForm from "../components/EventForm";

const EditEvent = () => {
  const { event } = useLoaderData();
  return <EventForm event={event} />;
};

export default EditEvent;
