import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Main } from "../assets/styles/StyledCreateEvent";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { getEventById, updateEvent } from "../services/eventApi";

const UpdateEvent = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
    reset,
  } = useForm();

  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await getEventById(eventId);
        const eventData = response.data.event;
        setValue("eventName", eventData.title);
        setValue("description", eventData.description);
        setValue("date", eventData.date);
        setValue("startTime", eventData.time);
        setValue("category", eventData.category);
        setValue("duration", eventData.duration);
      } catch (error) {
        console.error("Error fetching event:", error);
      }
    };

    fetchEvent();
  }, [eventId, setValue]);

  // Handle form submission (Update Event)
  const onSubmit = async (formData) => {
    setLoading(true);

    const updatedEvent = {
      title: formData.eventName,
      description: formData.description,
      date: formData.date,
      time: formData.startTime,
      category: formData.category,
      duration: formData.duration,
    };

    try {
      // Call update event API
      await updateEvent(eventId, updatedEvent);

      Swal.fire({
        icon: "success",
        title: "Event Updated!",
        text: "Your event has been successfully updated.",
        confirmButtonColor: "#4CAF50",
      }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          navigate("/event-dashboard");
        }
      });
    } catch (error) {
      console.error("Error updating event:", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to update event. Please try again.",
        confirmButtonColor: "#d33",
      });
    } finally {
      setLoading(false);
    }
  };
  const categories = [
    "Music",
    "Technology",
    "Education",
    "Design",
    "Business",
    "Marketing",
    "Development",
  ];

  return (
    <Main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="card-container">
          <h2 className="gradient-heading">Update Event</h2>

          <div className="grid-layout">
            <div className="spaced-content">
              <div className="input-box">
                <label className="label-text">Event Name</label>
                <input
                  type="text"
                  className="input-field"
                  {...register("eventName", {
                    required: "Event Name is required",
                  })}
                />
                {errors.eventName && (
                  <p className="error-text">{errors.eventName.message}</p>
                )}
              </div>

              <div className="input-box">
                <label className="label-text">Description</label>
                <textarea
                  className="textarea-field"
                  {...register("description", {
                    required: "Description is required",
                  })}
                ></textarea>
                {errors.description && (
                  <p className="error-text">{errors.description.message}</p>
                )}
              </div>

              <div className="input-box">
                <label className="label-text">Date</label>
                <input
                  type="date"
                  className="input-field"
                  {...register("date", { required: "Date is required" })}
                />
                {errors.date && (
                  <p className="error-text">{errors.date.message}</p>
                )}
              </div>

              <div className="time-box">
                <div className="time-input-box">
                  <label className="label-text">Start Time</label>
                  <input
                    type="time"
                    className="input-field"
                    {...register("startTime", {
                      required: "Start Time is required",
                    })}
                  />
                  {errors.startTime && (
                    <p className="error-text">{errors.startTime.message}</p>
                  )}
                </div>

                <div className="time-input-box">
                  <label className="label-text">Duration</label>
                  <input
                    type="time"
                    className="input-field"
                    {...register("duration", {
                      required: "Duration is required",
                    })}
                  />
                  {errors.duration && (
                    <p className="error-text">{errors.duration.message}</p>
                  )}
                </div>
              </div>

              <div className="input-box">
                <label className="label-text">Category</label>
                <Controller
                  name="category"
                  control={control}
                  defaultValue=""
                  rules={{ required: "Category is required" }}
                  render={({ field }) => (
                    <select className="select-field" {...field}>
                      <option value="">Select a category</option>
                      {categories.map((cat, index) => (
                        <option key={index} value={cat}>
                          {cat}
                        </option>
                      ))}
                    </select>
                  )}
                />
                {errors.category && (
                  <p className="error-text">{errors.category.message}</p>
                )}
              </div>
            </div>
          </div>

          <div className="button-group">
            <button
              className="button-secondary"
              type="button"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button className="btn-primary" type="submit" disabled={loading}>
              {loading ? "Updating..." : "Update Event"}
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default UpdateEvent;
