import React from 'react';
import { Button } from '@mui/material';

export interface ButtonProps {
  label: string;
}

export const ButtonComponent = ({ label, ...rest }: ButtonProps) => {
  return <Button {...rest}>{label}</Button>;
};
