import React from 'react';
import { Heading } from '../../components/global/Typography/index';
import { Link } from 'react-router-dom';
import { Button } from '../../components/global/Button';

const About = () => {
  return (
    <div className='grid max-w-xl mx-auto h-full gap-4 px-10 py-20'>
      <Heading className='text-center'>React Boilerplate.</Heading>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, tempore neque pariatur obcaecati reiciendis ut velit. Natus nihil asperiores expedita. Tempora animi eius error magnam quaerat fugit? Nulla, nobis temporibus a quibusdam beatae, non sint ab laboriosam quos explicabo quam voluptas nam sed impedit, numquam quae quia earum laudantium cumque.</p>
    </div>
  );
};

export default About;
