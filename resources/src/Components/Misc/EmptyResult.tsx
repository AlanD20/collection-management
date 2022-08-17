import React from 'react';
import TitleText from './TitleText';
import { DefProps } from '@/@types/Global';

interface Props extends DefProps {
  model: string;
}

const EmptyResult = ({ model }: Props) => {
  return (
    <div className="mt-12">
      <TitleText className='text-2xl' label={__('main.empty_result', { model })} />
    </div>
  );
};

export default EmptyResult;
