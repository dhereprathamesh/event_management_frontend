import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { createEvent } from "../services/eventApi";
import { useNavigate } from "react-router-dom";
import { Main } from "../assets/styles/StyledCreateEvent";

const CreateEvent = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (formData) => {
    setLoading(true);
    const createByID = localStorage.getItem("createdBy");
    const data = {
      title: formData.eventName,
      description: formData.description,
      date: formData.date,
      time: formData.startTime,
      category: formData.category,
      duration: formData.duration,
      createdBy: createByID,
    };

    try {
      const response = await createEvent(data);

      Swal.fire({
        icon: "success",
        title: "Event Created!",
        text: "Your event has been successfully created.",
        confirmButtonColor: "#4CAF50",
      }).then((result) => {
        if (result.isConfirmed || result.isDismissed) {
          navigate("/event-dashboard");
        }
      });
    } catch (error) {
      console.error("Error creating event:", error);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text:
          error.response?.data?.message ||
          "Failed to create event. Please try again.",
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
          <div className="content-row">
            <h2 className="gradient-heading">Create New Event</h2>
          </div>

          <div className="grid-layout">
            <div className="spaced-content">
              <div className="input-box">
                <label className="label-text">Event Name</label>
                <input
                  type="text"
                  className="input-field"
                  placeholder="Enter event name..."
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
                  placeholder="Describe your event..."
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
            <button className="button-secondary">Cancel</button>
            <button className="btn-primary">
              <span className="material-symbols-outlined">rocket_launch</span>
              Publish Event
            </button>
          </div>
        </div>
      </form>
    </Main>
  );
};

export default CreateEvent;
