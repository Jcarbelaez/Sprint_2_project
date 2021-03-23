import React from "react";
import "./Cards.css";
import Swal from "sweetalert2";

function Cards(hotelsData) {
  const swalAlert = () => {
    Swal.fire({
      title: "Are you sure about this reservation?",
      icon: "warning",
      buttons: true,
      showCancelButton: true,
      dangerMode: true
    }).then((value) => {
      if (value.isConfirmed) {
        Swal.fire("the hotel has been booked successfully, pack your bags.", {
          icon: "success"
        });
      } else {
        Swal.fire("Ok, let´s search another one");
      }
    });
  };

  return (
    <div className="card-container">
      <div className="card-content">
        <img src={hotelsData.photo} alt={hotelsData.name} />
        <h3 className="card-title">{hotelsData.name}</h3>
        <p className="card-description">{hotelsData.description}</p>
        <div className="div-line"></div>
        <div className="card-extrainfo">
          <div className="location-info">
            {hotelsData.city}, {hotelsData.country}
          </div>
          <div className="rooms-info">{hotelsData.rooms} rooms </div>
          <div className="price-info">{hotelsData.price} </div>
          <span className="card-button-container">
            <input
              id="card-button"
              type="button"
              onClick={swalAlert}
              value="Book now"
            />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Cards;
