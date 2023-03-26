import { useState } from 'react';

export const MiniAppSection = (props) => {
  return (
    <section className='shadow border homeSections'>
      <div className='position-absolute bg-accent text-light fw-bold px-3 py-2 rounded rounded-top-0 rounded-start-0 '>
        {props.title}
      </div>
      <div className='py-5'>
        <div className='ps-3 mb-5 py-3 border-bottom shadow-sm'>
          <div className='fw-bold'>Description: </div>
          {props.description}
          <div className='pt-3 fw-bold fs-6'>Status:</div>{' '}
          <button
            className={`btn p-1 me-2 ${
              props.isDone ? 'btn-success' : 'btn-warning'
            }`}
          ></button>
          {props.isDone ? 'Completed' : 'Work In Progress'}
        </div>
        {props?.miniApp}
      </div>
    </section>
  );
};
