import React, { useState } from 'react'
import { useDrop } from 'react-dnd';
import AssociateCard from './AssociateCard';

const DRIVERS =[
    {id:1, name: 'bob'},
    {id:2, name: 'bobb'},
    {id:3, name: 'ran'},
    {id:4, name: 'bob'},
]

export default function DropComponent (){
  const [{ canDrop, isOver }, drop] = useDrop({
    accept: 'associate',
    drop: (item, monitor) => {
      // Handle the drop operation
      // Update the placement of the driver container in the van log
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    }),
  });

  const isActive = canDrop && isOver;

  return (
    <div
      ref={drop}
      style={{
        backgroundColor: isActive ? 'lightgreen' : 'transparent',
        minHeight: '200px',
      }}
    >
      {/* Render the van log contents */}
    </div>
  );
};
