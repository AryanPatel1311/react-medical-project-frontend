import React, { useState } from "react";
import { BASE_URL, token } from "../../config";
import convertTime from "../../utils/convertTime";
import { toast } from "react-toastify";
import { HashLoader } from "react-spinners";

const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleCheckboxChange = (index) => {
    const selectedSlot = timeSlots[index];
    const formattedSlot = `${
      selectedSlot.day.charAt(0).toUpperCase() + selectedSlot.day.slice(1)
    }(${convertTime(selectedSlot.startingTime)} to ${convertTime(
      selectedSlot.endingTime
    )})`;
    setSelectedTimeSlot(formattedSlot);
  };

  const bookingHandler = async () => {
    if (selectedTimeSlot === null) {
      toast.error("Please select a time slot before booking.");
      return;
    }

    console.log("Selected Time Slot:", selectedTimeSlot);

    try {
      const res = await fetch(
        `${BASE_URL}/bookings/checkout-session/${doctorId}`,
        {
          method: "post",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            timeSlot: selectedTimeSlot,
          }),
        }
      );

      if (!res.ok) {
        const errorMessage = await res.text();
        console.error(`Error: ${res.status} - ${errorMessage}`);
        throw new Error(`Failed to fetch data: ${res.status}`);
      }

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message + "please try again");
      }

      if (data.session.url) {
        window.location.href = data.session.url;
      }
    } catch (err) {
      toast.error(err.message);
      console.log(err, "err");
    }
  };

  return (
    <div className="shadow-panelShadow p-3 lg:p-5 rounded-md">
      <div className="flex items-center justify-between">
        <p className="text_para mt-4 font-semibold">Ticket Price</p>
        <span className="text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold">
          {ticketPrice} ₹
        </span>
      </div>
      <div className="mt-[30px]">
        <p className="text_para mt-0 font-semibold text-headingColor">
          Available Time Slots:
        </p>
        <ul className="mt-3">
          {timeSlots?.map((item, index) => (
            <li key={index} className="flex items-center justify-between mb-2">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={
                    selectedTimeSlot ===
                    `${
                      item.day.charAt(0).toUpperCase() + item.day.slice(1)
                    }(${convertTime(item.startingTime)} to ${convertTime(
                      item.endingTime
                    )})`
                  }
                  onChange={() => handleCheckboxChange(index)}
                  className="mr-2"
                />
                <p className="text-[15px] leading-6 text-textColor font-semibold">
                  {`${
                    item.day.charAt(0).toUpperCase() + item.day.slice(1)
                  } (${convertTime(item.startingTime)} to ${convertTime(
                    item.endingTime
                  )})`}
                </p>
              </label>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={bookingHandler} className="btn px-2 w-full rounded-md">
        Book Appointment
      </button>
    </div>
  );
};

export default SidePanel;
