import React, { useState } from "react";
import "../Components/plan/plan.css";
import { Nav_setting } from "../Components/navigation-bar/Nav_setting";
import { Footer } from "../Components/footer/Footer";
import { Plan_card } from "../Components/plan/Plan_card";
import { FaGift, FaGem } from 'react-icons/fa';
import { usePlan } from "../Components/context/PlanProvider";


export const Plan = () => {
    // const [selected, setSelected] = useState("free");
    const { plan, setPlan } = usePlan("Free");
  return (
    <>
      <Nav_setting />
      <div className="change-plan-container">
        <h2>Change your plan</h2>
        <div className="plan-options">
          <Plan_card
            title="Free Plan"
            duration="Forever"
            icon={<FaGift size={80} color="#aaa" />}
            features={[
              "All movie available",
              "Quality max 720p",
              "Not Ads free",
            ]}
            selected={plan === "Free"}
            onClick={() => setPlan("Free")}
            price={"$0"}
          />

          <Plan_card
            title="Premium plan"
            duration="1 month"
            icon={<FaGem size={80} color="#aaa" />}
            features={["All movie available", "Quality max 1080p", "Ads free"]}
            selected={plan === "Premium-M"}
            onClick={() => setPlan("Premium-M")}
            price={"$9.99"}
          />

          <Plan_card
            title="Premium plan"
            duration="1 year"
            icon={<FaGem size={80} color="#aaa" />}
            features={["All movie available", "Quality max 1080p", "Ads free"]}
            selected={plan === "Premium-Y"}
            onClick={() => setPlan("Premium-Y")}
            price={"$39.99"}
          />
        </div>
      </div>
      <Footer />
    </>
  );
};
