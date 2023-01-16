import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHeart} from "react-icons/ai"

import { Heading } from '../../components/global/Typography/index';
import { Button } from '../../components/global/Button';
import LinkCard, { DefPropsLinkCard } from '../../components/LinkCard';

const DefPropsLinkCardTwo = {
  title: 'Random Stuff ',
  description: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iusto.`,
  link: '/',
  icon: <AiFillHeart />,
};

const Home = () => {
  return (
    <div className='grid max-w-6xl justify-center mx-auto h-full gap-4 px-10 py-20'>
      <Heading>Voting Web App</Heading>
      <div className='max-w-4xl gap-6 grid grid-cols-3 justify-around items-stretch p-6 rounded-lg my-8 border bg-gray-100'>
        <LinkCard {...DefPropsLinkCard} />
        <LinkCard {...DefPropsLinkCard} />
        <LinkCard {...DefPropsLinkCardTwo} />
      </div>
    </div>
  );
};

export default Home;
