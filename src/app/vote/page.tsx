"use client";

import React, { useEffect, useState } from "react";
import { useActiveAccount } from "thirdweb/react";
import ConnectWallet from "./_components/ConnectWallet";
import EventItem from "./_components/EventItem";
import { fetchEvents } from "./_components/fetchEvents";
import { handleVote } from "./_components/handleVote";
import { handleSubmit } from "./_components/handleSubmit";
import { VoteTypes } from "./_components/voteTypes";


const VotePage: React.FC = () => {
  const account = useActiveAccount();
  const [events, setEvents] = useState<any[]>([]);
  const [votes, setVotes] = useState<{ [key: string]: number }>({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [eventDetails, setEventDetails] = useState<{ [key: string]: EventDetail }>({});
  const [allVotesSubmitted, setAllVotesSubmitted] = useState(false);
  const [highlightedVote, setHighlightedVote] = useState<number | null>(null);

  type EventDetail = {
    title: string;
    category: string;
  };

  useEffect(() => {
    fetchEvents().then(events => {
      setEvents(events);
      const details = events.reduce<{ [key: string]: EventDetail }>((acc, event) => {
        const eventId = event.id || ''; // Ensure eventId is always a string
        acc[eventId] = {
          title: event.title || '', // Fallback to empty string if null or undefined
          category: event.category || '', // Fallback to empty string if null or undefined
        };
        return acc;
      }, {});
      setEventDetails(details);
    });
  }, []);

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl md:text-6xl font-semibold md:font-bold tracking-tighter mb-4 text-zinc-100 mt-4">
        Vote on Events
      </h1>
      <ConnectWallet />
      {account?.address ? (
        <div className="flex flex-col w-full items-center p-3">
          {events.length > 0 && !allVotesSubmitted ? (
            <EventItem
              event={events[currentIndex]}
              onVote={(vote) => handleVote(
                events[currentIndex].id,
                vote,
                votes,
                setVotes,
                setCurrentIndex,
                events,
                setAllVotesSubmitted,
                (newVotes) => handleSubmit(newVotes, eventDetails, account),
                allVotesSubmitted,
                setHighlightedVote
              )}
              highlightedVote={highlightedVote}
            />
          ) : (
            <h2 className="text-lg font-semibold mt-4 text-center">Thank you for voting!</h2>
          )}
        </div>
      ) : (
        <p className="text-center mt-4">Please connect your wallet to vote.</p>
      )}
    </div>
  );
};

export default VotePage;
