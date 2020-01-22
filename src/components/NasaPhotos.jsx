import React, { useState, useEffect } from "react";
import axios from "axios";
import NasaCard from "./NasaCard";

function NasaPhotos() {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=p0sroxHu6zuv6T7HoksMfjCXaoOfNxl4zcxxCs5O&start_date=2020-01-09&end_date=2020-01-22`
      )
      .then(response => {
        console.log(response.data);
        setPhotos(response.data);
      })
      .catch(error => {
        console.log("the data was not return", error);
      });
  }, []);
  return (
    <div className="photos">
      {photos.map(photo => {
        return (
          <NasaCard
            key={photo.date}
            date={photo.date}
            description={photo.explanation}
            img={photo.url}
          />
        );
      })}
    </div>
  );
}

export default NasaPhotos;
