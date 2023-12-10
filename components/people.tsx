import React from 'react'
import Image, {StaticImageData} from "next/image"
import RatingStars from './RatingStar';


function AllPeople(props:{img:StaticImageData,name:string,roll:string,id:number}){
  return (
   
    <div className="py-2 md:py-4 px-4">
        <Image src={props.img} alt="" className='rounded-full opacity-50 hover:opacity-100 mx-auto w-10 h-10 md:w-16 md:h-16'/>
        <RatingStars totalStars={5}/>
        <h3 className="text-xs font-medium ">{props.name}</h3>
     <h2 className="text-xs font-light line-clamp-2 ">{props.roll}</h2>
    </div>
 
  )
}

export function RecentStudies(props:{img:StaticImageData,heading:string,description:string,id:number}){
  return (
   
    <div className="rounded-xl h-28 md:h-[40vh] w-[80%] bg-[#F1F2FF] my-8 flex">
        <Image src={props.img} alt="" className='rounded-lg justify-start h-28 md:h-[40vh] w-[45%] '/>
        <div className=' w-[45%] py-5 m-auto '>
        <h3 className="text-md md:text-2xl text-gray-700 font-semibold text-start line-clamp-2">{props.heading}</h3>
        <p className='text-xs md:text-sm text-gray-700 text-start line-clamp-2 md:line-clamp-none'>{props.description}</p>
        <button className='text-sm underline hidden md:block pt-2 font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Read More</button>
        </div>
      
    </div>
 
  )
}

export default AllPeople;