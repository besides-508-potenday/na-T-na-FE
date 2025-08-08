// /* eslint-disable @typescript-eslint/no-explicit-any */

import * as React from 'react';
import { cn } from '@/lib/utils';
import { DeleteInputIcon } from '@/assets/icons';

export interface CustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  nickname?: string;
  handleClear?: () => void;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ error = false, errorMessage, nickname, handleClear, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);
    const [hasValue, setHasValue] = React.useState(false);

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      setHasValue(e.target.value.length > 0);
      props.onBlur?.(e);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setHasValue(e.target.value.length > 0);
      props.onChange?.(e);
    };

    const getBorderColor = () => {
      if (error) return 'border-[#FF1919]'; // 에러 상태
      if (isFocused) return 'border-[#BF8BFE]'; // 포커스 상태
      if (hasValue) return 'border-[#71717A]'; // 값이 있는 상태
      return 'border-[#E4E4E7]'; // 기본 상태
    };

    return (
      <div className="w-full">
        <div className="relative">
          <input
            className={cn(
              'flex h-10 w-full rounded-[10px] border-[2px] bg-background px-3 py-6 text-[24px] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#A1A1AA] focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-colors',
              getBorderColor()
            )}
            ref={ref}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            style={{ fontFamily: 'DungGeunMo' }}
            value={nickname}
            {...props}
          />
          {nickname && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors"
            >
              <DeleteInputIcon />
            </button>
          )}
        </div>
        {/* 에러 메시지 영역을 항상 고정 높이로 유지 */}
        <div className="h-6 mt-1">
          {error && errorMessage && (
            <p
              className="ml-3 text-[16px] text-[#FF1919]"
              style={{ fontFamily: 'Pretendard' }}
            >
              {errorMessage}
            </p>
          )}
        </div>
      </div>
    );
  }
);
CustomInput.displayName = 'CustomInput';

export default CustomInput;
