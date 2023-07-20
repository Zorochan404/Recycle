import React, { useEffect, useState } from 'react';

const Vehicle = () => {
  const [speed, setSpeed] = useState(null);
  const [position, setPosition] = useState(null);
  const [accuracy, setAccuracy] = useState(null);
  const [speedWithinRadius, setSpeedWithinRadius] = useState(null);
  const fixedCoordinate = { latitude: 26.34991, longitude: 92.690068}; // Replace with your fixed coordinate

  useEffect(() => {
    let previousPosition;
    let previousTimestamp;

    const calculateSpeed = (currentPosition, currentTimestamp) => {
      if (previousPosition && previousTimestamp) {
        const distance = getDistance(previousPosition, currentPosition);
        const timeElapsed = currentTimestamp - previousTimestamp;
        const speed = distance / timeElapsed;
        previousPosition = currentPosition;
        previousTimestamp = currentTimestamp;
        
        return speed;
      }
      previousPosition = currentPosition;
      previousTimestamp = currentTimestamp;

      return null;
    };

    const speedinhr = (speed, timeUnit) => {
      if(timeUnit === 'millisecond'){
        const speedperhr = speed*3600000
        return speedperhr;
      }else if (timeUnit=== 'second'){
        const speedperhr = speed*3600;
        return speedperhr;
      }else{
        return  null;
      }
    }

    const getDistance = (positionA, positionB) => {
      const earthRadius = 6371; 




      const lat1 = positionA.latitude * Math.PI / 180;
      const lon1 = positionA.longitude * Math.PI / 180;
      const lat2 = positionB.latitude * Math.PI / 180;
      const lon2 = positionB.longitude * Math.PI / 180;




      const latDiff = lat2 - lat1;
      const lonDiff = lon2 - lon1;
      const a =
      Math.pow(Math.sin(latDiff / 2), 2)
      + Math.cos(lat1) * Math.cos(lat2)
      * Math.pow(Math.sin(lonDiff / 2),2);




      const c = 2 * Math.asin(Math.sqrt(a));
      const distance = earthRadius * c;
      return distance;

      


    };

    const watchLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.watchPosition(
          function (position) {
            const currentPosition = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
            };
            console.log("Latitude is:", position.coords.latitude);
            console.log("Longitude is:", position.coords.longitude);
            console.log("Accuracy is:", position.coords.accuracy);
            const currentTimestamp = position.timestamp;

            const calculatedSpeed = calculateSpeed(currentPosition, currentTimestamp);
            setSpeed(speedinhr(calculatedSpeed, 'millisecond')); // Update the speed state

            // Update the previous position and timestamp for the next calculation.
            previousPosition = currentPosition;
            previousTimestamp = currentTimestamp;

            // Update the position and accuracy states
            setPosition(currentPosition);
            setAccuracy(position.coords.accuracy);

            // Check if within 500m radius of fixed coordinate
            const distanceToFixedCoord = getDistance(currentPosition, fixedCoordinate);
            if (distanceToFixedCoord <= 0.5) {
              setSpeedWithinRadius(speedinhr(calculatedSpeed, 'millisecond'));
            } else {
              setSpeedWithinRadius("0");
            }
          },
          function (error) {
            console.error("Error getting location:", error);
          },
          { enableHighAccuracy: true } // Enable high accuracy option
        );
      }
    };

    watchLocation();
  }, []);




  

  return (
    <div>
      <div>
      <h4>Speed of the user in campus</h4>
      {speed !== null && (
        <div>
      
            <p>Speed: {speedWithinRadius} Km per hour</p>
          
        </div>
      )}
    </div>
    </div>
  );
};

export default Vehicle;