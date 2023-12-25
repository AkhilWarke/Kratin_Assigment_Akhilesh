
                                    
                                         // Main Window / Home

import React from "react";
import WaterCounter from "./WaterCounter";
import PillReminder from "./PillReminder";
import EventReminders from "./EventReminder";
import MedicalReport from "./MedicalReport";


// Actual Logic of Coding
const Home = () => 
{

  const componentsToRender = 
  [
    <WaterCounter key="WaterCounter" />,
    <PillReminder key="PillReminder" />,
    <EventReminders key="EventReminders" />,
    <MedicalReport key="MedicalReport" />,
  ];

  return <>{componentsToRender}</>;


};

export default Home;
