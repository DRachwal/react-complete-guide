import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

const EventsLayout = () => (
  <>
    <EventsNavigation />
    <Outlet />
  </>
);

export default EventsLayout;
