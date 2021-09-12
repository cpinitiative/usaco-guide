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
      <div className="flex-1 w-0 relative pr-24">
        <div className="relative z-10">{feature}</div>
        <div
          className="
            absolute
            right-24
            top-0
            bottom-0
            w-48
            bg-gradient-to-r
            from-transparent
            to-white
            z-20
          "
        ></div>

        <div
          className="
            absolute
            left-0
            right-1/2
            top-0
            bottom-0
            inset-0
            bg-sky-200
            opacity-[35%]
            transform-gpu
            animate-blob1
            rounded-full
            blur-2xl
          "
        ></div>
      </div>
      <div className="flex-1">
        <div>
          <div
            className="
              w-12
              h-12
              rounded-xl
              mb-4
              bg-gradient-to-br
              flex
              items-center
              justify-center
              from-cyan-400
              to-sky-500
              text-white
            "
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
