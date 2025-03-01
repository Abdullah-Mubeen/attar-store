"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Star } from 'lucide-react';

// Mock data - in a real application, this would come from an API or database
const reviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    date: "March 15, 2025",
    rating: 5,
    comment: "This is my favorite fragrance! The scent is sophisticated and long-lasting. I receive compliments every time I wear it. The packaging is also beautiful and makes it a perfect gift."
  },
  {
    id: 2,
    name: "Michael Chen",
    date: "February 28, 2025",
    rating: 4,
    comment: "Very nice attar with a unique scent profile. It evolves beautifully throughout the day. The only reason I'm giving 4 stars instead of 5 is that I wish it lasted a bit longer on my skin."
  },
  {
    id: 3,
    name: "Priya Sharma",
    date: "January 10, 2025",
    rating: 5,
    comment: "Absolutely love this fragrance! It's rich, complex, and perfect for special occasions. The bottle is elegant and the scent lasts all day. Will definitely purchase again."
  }
];

const StarRating = ({ rating, setRating = null, interactive = false }) => {
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type={interactive ? "button" : undefined}
          onClick={interactive ? () => setRating(star) : undefined}
          className={interactive ? "cursor-pointer" : "cursor-default"}
        >
          <Star
            className={`h-5 w-5 ${
              star <= rating ? "fill-[#c9a96e] text-[#c9a96e]" : "text-muted-foreground"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export function ProductReviews() {
  const [newRating, setNewRating] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div>
      <h2 className="text-2xl font-playfair font-bold mb-6">Customer Reviews</h2>
      
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
        <div className="mb-4 md:mb-0">
          <div className="flex items-center gap-2">
            <StarRating rating={Math.round(averageRating)} />
            <span className="text-lg font-medium">{averageRating.toFixed(1)}</span>
            <span className="text-muted-foreground">({reviews.length} reviews)</span>
          </div>
        </div>
        
        <Button 
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-[#c9a96e] hover:bg-[#b89355] text-white"
        >
          Write a Review
        </Button>
      </div>
      
      {showReviewForm && (
        <div className="bg-muted p-6 rounded-lg mb-8">
          <h3 className="text-lg font-medium mb-4">Write Your Review</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <StarRating rating={newRating} setRating={setNewRating} interactive={true} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <Input id="name" placeholder="Your name" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
            
            <div>
              <label htmlFor="comment" className="block text-sm font-medium mb-1">Review</label>
              <Textarea id="comment" placeholder="Write your review here..." rows={4} />
            </div>
            
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setShowReviewForm(false)}>
                Cancel
              </Button>
              <Button className="bg-[#c9a96e] hover:bg-[#b89355] text-white">
                Submit Review
              </Button>
            </div>
          </div>
        </div>
      )}
      
      <div className="space-y-6">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-border pb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="text-muted-foreground">{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}