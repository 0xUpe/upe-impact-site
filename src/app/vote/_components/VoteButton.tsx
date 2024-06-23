import React from 'react';

interface VoteButtonProps {
  onClick: () => void;
  icon: JSX.Element;
  isHighlighted: boolean;
}

const VoteButton: React.FC<VoteButtonProps> = ({ onClick, icon, isHighlighted }) => {
  return (
    <button
      onClick={onClick}
      className={`btn-vote ${isHighlighted ? 'bg-upe-light-pink' : ''} p-2 rounded-full transition-colors duration-300 ease-in-out`}
    >
      {icon}
    </button>
  );
};

export default VoteButton;
