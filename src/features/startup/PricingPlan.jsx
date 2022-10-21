import React from "react";
import styles from "./code.module.css";

const PricingPlan = () => {
  return (
    <div>
      <div className={styles.pricing_plan_container}>
        <h2 className={`${styles.code_section_header_away}`}>
          Simple and fair pricing
        </h2>
        
        <div className="d-flex justify-content-between align-items-center">
          {/* FREE */}
          <div className={styles.pricing_plan_content}>
            <h1>Free Plan</h1>
            <div className={styles.pricing_circle_border}>
              <div className={styles.pricing_circle}>
                <span>
                  <sup>$</sup>00.00 <br /> <p>MONTH</p>
                </span>
              </div>
            </div>
            <button>Free</button>
          </div>
          
          {/* STARTER */}
          <div className={styles.pricing_plan_content}>
            <h1>Starter Plan</h1>
            <div className={styles.pricing_circle_border}>
              <div className={styles.pricing_circle}>
                <span>
                  <sup>$</sup>19.99 <br /> <p>MONTH</p>
                </span>
              </div>
            </div>
            <button>Starter</button>
          </div>
          {/* BUSINESS */}
          
          <div className={styles.pricing_plan_content}>
            <h1>Business Plan</h1>
            <div className={styles.pricing_circle_border}>
              <div className={styles.pricing_circle}>
                <span>
                  <sup>$</sup>29.99 <br /> <p>MONTH</p>
                </span>
              </div>
            </div>
            <button>Business</button>
          </div>
          {/* PREMIUM */}
          <div className={styles.pricing_plan_content}>
            <h1>Premium Plan</h1>
            <div className={styles.pricing_circle_border}>
              <div className={styles.pricing_circle}>
                <span>
                  <sup>$</sup>39.99 <br />
                  <p>MONTH</p>
                </span>
              </div>
            </div>
            <button>Premium</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPlan;
