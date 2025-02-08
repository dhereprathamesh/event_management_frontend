import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Webcrumbs } from "../assets/styles/StyledEventDaashboard";
import { deleteEvent, fetchEvents } from "../services/eventApi";
import toast from "react-hot-toast";
import { Tooltip } from "@mui/material";
import Swal from "sweetalert2";

import io from "socket.io-client";

const socket = io("https://event-management-backend-xfcy.onrender.com");

const EventDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [userId, setUserId] = useState(null);
  const [joinedEvents, setJoinedEvents] = useState([]);
  const [attendeesCount, setAttendeesCount] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("token");

    const storedUserId = localStorage.getItem("createdBy");

    if (!token) {
      toast.error("Please login first!");
      navigate("/");
    } else {
      setUserId(storedUserId);
    }
  }, [navigate]);

  // Fetch events on mount
  useEffect(() => {
    const getEvents = async () => {
      try {
        const response = await fetchEvents(); // API call
        if (response.data.success) {
          setEvents(response.data.events); // Update state
        }
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    getEvents();
  }, []);

  const filterByTab = (event) => {
    if (activeTab === "All") return true;
    if (activeTab === "Upcoming events") return event.status === "Upcoming";
    if (activeTab === "Ended") return event.status === "Ended";
    if (activeTab === "Live") return event.status === "Live";
    return false;
  };

  const filterByCategory = (event) => {
    return selectedCategory === "" || event.category === selectedCategory;
  };

  const filterByDate = (event) => {
    if (!startDate && !endDate) return true;
    const eventDate = new Date(event.date.split("-").reverse().join("-"));
    if (startDate && eventDate < new Date(startDate)) return false;
    if (endDate && eventDate > new Date(endDate)) return false;
    return true;
  };

  const filteredEvents = events.filter(
    (event) =>
      filterByTab(event) && filterByCategory(event) && filterByDate(event)
  );

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };
  const handleDelete = async (eventId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await deleteEvent(eventId);
          if (response.data.success) {
            setEvents((prevEvents) =>
              prevEvents.filter((event) => event._id !== eventId)
            );
            Swal.fire("Deleted!", "Your event has been deleted.", "success");
          }
        } catch (error) {
          console.error("Error deleting event:", error);
          Swal.fire("Error!", "Failed to delete event.", "error");
        }
      }
    });
  };

  useEffect(() => {
    const updateAttendeesHandler = ({ eventId, count }) => {
      setAttendeesCount((prevCounts) => ({
        ...prevCounts,
        [eventId]: count,
      }));
    };

    socket.on("updateAttendees", updateAttendeesHandler);

    return () => {
      socket.off("updateAttendees", updateAttendeesHandler);
    };
  }, []);

  const handleJoin = (eventId) => {
    if (joinedEvents.includes(eventId)) return;

    socket.emit("joinEvent", eventId);

    setJoinedEvents([...joinedEvents, eventId]);
    setAttendeesCount((prevCounts) => ({
      ...prevCounts,
      [eventId]: (prevCounts[eventId] || 0) + 1,
    }));
  };

  const handleLeave = (eventId) => {
    socket.emit("leaveEvent", eventId);

    // Optimistically update UI
    setJoinedEvents(joinedEvents.filter((id) => id !== eventId));
    setAttendeesCount((prevCounts) => ({
      ...prevCounts,
      [eventId]: Math.max((prevCounts[eventId] || 0) - 1, 0),
    }));
  };

  return (
    <Webcrumbs>
      <header className="gradiant-box">
        <div className="flex-container">
          <div className="flex-group">
            <div>
              <h2 className="text-style">Event Dashboard</h2>
              <p className="text-gray">
                Track your events and attendees in real-time
              </p>
            </div>
            <div className="flex-gap">
              <details className="details-relative" open={!isOpen}>
                <summary
                  className="summary-style"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <span className="material-symbols-outlined">filter_list</span>
                  <span>Category</span>
                </summary>
                {isOpen && (
                  <div className="dropdown-menu">
                    {[
                      "Music",
                      "Technology",
                      "Education",
                      "Design",
                      "Business",
                      "Marketing",
                      "Development",
                    ].map((category) => (
                      <div
                        key={category}
                        className={`hover-box ${
                          selectedCategory === category ? "selected" : ""
                        }`}
                        onClick={() => {
                          setSelectedCategory(category);
                          setIsOpen(false);
                        }}
                      >
                        {category}
                      </div>
                    ))}
                  </div>
                )}
              </details>
              <details className="details-container">
                <summary className="summary-style">
                  <span className="material-symbols-outlined">
                    calendar_today
                  </span>
                  <span>Date Range</span>
                </summary>
                <div className="dropdown-menu">
                  <div className="dropdown-box">
                    <div>
                      <label className="label-style">Start Date</label>
                      <input
                        type="date"
                        className="input-style"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="label-style">End Date</label>
                      <input
                        type="date"
                        className="input-style"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
          <button
            className="btn-style"
            onClick={() => navigate("/create-event")}
          >
            <span className="material-symbols-outlined">add_circle</span>
            Create Event
          </button>
        </div>
      </header>

      <div className="tab">
        {["All", "Ended", "Live", "Upcoming events"].map((tab) => (
          <div
            key={tab}
            className={`tab-button ${activeTab === tab ? "active-tab" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <main className="main-container">
        <div className="grid-container">
          {filteredEvents.map((event) => (
            <div className="card" key={event._id}>
              {userId && userId === event.createdBy && (
                <div className="event-actions">
                  <Tooltip title="Edit Event">
                    <span
                      className="material-symbols-outlined edit-icon"
                      onClick={() => navigate(`/edit-event/${event._id}`)}
                    >
                      edit
                    </span>
                  </Tooltip>
                  <Tooltip title="Delete Event">
                    <span
                      className="material-symbols-outlined delete-icon"
                      onClick={() => handleDelete(event._id)}
                    >
                      delete
                    </span>
                  </Tooltip>
                </div>
              )}
              <div className="card-header">
                <span className="badge">{event.category}</span>
                <div className="icon-container">
                  {event.status === "Live" && (
                    <>
                      <span className="icon material-symbols-outlined">
                        wifi
                      </span>
                      <span className="text-label">Live</span>
                    </>
                  )}
                  {event.status === "Ended" && (
                    <>
                      <span className="icon material-symbols-outlined ended-icon">
                        event_busy
                      </span>
                      <span className="text-label">Ended</span>
                    </>
                  )}
                  {event.status === "Upcoming" && (
                    <>
                      <span className="icon material-symbols-outlined upcoming-icon">
                        event
                      </span>
                      <span className="text-label">Upcoming</span>
                    </>
                  )}
                </div>
              </div>

              <h3 className="heading">{event.title}</h3>

              <div className="icon-wrapper">
                <span className="rotating-icon">schedule</span>
                <span>
                  {formatDate(event.date)} - {event.time}
                </span>
              </div>

              <div className="container">
                <div className="flex-group2">
                  {event.status !== "Ended" &&
                    (joinedEvents.includes(event._id) ? (
                      <>
                        <button className="join-button">Joined</button>
                        <button
                          className="exit-button"
                          onClick={() => handleLeave(event._id)}
                        >
                          Leave
                        </button>
                      </>
                    ) : event.status === "Upcoming" ? (
                      <button
                        className="join-button"
                        onClick={() =>
                          toast.success("We will share further details soon!")
                        }
                      >
                        Notify Me
                      </button>
                    ) : (
                      <button
                        className="join-button"
                        onClick={() => handleJoin(event._id)}
                      >
                        Join
                      </button>
                    ))}
                  {/* 
                  {event.status === "Live" ? (
                    joinedEvents.includes(event._id) ? (
                      <button
                        className="exit-button"
                        onClick={() => handleLeave(event._id)}
                      >
                        Leave
                      </button>
                    ) : (
                      <button
                        className="join-button"
                        onClick={() => handleJoin(event._id)}
                      >
                        Join
                      </button>
                    )
                  ) : event.status === "Upcoming" ? (
                    <button
                      className="join-button"
                      onClick={() =>
                        toast.success("We will share further details soon!")
                      }
                    >
                      Notify Me
                    </button>
                  ) : null} */}
                </div>
                <div className="flex-group1">
                  <span className="icon-effect">group</span>
                  <span className="bold-text">
                    {attendeesCount[event._id] || 0} Attending
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </Webcrumbs>
  );
};

export default EventDashboard;
