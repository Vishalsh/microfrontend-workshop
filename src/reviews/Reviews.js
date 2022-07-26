import React, { useState, useEffect } from 'react';
import { custReview} from './customer-review.js';

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function mergeReviewImage(images)  {
  const reviewList = [];
  for (let index = 0; index < 15; index++) {
    const review = custReview[randomIntFromInterval(0, custReview.length-1)];
    reviewList.push({
      id: images[index].id,
      name: images[index].author,
      image: images[index],
      reviews: review
    })
  }
  return reviewList;
}

export default function Reviews() {
  const [updatedReviewList, setUpdatedReviewList] = useState([]);

  useEffect(async() => {
    const data = await fetch('https://picsum.photos/v2/list');
    const jsonData = await data.json();
    setUpdatedReviewList(mergeReviewImage(jsonData));
  }, []);

  return updatedReviewList.map((review) => {
    return (
    <div className="review-container" key={review.id}>
      <img src={review.image.download_url} width="50" height="50" alt={review.name} />
      <b>{review.name}</b>
      <p>{review.reviews}</p>
    </div>
  )
  })
}
