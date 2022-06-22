import React, { useContext } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { CalenderContext } from "./context/CalenderContext";
import format from "date-fns/format";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import getDay from "date-fns/getDay";
import enUS from "date-fns/locale/en-US";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
  "en-us": enUS,
};

const localiser = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});
const App = () => {
  const { events, onChange, onClick, formData } = useContext(CalenderContext);
  return (
    <>
      <div className="container App" style={{ width: "100%" }}>
        <h1>Timeline</h1>
        <button
          type="button"
          className="btn btn-primary mt-2 mb-1"
          data-toggle="modal"
          data-target="#exampleModal"
        >
          Create Appoinment Event
        </button>
        <Calendar
          localizer={localiser}
          startAccessor="start"
          endAccessor="end"
          events={events}
          style={{ height: 500, margin: "50px" }}
        />
      </div>

      {/* Modal for Event Register  */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Add Your Doctors For Appointment
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form action="">
                <small className="form-text text-muted text-capitalize mt-2">Enter Your Doctor Name  </small>
                <input type="text" className="form-control" name="title" value={formData.title} onChange={(e) => onChange(e)} />

                <small className="form-text text-muted text-capitalize mt-2">Pick your starting Comfort date  </small>

                <input type="date" className="form-control" name="start" onChange={(e) => onChange(e)} value={formData.start} />

                <small className="form-text text-muted text-capitalize mt-2">Pick your ending Comfort date  </small>

                <input type="date" className="form-control" name="end" onChange={(e) => onChange(e)} value={formData.end} />
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={onClick}>
                Save Your Appointment
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
