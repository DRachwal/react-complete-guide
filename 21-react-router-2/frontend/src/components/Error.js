import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  console.log("error", error);
  return (
    <>
      <h1>{error.status}</h1>
      <p>{error.statusText}</p>
    </>
  );
};

export default Error;
