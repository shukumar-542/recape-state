import React, { useContext, useEffect, useState } from 'react';
import { categoryContext } from '../../App';
import CategoriesDetails from '../../CategoriedDetails/CategoriesDetails';

const allProducts = [
      {name:'Lenove', category:'laptop'},{name:'Asus', category:'laptop'},{name:'Dell', category:'laptop'},
      {name:'Samsung', category:'mobile'},{name:'Nokia', category:'mobile'},{name:'Apple', category:'mobile'},
      {name:'Canon', category:'camera'},{name:'Nikkon', category:'camera'},{name:'Sony', category:'camera'}

]

const Categories = (props) => {
      const [products, setProducts] = useState([]);

      const [category] = useContext(categoryContext);
      useEffect(()=>{
            console.log(category);
            const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() ===category.toLowerCase())
            setProducts(matchedProducts);
      },[category])
      // const {count } = props
      return (
            <div>
                  <h4>this is categories pages{category}</h4>
                  {
                      products.map(pd => <CategoriesDetails product = {pd}></CategoriesDetails>)  
                  }
            </div>
      );
};

export default Categories;