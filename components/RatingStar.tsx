'use client'

import { useState } from "react";
 


interface RatingStarsProps {
    totalStars: number;
  }
  
  const RatingStars: React.FC<RatingStarsProps> = ({ totalStars }) => {
    const [rating, setRating] = useState(0);
  
    const handleClick = (star: number) => {
      setRating(star);
    };
  
    return (
      <div>
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            onClick={() => handleClick(index + 1)}
            style={{
              cursor: 'pointer',
              color: index < rating ? 'gold' : 'gray',
            }}
          >
        
            ★
          </span>
        ))}
        {/* <p className="text-sm md:text-md">Your rating: {rating}</p> */}
      </div>
    );
  };
  
  export default RatingStars;
  