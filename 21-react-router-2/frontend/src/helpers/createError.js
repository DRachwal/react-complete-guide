import { json } from "react-router-dom";

const createError = (result) =>
  json(result.statusText, {
    status: result.status,
    statusText: result.statusText,
  });

export default createError;
