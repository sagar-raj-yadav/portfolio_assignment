import React from "react";

const SkillDynamic = ({ domain, skills }) => {
  return (
    <div className="container">
      <div className="domain">
        {domain}
        <br />
      </div>
      {skills.map((skill, index) => (
        <div key={index} className="skill-container">
          <div className={`skill-info ${!skill.skill ? 'hide' : ''}`}>
            <div className="skill-name">{skill.skill}</div>
            <div className="skill-proficiency">{skill.proficiency}%</div>
          </div>
          {skill.skill && (
            <div className="proficiency-bar">
              <div
                className="proficiency-fill"
                style={{ width: `${skill.proficiency}%` }}
              />
            </div>
          )}
        </div>
      ))}
      <style jsx>{`
        .container {
          background-color: rgba(255, 255, 255, 1);
          display: flex;
          margin-right: 100px;
          width: 385px;
          flex-direction: column;
          padding: 38px 39px;
          margin:10px;
        }
        .domain {
          color: var(--Black, #2b2b2b);
          text-transform: capitalize;
          font: 500 18px/22px Inter, -apple-system, Roboto, Helvetica, sans-serif;
        }
        .skill-container {
          display: flex;
          flex-direction: column;
          margin-top: 16px;
        }
        .skill-info {
          display: flex;
          gap: 20px;
          font-size: 15px;
          color: var(--Paragraph-Font, #767676);
          font-weight: 400;
          white-space: nowrap;
          text-transform: capitalize;
          line-height: 160%;
          justify-content: space-between;
        }
        .hide {
          display: none;
        }
        .skill-name,
        .skill-proficiency {
          font-kerning: none;
          font-feature-settings: "calt" off;
          font-family: Inter, sans-serif;
        }
        .proficiency-bar {
          border-radius: 30px;
          display: flex;
          margin-top: 11px;
          flex-direction: column;
          justify-content: center;
          padding: 2px;
          border: 1px solid rgba(255, 180, 0, 1);
        }
        .proficiency-fill {
          border-radius: 30px;
          background-color: var(--Yellow, #ffb400);
          height: 2px;
        }
      `}</style>
    </div>
  );
};

export default SkillDynamic;
