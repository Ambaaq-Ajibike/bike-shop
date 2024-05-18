import React from 'react';
import Header from "../containers/Header"
import Footer from "../containers/Footer"
import BodyHeader  from '../components/BodyHeader';
let Shop = () =>{
    return (
        <>        
   <Header/>
   <BodyHeader title='The Shop' page='Products' color='red' />
      <Footer/>
        </>
    )
}
export default Shop;