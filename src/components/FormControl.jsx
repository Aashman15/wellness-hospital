import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { IoIosArrowDown } from 'react-icons/io';

const FormControl = forwardRef(
  (
    { className, LeftComponent, RightComponent, useArrowDown, ...props },
    ref,
  ) => {
    const leftComponentRef = useRef(null);
    const [paddingLeft, setPaddingLeft] = useState(0);

    const updatePaddingLeft = () => {
      if (leftComponentRef.current) {
        setPaddingLeft(leftComponentRef.current.offsetWidth + 24 + 14);
      } else {
        setPaddingLeft(24);
      }
    };

    useEffect(() => {
      updatePaddingLeft();
    });

    return (
      <div className="relative inline-block h-fit w-fit">
        {LeftComponent && (
          <div
            className="absolute top-1/2 ml-6 -translate-y-1/2"
            ref={leftComponentRef}
          >
            <LeftComponent />
          </div>
        )}

        {useArrowDown ? (
          <div className="text-gray-formcontrol absolute right-0 top-1/2 mr-6 -translate-y-1/2">
            {<IoIosArrowDown size={18} />}
          </div>
        ) : (
          RightComponent && (
            <div className="absolute right-0 top-1/2 mr-6 -translate-y-1/2">
              {<RightComponent />}
            </div>
          )
        )}
        <input
          className={twMerge(
            'border-gray-formcontrol h-14 rounded-xl border-2 bg-transparent placeholder:text-gray-neutral',
            className,
          )}
          style={{
            paddingLeft: `${paddingLeft}px`,
          }}
          {...props}
          type="text"
          ref={ref}
        />
      </div>
    );
  },
);

export default FormControl;
