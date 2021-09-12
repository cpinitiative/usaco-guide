import classNames from 'classnames';
import React from 'react';

export const Feature = ({
  icon: Icon,
  iconClasses,
  title,
  blobClasses,
  feature,
  featurePosition,
  children,
}: {
  icon: React.ElementType;
  iconClasses: string;
  title: string;
  blobClasses: string;
  feature: JSX.Element;
  featurePosition: 'left' | 'right';
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <div className="flex items-center">
      <div
        className={classNames(
          'flex-1 w-0 relative',
          featurePosition === 'left' ? 'pr-24' : 'pl-24'
        )}
      >
        <div className="relative z-10">{feature}</div>
        <div
          className={classNames(
            'absolute top-0 bottom-0 w-48 bg-gradient-to-r from-transparent to-white z-20',
            featurePosition === 'left' ? 'right-24' : 'right-0'
          )}
        ></div>

        <div
          className={classNames(
            'absolute left-0 right-1/2 top-0 bottom-0 inset-0 opacity-[35%] transform-gpu animate-blob1 rounded-full blur-2xl',
            blobClasses
          )}
        />
      </div>
      <div
        className={classNames(
          'flex-1',
          featurePosition === 'right' && 'order-first'
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
        <h3 className="font-bold text-3xl text-gray-900">{title}</h3>
        <p className="text-lg mt-4 text-gray-600">{children}</p>
      </div>
    </div>
  );
};
