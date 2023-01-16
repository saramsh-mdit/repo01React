import React from 'react';
import { Heading } from '../../components/global/Typography/index';
import { Link } from 'react-router-dom';
import { Button } from '../../components/global/Button';
import LinkCard, { DefPropsLinkCard } from '../../components/LinkCard';
import VoteThumbnailCards, { DefaultPropsVoteInfoCard } from '../../components/VoteInfoCards';

const Vote = () => {
  return (
    <div className='grid max-w-6xl mx-auto h-full gap-4 px-10 py-20'>
      <Heading>Vote Others</Heading>

      <div className='flex gap-4 mt-8 mb-4 max-w-md mx-auto'>
        <input
          className='border text-xl w-full py-2 px-4 rounded border-gray-300 bg-gray-100'
          type='text'
          name='search'
          placeholder='Search Here'
          id=''
        />
        <Button className='bg-blue-700 rounded font-bold text-white'>
          Search
        </Button>
      </div>
      <div className='grid sm:grid-cols-3 lg:grid-cols-4 my-8 gap-4 gap-y-8 w-full'>
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
        <VoteThumbnailCards {...DefaultPropsVoteInfoCard} />
      </div>
    </div>
  );
};

export default Vote;
