import { Dispatch, SetStateAction } from 'react';

type VoteTypes = {
  [key: number]: string;
};

const voteTypes: VoteTypes = {
  1: 'Heart',
  2: 'Thumbs Up',
  3: 'Shrug'
};

type EventDetail = {
  title: string | null;
  category: string;
};

export const handleVote = (
  eventId: string,
  vote: number,
  votes: { [key: string]: number },
  setVotes: Dispatch<SetStateAction<{ [key: string]: number }>>,
  setCurrentIndex: Dispatch<SetStateAction<number>>,
  events: any[],
  setAllVotesSubmitted: Dispatch<SetStateAction<boolean>>,
  handleSubmit: (finalVotes: { [key: string]: number }) => void,
  allVotesSubmitted: boolean,
  setHighlightedVote: Dispatch<SetStateAction<number | null>>
) => {
  setHighlightedVote(vote);
  setTimeout(() => {
    setVotes((prevVotes) => {
      const newVotes = { ...prevVotes, [eventId]: vote };
      console.log("Votes after updating:", newVotes);

      if (Object.keys(newVotes).length === events.length && !allVotesSubmitted) {
        setAllVotesSubmitted(true);
        Promise.resolve().then(() => handleSubmit(newVotes));
      }

      return newVotes;
    });

    setCurrentIndex(prevIndex => Math.min(prevIndex + 1, events.length - 1));
    setHighlightedVote(null); // Reset highlight after delay
  }, 1000); // 1 second delay
};
