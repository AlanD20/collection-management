import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

interface Props {}

const NavSearch = (props: Props) => {
  return (
    <div className="form-control w-full sm:w-auto">
      <div className="input-group w-full sm:w-auto">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full sm:w-auto"
        />
        <button className="btn btn-square">
          <AiOutlineSearch className="text-3xl" />
        </button>
      </div>
    </div>
  );
};
export default NavSearch;
