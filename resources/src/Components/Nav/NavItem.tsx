import React from 'react';

interface Props {
  label: string;
}

const NavItem = ({ label }: Props) => {
  return (
    <li>
      <a>{label}</a>
    </li>
  );
};
export default NavItem;
