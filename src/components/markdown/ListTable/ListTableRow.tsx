import clsx from 'clsx';
import React from 'react';

export default function ListTableRow({
  id,
  children,
}: {
  id: string;
  children: React.ReactNode;
}): JSX.Element {
  const [isActive, setIsActive] = React.useState(false);

  React.useEffect(() => {
    const hashHandler = (): void => {
      setIsActive(window?.location?.hash === '#' + id);
    };
    hashHandler();

    window.addEventListener('hashchange', hashHandler, false);
    return (): void =>
      window.removeEventListener('hashchange', hashHandler, false);
  }, [id]);

  return (
    <tr
      className={clsx(
        isActive && 'bg-[#fdfdea]! dark:bg-[#3c3c00]!',
        'relative'
      )}
    >
      <td id={id} className="absolute bottom-[120px] h-[2px]" />
      {children}
    </tr>
  );
}

export function ListTableCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}): JSX.Element {
  return <td className={clsx('px-3 py-4 text-sm', className)}>{children}</td>;
}
