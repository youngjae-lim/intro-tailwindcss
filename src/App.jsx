import React from 'react'

import popularDestinations from './data/popularDestinations'
import DestinationCard from './components/DestinationCard'

export default function App() {
  return (
    <div>
      <div class='bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5'>
        <div
          class='
          px-8
          py-12
          max-w-md
          mx-auto
          sm:max-w-xl
          lg:px-12
          lg:py-24
          lg:max-w-full
          xl:mr-0
          2xl:col-span-2
        '
        >
          <div class='xl:max-w-xl'>
            <img class='h-10' src='/img/logo.svg' alt='Workcation' />
            <img
              class='
              mt-6
              rounded-lg
              shadow-xl
              sm:mt-8
              sm:h-64
              sm:w-full
              sm:object-cover
              object-center
              lg:hidden
            '
              src='/img/beach-work.jpeg'
              alt='Woman workcationing on the beach'
            />
            <h1
              class='
              mt-6
              text-2xl
              font-bold
              text-gray-900
              sm:mt-8
              sm:text-4xl
              lg:text-3xl
              xl:text-4xl
            '
            >
              You can work from anywhere.
              <br />
              <span class='text-indigo-500'>Take advantage of it.</span>
            </h1>
            <p class='mt-2 text-gray-600 sm:mt-4 sm:text-xl'>
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div class='mt-4 space-x-1 sm:mt-6'>
              <a
                class='btn
                btn-primary
                shadow-lg
                hover:-translate-y-0.5
                transform
                transition
              '
                href='#'
              >
                Book your escape
              </a>
              <a class='btn btn-secondary' href='#'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div class='hidden relative lg:block 2xl:col-span-3'>
          <img
            class='absolute inset-0 w-full h-full object-cover object-center'
            src='/img/beach-work.jpeg'
            alt='Woman workcationing on the beach'
          />
        </div>
      </div>

      <div className='max-w-md sm:max-w-xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full mx-auto px-8 lg:px-12 py-8'>
        <h2 className='text-xl text-gray-900'>Popular Destinations</h2>
        <p className='mt-2 text-gray-600'>
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className='mt-6 grid gap-6 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  )
}
