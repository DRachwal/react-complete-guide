import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

import classes from "./EventForm.module.css";

function EventForm({ method, event }) {
  console.log("event", event);
  const initialInputs = event
    ? event
    : { title: "", image: "", date: "", description: "" };
  const navigate = useNavigate();
  const [inputs, setInputs] = useState(initialInputs);
  console.log("inputs", inputs);

  const cancelHandler = () => {
    navigate("..");
  };

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <Form method="POST" className={classes.form}>
      <p>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          required
          value={inputs.title}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="image">Image</label>
        <input
          id="image"
          type="url"
          name="image"
          required
          value={inputs.image}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          required
          value={inputs.date}
          onChange={inputChangeHandler}
        />
      </p>
      <p>
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="5"
          required
          value={inputs.description}
          onChange={inputChangeHandler}
        />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={cancelHandler}>
          Cancel
        </button>
        <button>Save</button>
      </div>
    </Form>
  );
}

export default EventForm;
