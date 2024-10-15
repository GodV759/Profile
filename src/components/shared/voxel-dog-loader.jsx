"use client";
import { forwardRef } from 'react'
import { LoadingSpinner } from './icons/Spinner'
export const DogSpinner = () => (
  <LoadingSpinner className="absolute left-1/2 top-1/2 ml-[calc(0px_-_var(--spinner-size)_/_2)] mt-[calc(0px_-_var(--spinner-size))]"/>
)

export const DogContainer = forwardRef(({ children }, ref) => (
  <div
    ref={ref}
     className="voxel-dog relative mx-auto mt-[-20px] md:mt-[-60px] lg:mt-[-120px] mb-[-40px] w-[280px] md:w-[480px] lg:w-[640px] h-[280px] md:h-[480px] lg:h-[640px]"
  >
    {children}
  </div>
))

DogContainer.displayName = "DogContainer"

const Loader = () => {
  return (
    <DogContainer>
      <DogSpinner />
    </DogContainer>
  )
}

export default Loader