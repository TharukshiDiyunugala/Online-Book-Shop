import React from 'react';
import myImage from '../assets/about.jpg';


const About = () => {
  return (
    <div>
      <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
          <div className='md:w-1/2 space-y-8 h-full'>
            <div className='mt-28 px-4 lg:px-24'>
              <h4 className='text-3xl font-bold text-left'>Who We Are</h4>
              <p className='text-justify'>
                Goodreads is the world’s largest site for readers and book recommendations. Our mission is to help readers discover books they love and get more out of reading. Goodreads launched in January 2007.
              </p>
              <h4 className='text-3xl font-bold text-left'>A Few Things You Can Do On Books</h4>
              <p className='text-justify'>
                See what books your friends are reading. Track the books you're reading, have read, and want to read. Check out your personalized book recommendations. Our recommendation engine analyzes 20 billion data points to give suggestions tailored to your literary tastes. Find out if a book is a good fit for you from our community’s reviews.
              </p>
              <h4 className='text-3xl font-bold text-left'>A Message From Our Co-Founder</h4>
              <p className='text-justify'>
                When I was in second grade, I discovered the Hardy Boys series. Ever since, I've loved to read — both for fun and to improve my mind. And I'm always looking for the next great book. One afternoon while I was scanning a friend's bookshelf for ideas, it struck me: when I want to know what books to read, I'd rather turn to a friend than any random person or bestseller list. So I decided to build a website – a place where I could see my friends' bookshelves and learn about what they thought of all their books. Elizabeth, my co-founder (and now my wife) wrote the site copy and I wrote the code. We started in my living room, motivated by the belief that there was a better way to discover and discuss good books, and that we could build it. Goodreads is that site. It is a place where you can see what your friends are reading and vice versa. You can create "bookshelves" to organize what you've read (or want to read). You can comment on each other's reviews. You can find your next favorite book. And on this journey with your friends you can explore new territory, gather information, and expand your mind. Knowledge is power, and power is best shared among readers.
              </p>
              
            </div>
          </div>
          <div className='md:w-1/2'>
            <img src={myImage} alt="My Image" className='w-full' />
          </div>
        </div>
      </div>
   
    </div>
  );
}

export default About;
