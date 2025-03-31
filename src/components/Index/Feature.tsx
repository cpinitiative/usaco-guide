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
          'relative hidden md:block md:w-0 md:flex-1',
          featurePosition === 'left' && 'md:pr-12 lg:pr-24'
        )}
      >
        <div className="relative z-10">{feature}</div>

        {fade !== 'none' && (
          <div
            className={classNames(
              'absolute top-0 bottom-0 z-20 w-36 bg-linear-to-l from-white dark:from-gray-900',
              featurePosition === 'left'
                ? 'right-0 md:right-12 lg:right-24'
                : 'right-0'
            )}
          />
        )}

        <div
          className={classNames(
            'animate-blob1 absolute inset-0 top-0 right-1/2 bottom-0 left-0 transform-gpu rounded-full opacity-[35%] blur-2xl',
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
              'mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br text-white',
              iconClasses
            )}
          >
            <Icon className="h-6 w-6" />
          </div>
        </div>
        <h3 className="text-xl font-bold text-gray-900 md:text-3xl dark:text-gray-100">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 md:mt-4 md:text-lg dark:text-gray-300">
          {children}
        </p>
      </div>
    </div>
  );
};
