import React, { useState } from "react";
import EventItem from "./EventItem";
import VoteSummary from "./VoteSummary";

interface EventListProps {
  events: any[];
  votes: { [key: string]: number };
  onVote: (eventId: string, vote: number) => void;
  allVotesSubmitted: boolean;
}

const EventList: React.FC<EventListProps> = ({ events, votes, onVote, allVotesSubmitted }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleVote = (eventId: string, vote: number) => {
    onVote(eventId, vote);
    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, events.length - 1));
  };

  return (
    <div className="flex flex-col w-full items-center p-3">
      {events.length > 0 && !allVotesSubmitted ? (
        <EventItem
          event={events[currentIndex]}
          onVote={(vote) => handleVote(events[currentIndex].id, vote)}
          highlightedVote={votes[events[currentIndex].id]}
        />
      ) : (
        <VoteSummary />
      )}
    </div>
  );
};

export default EventList;
