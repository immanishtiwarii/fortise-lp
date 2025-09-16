import React from "react";

const SectionTwo = () => {
  return (
    <>
      <div className="section-full-width">
        <div
          className="Container_container__gCi3f"
          style={{
            background:
              "linear-gradient(180deg, #E2FFEF 0%, rgba(244, 247, 255, 0.4) 100%)",
          }}
        >
          <section className="TreatmentProcess_container__xpH0E">
            <div className="TreatmentProcess_content__rS4Mn">
              <div className="TreatmentProcess_processContainer__upQnG">
                <h2 className="TreatmentProcess_processTitle__grjCr">
                  The Simplest Process for Finding Health treatment at
                  <span className="TreatmentProcess_processSubtitle__1O8ob">
                    Zero Cost, Zero Worries &amp; complete peace of mind
                  </span>
                </h2>

                {/* Desktop Steps */}
                <div className="TreatmentProcess_stepsContainer__kO4Yf">
                  {[
                    { number: "1", title: "Explore & Match", color: "#3b5aab" },
                    {
                      number: "2",
                      title: "Doctor Opinion & Diagnosis",
                      color: "#0e8bab",
                    },
                    { number: "3", title: "Cost Estimate", color: "#22c2c5" },
                    { number: "4", title: "Medical Visa", color: "#22a0c5" },
                    {
                      number: "5",
                      title: "On Filed Assistance",
                      color: "#0a9e73",
                    },
                    { number: "6", title: "Treat & Get Fit", color: "#0a7e53" },
                  ].map((step, index) => (
                    <div key={index} className="TreatmentProcess_step__qzxRm">
                      <div
                        className="TreatmentProcess_stepNumber__hDWPc"
                        style={{ backgroundColor: step.color }}
                      >
                        {step.number}
                      </div>
                      <div className="TreatmentProcess_stepTitle__UsLnT">
                        {step.title}
                      </div>
                      <div
                        className="TreatmentProcess_stepLine__qUtMl"
                        style={{ backgroundColor: step.color }}
                      ></div>
                    </div>
                  ))}
                </div>

                <p className="TreatmentProcess_disclaimer__etszL">
                  *We do not collect any charges
                </p>
              </div>
            </div>

            {/* Mobile Steps */}
            <div className="TreatmentProcess_mobileContent__nTrK5">
              <h2 className="TreatmentProcess_mobileProcessTitle__uHXuD">
                The Simplest Process for Finding Health treatment at
                <span className="TreatmentProcess_mobileProcessSubtitle__iDjmA">
                  Zero Cost, Zero Worries &amp; complete peace of mind
                </span>
              </h2>

              <div className="TreatmentProcess_mobileSteps__anu3e">
                {[
                  { number: "1", title: "Explore & Match", color: "#3b5aab" },
                  {
                    number: "2",
                    title: "Doctor Opinion & Diagnosis",
                    color: "#0e8bab",
                  },
                  { number: "3", title: "Cost Estimate", color: "#22c2c5" },
                  { number: "4", title: "Medical Visa", color: "#22a0c5" },
                  {
                    number: "5",
                    title: "On Filed Assistance",
                    color: "#0a9e73",
                  },
                  { number: "6", title: "Treat & Get Fit", color: "#0a7e53" },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="TreatmentProcess_mobileStep__5g5BH"
                    style={{ color: step.color }}
                  >
                    <div
                      className="TreatmentProcess_mobileStepNumber__f_Ej2"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>
                    <div className="TreatmentProcess_mobileStepTitle__NwuC6">
                      {step.title}
                    </div>
                  </div>
                ))}
              </div>

              <p className="TreatmentProcess_mobileDisclaimer__Dwv2D">
                *We do not collect any charges
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default SectionTwo;
