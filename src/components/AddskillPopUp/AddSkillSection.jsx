import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./AddSkillPopUp.module.css";
import AddSkillDialog from "./AddSkillPopUp";
import SkillDynamic from "./SkillDynamic";

const InfoDetails = ({ className = "" }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [skillSets, setSkillSets] = useState([]);

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handleSave = ({ domain, skills }) => {
    setSkillSets([...skillSets, { domain, skills }]);
  };

  return (
    <>
  <div style={{marginRight:"110px"}}>
      <div className={[styles.infoDetails, className].join(" ")}>
        
        <AddSkillDialog
          open={dialogOpen}
          onClose={handleDialogClose}
          onSave={handleSave}
        />

      <div className={styles.abcd}>    
      {skillSets.map((skillSet, index) => (
      <SkillDynamic key={index} domain={skillSet.domain} skills={skillSet.skills} />
      ))}
        </div>

        </div>
  </div>  

        <div>
        <button className="div" onClick={handleDialogOpen}>Add skill</button>
        </div>
       
      <style jsx>{`
        .div {
          border-radius: 5px;
          background-color: #ffb400;
          color: #000;
          text-transform: uppercase;
          padding: 17px 16px ;
          font: 600 14px Inter, sans-serif;
          border: none;
          cursor:pointer;
          width:151px;
          height: 51px;
          margin:12px 580px 60px 0;
          cursor: pointer;
                 }
      `}</style>



    </>
  );
};

InfoDetails.propTypes = {
  className: PropTypes.string,
};

export default InfoDetails;
