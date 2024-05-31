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
   <BodyHeader title='Blog' page='Blog' color='black' />
   <div className='blog-container'>
        <div>
            <Card data={blogs[0]}/>
            <Card data={blogs[1]}/>
        </div>
        <div>
            <Card data={blogs[2]}/>
            <Card data={blogs[3]}/>
        </div>
        <div>
            <Card data={blogs[4]}/>
            <Card data={blogs[5]}/>
        </div>
        <div>
            <Card data={blogs[6]}/>
            <Card data={blogs[7]}/>
        </div>
      </div>
        </>
    )
}
export default Blog;