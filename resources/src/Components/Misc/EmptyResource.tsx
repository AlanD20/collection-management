import { DefProps } from '@/@types/Global';
import React from 'react';
import TitleText from './TitleText';

interface Props extends DefProps {
  model: string;
}

const EmptyResource = ({ model }: Props) => {
  return (
    <div className="mt-12">
      <TitleText label={__('model.empty', { model })} />
    </div>
  );
};

export default EmptyResource;
