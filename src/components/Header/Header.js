import React, { createContext, useContext } from 'react';
import { categoryContext } from '../../App';

const Header = (props) => {
      
     
      const [category, setCategory] = useContext(categoryContext)
      return (
            <div>
                  <h1>Header Page {category}</h1>
                  <button onClick={ () => setCategory (category +1)}> Count</button>
            </div>
      );
};

export default Header;