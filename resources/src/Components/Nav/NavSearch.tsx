import React, { ChangeEvent } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { useForm } from '@inertiajs/inertia-react';

const NavSearch = () => {
  const { get, data, setData } = useForm({
    query: '',
  });

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    get(
      route('main.search', {
        query: data.query.trim(),
      }),
      { preserveState: true }
    );
  };
  return (
    <div className="form-control w-full sm:w-auto">
      <form onSubmit={handleSubmit} className="input-group w-full sm:w-auto">
        <input
          type="text"
          name="query"
          value={data.query}
          onChange={(e) => setData('query', e.target.value)}
          placeholder={__('form.label_search')}
          className="input input-bordered w-full sm:w-auto"
        />
        <button className="btn btn-square">
          <AiOutlineSearch className="text-3xl" />
        </button>
      </form>
    </div>
  );
};

export default NavSearch;
