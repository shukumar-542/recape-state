import React, { useContext } from 'react';
import { categoryContext } from '../App';

const CategoriesDetails = () => {
      const category = useContext(categoryContext);
      // const {count } = props
      return (
            <div>
                  {/* <p> this is categories deatails page : {count}</p> */}
                  <p>this is context : {category}</p>
            </div>
      );
};

export default CategoriesDetails;