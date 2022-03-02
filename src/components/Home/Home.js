import React, { useContext } from 'react';
import { categoryContext } from '../../App';
import Categories from '../Categories/Categories';

const Home = (props) => {
      // const {count } = props
      const category = useContext(categoryContext)
      return (
            <div style={{border: '1px solid purple'}}>
            <h1>Home page{category}</h1>
            <Categories></Categories>
                  
            </div>
      );
};

export default Home;