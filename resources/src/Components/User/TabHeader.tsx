import React from 'react';
import { UsePage } from '@/@types/Global';
import ButtonLink from '@@/Form/ButtonLink';
import { IoIosArrowBack } from 'react-icons/io';
import { usePage } from '@inertiajs/inertia-react';

interface Props {
  back: string;
}

const TabHeader = ({ back }: Props) => {
  const $ = usePage<UsePage>().props;

  return (
    <div className="w-full flex px-8 py-4">
      <ButtonLink href={back} className="text-xl gap-4">
        <IoIosArrowBack />
        <span className="capitalize">{$._.form.back}</span>
      </ButtonLink>
    </div>
  );
};

export default TabHeader;
