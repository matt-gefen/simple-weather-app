import React, { useEffect } from "react";
import styles from './Weather.module.css'

const Weather = (props) => {

  function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, handleError);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }

  function handleError(error) {
    let errorStr;
    switch (error.code) {
      case error.PERMISSION_DENIED:
        errorStr = 'User denied the request for Geolocation.';
        break;
      case error.POSITION_UNAVAILABLE:
        errorStr = 'Location information is unavailable.';
        break;
      case error.TIMEOUT:
        errorStr = 'The request to get user location timed out.';
        break;
      case error.UNKNOWN_ERROR:
        errorStr = 'An unknown error occurred.';
        break;
      default:
        errorStr = 'An unknown error occurred.';
    }
    console.error('Error occurred: ' + errorStr);
  }
  
  function showPosition(position) {
    console.log(`Latitude: ${position.coords.latitude}, longitude: ${position.coords.longitude}`);
  }

  useEffect(() => {
    getLocation()
  })
  
  
  return (
    <div className={styles.weather}>
    </div>
  )
}

export default Weather