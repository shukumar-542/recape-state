import React, { createContext, useContext } from 'react';
import { categoryContext } from '../../App';

const Header = (props) => {
      
     
      const [category, setCategory] = useContext(categoryContext)
      return (
            <div>
                  <h1>Header Page {category}</h1>
                  <button onClick={ () => setCategory ('Laptop')}> Laptop</button>
                  <button onClick={ () => setCategory ('Mobile')}> Mobile</button>
                  <button onClick={ () => setCategory ('Camera')}> Camera</button>

            </div>
      );
};

export default Header;