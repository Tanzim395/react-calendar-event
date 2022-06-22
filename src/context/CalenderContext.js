import React, { createContext, useState } from "react";

export const CalenderContext = createContext();

const CalenderContextProvider = ({ children }) => {
  const preEvents = [
    {
      title: "Dr. Sneha Meeting ",
      start: new Date(2022, 6, 19),
      end: new Date(2022, 6, 20),
    },
    {
      title: "Dr. Neeraj Meeting ",
      start: new Date(2022, 6, 23),
      end: new Date(2022, 6, 25),
    },
    {
      title: "Dr. Tanmay Bhatt Meeting ",
      start: new Date(2022, 6, 25),
      end: new Date(2022, 6, 30),
    },
  ];
  const [events, setEvents] = useState(preEvents);
  const [formData, setFormData] = useState({
    title: "",
    start: "",
    end: "",
  });
  const onChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const onClick = (e) => {
    e.preventDefault();
    let { title, start, end } = formData;
    if (title && start && end) {
      let s = start.split("-");
      let e = end.split("-");
      start = new Date(+s[0], +s[1]-1, +s[2]);
      end = new Date(+e[0], +e[1]-1, +e[2]);

      let newObj = { title, start, end };
      events.push(newObj);
      setEvents(events);
      setFormData({title: "",
      start: "",
      end: "",})
    } else {
      window.alert("Please Enter All Inputs ");
    }
  };
  return (
    <CalenderContext.Provider value={{ events, onChange, onClick, formData }}>
      {children}
    </CalenderContext.Provider>
  );
};

export default CalenderContextProvider;
