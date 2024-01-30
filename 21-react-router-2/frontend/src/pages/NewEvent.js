import { redirect } from "react-router-dom";
import createError from "../helpers/createError";

import EventForm from "../components/EventForm";

const NewEvent = () => {
  return <EventForm />;
};

export default NewEvent;

export const action = async ({ request }) => {
  const data = await request.formData();
  console.log("data", data);

  const body = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description"),
  };

  console.log(body);
  const result = await fetch("http://localhost:8080/events", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log("result", result);
  if (!result.ok) throw createError(result);

  return redirect("/events");
};
