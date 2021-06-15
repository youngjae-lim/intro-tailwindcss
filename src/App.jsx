import React from 'react'

import popularDestinations from './data/popularDestinations'
import DestinationCard from './components/DestinationCard'

export default function App() {
  return (
    <div>
      <div className='bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5'>
        <div
          className='px-8 py-12 max-w-md mobile:mx-auto mobile:max-w-3xl tablet:max-w-3xl sm:max-w-5xl lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 2xl:col-span-2
        '
        >
          <div className='xl:max-w-xl'>
            <img className='h-10' src='/img/logo-brand.svg' alt='Workcation' />
            <img
              className='
              mt-6
              rounded-lg
              shadow-xl
              tablet:mt-8
              tablet:h-64
              tablet:w-full
              tablet:object-cover
              object-center
              lg:hidden
            '
              src='/img/beach-work.jpeg'
              alt='Woman workcationing on the beach'
            />
            <h1
              className='
              mt-6
              text-2xl
              font-headline
              tracking-tight
              font-semibold
              text-gray-900
              tablet:mt-8
              tablet:text-4xl
              lg:text-3xl
              xl:text-4xl
            '
            >
              You can work from anywhere.
              <br />
              <span className='text-brand'>Take advantage of it.</span>
            </h1>
            <p className='mt-2 text-gray-600 tablet:mt-4 tablet:text-xl'>
              Workcation helps you find work-friendly rentals in beautiful
              locations so you can enjoy some nice weather even when you're not
              on vacation.
            </p>
            <div className='mt-4 space-x-2 tablet:mt-6'>
              <a
                className='btn
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
              <a className='btn btn-secondary' href='#'>
                Learn more
              </a>
            </div>
          </div>
        </div>
        <div className='hidden relative lg:block 2xl:col-span-3'>
          <img
            className='absolute inset-0 w-full h-full object-cover object-center'
            src='/img/beach-work.jpeg'
            alt='Woman workcationing on the beach'
          />
        </div>
      </div>

      <div className='max-w-md mobile:max-w-2xl mobile:mx-auto tablet:max-w-3xl sm:max-w-5xl lg:max-w-6xl xl:max-w-7xl 2xl:max-w-full tablet:mx-auto px-8 lg:px-12 py-8'>
        <h2 className='text-xl text-gray-900'>Popular Destinations</h2>
        <p className='mt-2 text-gray-600'>
          A selection of great work-friendly cities with lots to see and
          explore.
        </p>
        <div className='mt-6 grid gap-6 tablet:grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          {popularDestinations.map((destination) => (
            <DestinationCard destination={destination} key={destination.city} />
          ))}
        </div>
      </div>
    </div>
  )
}
