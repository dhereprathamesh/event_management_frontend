import api from "./api";

// Fetch all events
export const fetchEvents = async () => {
  return api.get("events/");
};

export const createEvent = async (eventData) => {
  const token = localStorage.getItem("token");

  return api.post("events/add-event", eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Get a single event by ID with Authorization Header
export const getEventById = async (eventId) => {
  const token = localStorage.getItem("token");

  return api.get(`/events/getEventById/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

export const updateEvent = async (eventId, eventData) => {
  const token = localStorage.getItem("token");

  return api.put(`/events/update-event/${eventId}`, eventData, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};

// Delete an event with Authorization Header
export const deleteEvent = async (eventId) => {
  const token = localStorage.getItem("token");

  return api.delete(`/events/delete-event/${eventId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });
};
