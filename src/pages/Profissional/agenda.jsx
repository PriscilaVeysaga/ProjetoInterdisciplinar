import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const Agendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [professional, setProfessional] = useState("");

  const handleDateClick = (info) => {
    setSelectedDate(info.dateStr);
  };

  const event = () => {
    alert("ola");
  };
  const handleEventAdd = (e) => {
    e.preventDefault();
    if (selectedDate && selectedTime && name && professional) {
      const newEvent = {
        title: `${name} - ${professional}`,
        start: `${selectedDate}T${selectedTime}`,
      };
      setEvents([...events, newEvent]);
      setSelectedDate(null);
      setSelectedTime("");
      setName("");
      setProfessional("");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleEventAdd}>
          <input
            type="date"
            value={selectedDate || ""}
            onChange={(e) => setSelectedDate(e.target.value)}
            required
          />
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Profissional"
            value={professional}
            onChange={(e) => setProfessional(e.target.value)}
            required
          />
          <button type="submit">Adicionar Evento</button>
        </form>
      </div>
      <div>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={events}
          dateClick={handleDateClick}
        />
      </div>
      <div>
        <h2>Lista de Eventos</h2>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              {event.title} - {event.start}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Agendar;
