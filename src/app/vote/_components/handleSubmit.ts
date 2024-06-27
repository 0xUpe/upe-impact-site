import { format } from 'date-fns';
import { VoteTypes } from './voteTypes';
import { useActiveAccount } from 'thirdweb/react';

export const handleSubmit = async (
  finalVotes: { [key: string]: number },
  eventDetails: { [key: string]: { title: string | null; category: string } },
  account: ReturnType<typeof useActiveAccount>
) => {
  const submissionDate = format(new Date(), 'yyyy-MM-dd HH:mm:ss');
  const userVotes = Object.entries(finalVotes).map(([eventId, vote]) => ({
    eventId,
    voteType: VoteTypes[vote],
    title: eventDetails[eventId]?.title,
    category: eventDetails[eventId]?.category,
    submissionDate,
    user: account?.address
  }));

  console.log("User Votes:", userVotes);
  console.log("Final submission date:", submissionDate);

  // Implement EAS Attestation logic here
};
