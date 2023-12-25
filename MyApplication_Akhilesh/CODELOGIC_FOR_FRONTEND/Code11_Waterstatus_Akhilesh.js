 
                                              
                                              // Water Status

import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";

// Actual Logic of Coding
const WaterTracker = () => 
{
  const [target, setTarget] = useState(0);
  const [reminder, setReminder] = useState(false);

  useEffect(() => 
  {
    let interval;
    if (target > 0)
    {

      interval = setInterval(() => 
      {
        setReminder(true);
      }, 1 * 60 * 1000);

    }

    return () => clearInterval(interval);
  }, [target]);


  const handleSetTarget = () => 
  {
    setTarget(8); 
    setReminder(false);
  };

  const handleDecreaseTarget = () => 
  {
    if (target > 0) 
    {
      setTarget(target - 1);
    }
  };

  return (
    <div className="container mt-3 mb-3">

      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Water Tracker</h2>
          {target === 0 ? (
            renderSetTarget()
          ) : (
            renderTargetDetails()
          )}
          {reminder && <p>Reminder: It's time to drink water!</p>}
        </div>

      </div>
    </div>
  );

  function renderSetTarget() 
  {

    return (
      <Button onClick={handleSetTarget}>Set Target</Button>
    );

  }

  function renderTargetDetails() 
  {
    return (
      <div>
        <h2>Target: {target} cups</h2>
        <Button onClick={handleDecreaseTarget}>Decrease Target</Button>
      </div>
    );
  }

};

export default WaterTracker;

