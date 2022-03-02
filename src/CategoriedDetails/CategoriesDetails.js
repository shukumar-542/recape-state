import React, { useContext } from 'react';
import { categoryContext } from '../App';

const CategoriesDetails = (props) => {
      const {name} = props.product
      // const {count } = props
      return (
            <div>
                  {/* <p> this is categories deatails page : {count}</p> */}
                  <p>this is context : {name}</p>
            </div>
      );
};

export default CategoriesDetails;