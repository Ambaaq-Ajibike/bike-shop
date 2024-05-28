import React, { useState } from 'react';
import Header from "../../containers/Header"
import Footer from "../../containers/Footer"
import BodyHeader  from '../../components/BodyHeader/BodyHeader';
import './Blog.css'
import { blogs } from '../data';
import { Card } from '../../components/Card/Card';
let Blog = () =>{

    return (
        <>
   <BodyHeader title='Blog' page='Blog' color='red' />
   <div className='blog-container'>
            {blogs.map(x => <Card data={x}/>)}
      </div>
        </>
    )
}
export default Blog;