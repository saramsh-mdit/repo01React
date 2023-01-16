import React from 'react'

type Props = {
    title: string,
    date: string,
    image:string
}

export const DefaultPropsVoteInfoCard = {
  title: 'Vote for Ppdent',
  date: '2023-01-05',
  image: 'http://u.cubeupload.com/adsuri/7NQDHz.jpeg',
};

const VoteThumbnailCards:React.FC<Props> = (props) => {
  return (
    <div className='flex w-full flex-col gap-1 border hover:border-blue-700 cursor-pointer rounded overflow-hidden hover:text-blue-900 duration-200 hover:shadow'>
      <img
        src={props.image}
        alt={props.title}
        className='w-full h-36 object-cover hover:scale-x-105 duration-300 hover:duration-300 overflow-hidden'
      />

      <div className='w-full flex px-4 py-2 items-center gap-4 justify-between'>
        <p className='font-semibold text-lg'>{props.title}</p>
        <p className='text-sm'>{props.date}</p>
      </div>
    </div>
  );
}

export default VoteThumbnailCards