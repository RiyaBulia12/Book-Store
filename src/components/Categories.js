import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const categoriesObj = useSelector((state) => state.status);
  const statusClick = () => {
    dispatch(actionStatus());
  };
  return (
    <div className="my-4 text-center">
      <div className="btn">
        <button
          type="button"
          className="uppercase text-white btn-padding"
          onClick={statusClick}
        >
          Check Status
        </button>
      </div>
      <span>{categoriesObj}</span>
    </div>
  );
};

export default Categories;
