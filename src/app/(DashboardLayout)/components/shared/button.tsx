import React from 'react';
import Button from '@mui/material/Button';
import NextLink from 'next/link';

interface NewButtonProps {
  href: string;
  text?: string;
}

const NewButton: React.FC<NewButtonProps> = ({ href, text }) => {
  return (
    <NextLink href={href} passHref legacyBehavior>
        <Button variant="contained" color="primary" component="a">
         {text}
        </Button>
      </NextLink>
  );
};

export default NewButton;