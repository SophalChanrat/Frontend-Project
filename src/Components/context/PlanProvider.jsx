import React, { createContext, useState, useContext } from 'react';

const PlanContext = createContext();

export const PlanProvider = ({ children }) => {
  const [plan, setPlan] = useState("Free"); // default is Free

  return (
    <PlanContext.Provider value={{ plan, setPlan }}>
      {children}
    </PlanContext.Provider>
  );
};

export const usePlan = () => useContext(PlanContext);
