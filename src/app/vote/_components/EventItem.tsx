import React from 'react';
import Image from 'next/image';
import VoteButton from './VoteButton';
import { heartSVG, thumbSVG, shrugSVG } from './svg';

interface EventItemProps {
  event: any;
  onVote: (vote: number) => void;
  highlightedVote: number | null;
}

const EventItem: React.FC<EventItemProps> = ({ event, onVote, highlightedVote }) => {
  return (
    <div className="flex flex-col items-center border border-upe-silver p-2 rounded-lg w-full max-w-md">
      <div className="flex w-full">
        <img
          src={event.image}
          alt={event.title}
          className="w-3/4 h-auto rounded-lg object-scale-down max-h-80"
        />
        <div className="flex flex-col items-center justify-around w-1/4 ml-2">
          <VoteButton onClick={() => onVote(1)} icon={heartSVG} isHighlighted={highlightedVote === 1} />
          <VoteButton onClick={() => onVote(2)} icon={thumbSVG} isHighlighted={highlightedVote === 2} />
          <VoteButton onClick={() => onVote(3)} icon={shrugSVG} isHighlighted={highlightedVote === 3} />
        </div>
      </div>
      <div className="mt-2 w-full">
        <h2 className="text-xl font-bold mt-2">
          <a href={event.link} target="_blank" rel="noopener noreferrer" 
            className="text-upe-pink hover:underline">
            {event.title}
          </a>
        </h2>
        <p className="text-sm text-upe-pale-grey mt-1">{event.date}</p>
        <p className="text-sm text-upe-pale-grey mt-1">{event.venue}</p>
        <p className="text-sm text-upe-pale-grey mt-1">{event.category}</p>
      </div>
    </div>
  );
};

export default EventItem;
