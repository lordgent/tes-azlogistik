import React from "react";
import styled from "./actionCard.module.css";

const ActionCard = ({ active,onDelete,onEdit }) => {
    
  return (
    active &&  (
      <div className={styled.actionContainer} >
        <p onClick={onEdit}>Edit</p>
        <p onClick={onDelete}>Delete</p>
      </div>
    )

  );
};

export default ActionCard;
