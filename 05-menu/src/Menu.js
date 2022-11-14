import React from 'react';

const Menu = ({ menus }) => {
  return (
    <section className="section-center">
      {menus.map((menu) => {
        const { id, title, price, img, desc} = menu;
        return (
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo" />
            <div className='item-info'>
              <header>
                <h4>{title}</h4>
                <h4 className='price'>${price}</h4>
              </header>
              <p className='item-text'>{desc}</p>
            </div>
          </article>
        )
      })}
    </section>
  );
};

export default Menu;
