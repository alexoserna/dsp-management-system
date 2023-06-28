import { useDrag } from 'react-dnd';

const AssociateCard = ({ id, name }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'associate',
    item: { id, name },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
    >
      {/* Render driver container contents */}
      <div>
        <h1>{name}</h1>
        {isDragging && 'Wowww'}
      </div>
    </div>
  );
};

export default AssociateCard;