import classNames from 'classnames';
import React from 'react';

export const Feature = ({
  icon: Icon,
  iconClasses,
  title,
  blobClasses,
  feature,
  featurePosition,
  fade = 'right',
  children,
}: {
  icon: React.ElementType;
  iconClasses: string;
  title: string;
  blobClasses: string;
  feature: JSX.Element;
  featurePosition: 'left' | 'right';
  fade?: 'none' | 'right';
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="flex flex-col md:flex-row md:items-center">
      <div
        className={classNames(
          'hidden md:block md:flex-1 md:w-0 relative',
          featurePosition === 'left' && 'md:pr-12 lg:pr-24'
        )}
      >
        <div className="relative z-10">{feature}</div>

        {fade !== 'none' && (
          <div
            className={classNames(
              'absolute top-0 bottom-0 w-36 bg-gradient-to-l from-white z-20',
              featurePosition === 'left'
                ? 'right-0 md:right-12 lg:right-24'
                : 'right-0'
            )}
          />
        )}

        <div
          className={classNames(
            'absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl',
            blobClasses
          )}
        />
      </div>
      <div
        className={classNames(
          'md:flex-1',
          featurePosition === 'right' && 'md:order-first md:pr-12 lg:pr-24'
        )}
      >
        <div>
          <div
            className={classNames(
              'w-12 h-12 rounded-xl mb-4 bg-gradient-to-br flex items-center justify-center text-white',
              iconClasses
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="font-bold text-xl md:text-3xl text-gray-900">{title}</h3>
        <p className="md:text-lg mt-2 md:mt-4 text-gray-600">{children}</p>
      </div>
    </div>
  );
};
