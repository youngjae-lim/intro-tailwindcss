import React from 'react'

const sizeClasses = {
  height: 'h-32',
  width: 'w-32',
}

export default function DestinationCard({ destination }) {
  return (
    <div className='flex items-center rounded-lg bg-white shadow-lg overflow-hidden'>
      <img
        className={`${sizeClasses.height} ${sizeClasses.width} flex-shrink-0`}
        src={destination.imageUrl}
        alt={destination.imageAlt}
      />
      <div className='px-4'>
        <h3 className='text-lg font-semibold text-gray-800'>
          {destination.city}
        </h3>
        <p className='text-gray-600 mobile:text-xs tablet:text-sm'>
          ${destination.averagePrice} / night average
        </p>
        <div className='mobile:mt-2 tablet:mt-4'>
          <a
            href='#'
            className='text-brand-dark hover:text-brand font-semibold text-sm'
          >
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  )
}
