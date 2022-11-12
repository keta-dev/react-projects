import React from 'react';

const Categories = ({ categories, filterCategory}) => {
  console.log('categories', categories);

  return (
    <div className="btn-container">
      {categories.map((category, index) =>{
        return (
          <button type='button'
          onClick={() => filterCategory(category)}
          key={index} 
          className='filter-btn'
          >
            {category}
          </button>
        )
      })}
    </div>
  );
};

export default Categories;
