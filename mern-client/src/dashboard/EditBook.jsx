import React, { useState } from 'react'
import { Button, Checkbox, Label, Select, TextInput, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';

const EditBook = () => {
  const{id} = useParams();
  const {bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL} = useLoaderData();

   const bookCategories = [
    "Action",
    "Adventure",
    "Biography",
    "History",
    "Horror",
    "Kids",
    "Learning",
    "Science-Fiction",
    "Fantasy",
    "Autobiography",
    "Self-help",
    "Memoirs",
    "Business",
    "Religion",
    "Art",
    "Novel"
  ]
  const [selectedBookCategory, setSelectedBookCategory]=useState(bookCategories[0]);
  const handleChangeSelectedValue = (event, value) => {
    console.log(event.target.value);
    setSelectedBookCategory(event.target.value)
  }
  // handle Book submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category= form.categoryName.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updateBookObj = {
      bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    
    //console.log(bookObj);
    // update book data
    fetch(`http://localhost:4000/book/${id}`,{
      method:'PATCH',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updateBookObj)
    }).then(res=>res.json()).then(data=>{
      alert("The book is updated successfully!")
      
    })
    
    
    
    
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'> Update the Book data</h2>
      
      <form onSubmit={handleUpdate} className="flex lg:w-[1180px] flex-col flex-wrap gap-4 ">
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="bookTitle"
            value="Book Title"
          />
        </div>
        <TextInput
          id="bookTitle"
          name='bookTitle'
          placeholder="Book name"
          required
          type="text"
          defaultValue={bookTitle}
        />
      </div>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="authorName"
            value="Author Name"
          />
        </div>
        <TextInput
          id="authorName"
          name='authorName'
          placeholder="Author Name"
          required
          type="text"
          defaultValue={authorName}
        />
      </div>

      </div>
     
      <div className='flex gap-8'>
      <div className='lg:w-1/2'>
        <div className="mb-2 block">
          <Label
            htmlFor="imageURL"
            value="Book image URL"
          />
        </div>
        <TextInput
          id="imageURL"
          name='imageURL'
          placeholder="Book image URL"
          required
          type="text"
          defaultValue={imageURL}
        />
      </div>
      <div className='lg:w-1/2'>
      <div className="mb-2 block">
          <Label
            htmlFor="inputState"
            value="Book Category"
          />
        </div>
        <Select id='inputState' name='categoryName' className='w-full rounded' value={selectedBookCategory}
        onChange={handleChangeSelectedValue}>
          {
            bookCategories.map((option)=><option key={option} value={option}>{option}</option>)
          }
          </Select>

        
        
      </div>


      </div>
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="bookDescription"
            value="Book Description"
          />
        </div>
        <Textarea
        id="bookDescription"
        name='bookDescription'
        placeholder="Write Your Discription...."
        required
        className='w-full'
        rows={6}
        defaultValue={bookDescription}
      />
    
      </div>
      {/* book pdf link*/}
      <div>
        <div className="mb-2 block">
          <Label
            htmlFor="bookPDFURL"
            value="Book PDF URL"
          />
        </div>
        <TextInput
          id="bookPDFURL"
          name='bookPDFURL'
          placeholder="book pdf url"
          required
          type="text"
          defaultValue={bookPDFURL}
        />
      </div>
      
      <Button type="submit" className='mt-5'>
        Update the Book
      </Button>
     
     
    </form>
    </div>
  )
}

export default EditBook