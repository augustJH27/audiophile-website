import React from 'react';
import { categories } from '../../helpers/link';
import CatalogCard from './CatalogCard';
import styled from 'styled-components';

const Categories = () => {
  return (
    <section>
      <div className='container'>
        <CategoriesList>
          {categories.map((category) => {
            return (
              <CatalogCard className='card' key={category.id} {...category} />
            );
          })}
        </CategoriesList>
      </div>
    </section>
  );
};

const CategoriesList = styled.ul`
  display: grid;
  justify-content: space-between;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  @media screen and (min-width: 768px) {
    gap: 0.6rem;
  }
  @media screen and (min-width: 1280px) {
    gap: 2rem;
  }
`;

export default Categories;
