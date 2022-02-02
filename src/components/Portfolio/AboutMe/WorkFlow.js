import React from "react";
// animation
import Zoom from "react-reveal/Zoom";
import Fade from "react-reveal/Fade";
// UI
import idea from "../../../assets/workflowIcons/work-idea.svg";
import sketch from "../../../assets/workflowIcons/work-sketch.svg";
import plan from "../../../assets/workflowIcons/work-plan.svg";
import design from "../../../assets/workflowIcons/work-design.svg";
import implement from "../../../assets/workflowIcons/implement.svg";

function WorkFlow() {
  return (
    <div className="workflow container d-flex flex-column align-items-center">
      <Fade bottom>
        <div>
          <div className="workflow__header d-flex align-items-center justify-content-start">
            Work Flow
            <span className="ms-2"></span>
          </div>
          <h3 className="fw-bold mt-3">My Work Process</h3>
        </div>
      </Fade>

      <Zoom cascade>
        <div className="d-flex flex-wrap justify-content-center mt-5">
          <div className="workflow__item mb-3 m-2">
            <img src={idea} alt="Work idea" />
            <h5>Discover</h5>
            <span>
              I conduct user research to identify the problem I want to solve.
            </span>
          </div>
          <div className="workflow__item mb-3 m-2">
            <img src={plan} alt="Work idea" />
            <h5>Define</h5>
            <span>
              I brainstorm possible design solutions to the identified problem.
            </span>
          </div>
          <div className="workflow__item mb-3 m-2">
            <img src={sketch} alt="Work idea" />
            <h5>Ideate</h5>
            <span>
              I create wireframes and sketches of the product I’m about to
              design.
            </span>
          </div>
          <div className="workflow__item mb-3 m-2">
            <img src={design} alt="Work idea" />
            <h5>Prototype</h5>
            <span>
              I create high fidelity design and prototype the screens.
            </span>
          </div>
          <div className="workflow__item mb-3 m-2">
            <img src={implement} alt="Work idea" />
            <h5>Implement</h5>
            <span>After designing, I deliver for implementation.</span>
          </div>
        </div>
      </Zoom>
    </div>
  );
}

export default React.memo(WorkFlow);
