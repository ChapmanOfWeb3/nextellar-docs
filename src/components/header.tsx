import React from 'react';
import { cn } from '@/lib/utils';

const Header: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <header
      className={cn(
        'sticky top-0 z-10 flex items-center justify-between min-h-14 md:min-h-16 border-b px-3 bg-defaultBase/60 backdrop-blur overflow-hidden',
        className
      )}
      {...props}
    />
  );
};

export default Header;
