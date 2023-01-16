import React from 'react'
import {AiFillDollarCircle} from "react-icons/ai"

import { Button } from '../global/Button';

type props = {
    title: string,
    description: string,
    link: string,
    icon:React.ReactNode
}
export const DefPropsLinkCard: props = {
  title: 'Hello there',
  description: `Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, iusto.`,
  link: '/',
  icon: <AiFillDollarCircle />,
};

const LinkCard:React.FC<props> = (props) => {
  return (
    <div className='flex flex-col text-white gap-4 h-full items-center border rounded-lg bg-blue-600 p-4'>
      <h3 className='text-2xl font-bold text-white'>{props.title}</h3>
      <div className="text-6xl flex mx-auto justify-center border-blue-200 border-2 rounded-full">
        <span className='p-1'>
        {props.icon}
        </span>
      </div>
      <p className='text-base text-blue-100 p-4 bg-blue-500 rounded'>{props.description}</p>
      <Button className="text-sm font-semibold m-4 mt-6 rounded bg-white text-blue-800">Go To {props.title}</Button>
    </div>
  );
}

export default LinkCard