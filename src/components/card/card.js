import React from "react";
import styled from "./card.module.css";
import ActionCard from "./components/actionCard";

const Card = ({ name, stock, pricing,onAction,active,selected,id,handleDelete,handleEdit }) => {
  return (
    <div className={styled.container}>
        
        {selected === id && ( <ActionCard active={active} onDelete={handleDelete} onEdit={handleEdit} />)}

      <div className={styled.wrapperAction}>
        <p>{""}</p>
        <p className={styled.actionIcon} onClick={onAction}>{"..."}</p>
      </div>
      <div className={styled.img}></div>
      <div className={styled.body}>
        <p>{name}</p>
        <p>{pricing}</p>
        <p>QTY: {stock}</p>
      </div>
    </div>
  );
};

export default Card;
