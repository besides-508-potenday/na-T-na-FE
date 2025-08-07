/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

import { cn } from '@/lib/utils';
import { DownArrowIcon, UpArrowIcon } from '@/assets/icons';

const CustomScrollBar = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.ScrollAreaScrollbar>,
  React.ComponentPropsWithoutRef<
    typeof ScrollAreaPrimitive.ScrollAreaScrollbar
  > & { viewportRef?: React.RefObject<HTMLDivElement> }
>(({ className, orientation = 'vertical', viewportRef, ...props }, ref) => {
  const handleScroll = (direction: 'up' | 'down') => {
    if (viewportRef?.current) {
      const { scrollTop } = viewportRef.current;
      const scrollAmount = 50;
      viewportRef.current.scrollTo({
        top:
          direction === 'up'
            ? scrollTop - scrollAmount
            : scrollTop + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (orientation === 'horizontal') {
    return (
      <ScrollAreaPrimitive.ScrollAreaScrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
          'flex touch-none p-px transition-colors select-none',
          'h-2.5 flex-col border-t border-t-transparent',
          className
        )}
        {...props}
      >
        <ScrollAreaPrimitive.ScrollAreaThumb className="bg-border relative flex-1 rounded-full" />
      </ScrollAreaPrimitive.ScrollAreaScrollbar>
    );
  }

  const buttonSize = 16.28;
  const containerPadding = 2.14;
  const buttonMargin = 4;
  const topBottomPadding = containerPadding + buttonSize + buttonMargin;

  return (
    <ScrollAreaPrimitive.ScrollAreaScrollbar
      ref={ref}
      orientation={orientation}
      className={cn(
        'relative flex touch-none select-none transition-colors',
        'h-full w-[21px] bg-[#A2B3D9] rounded-[5.71px] p-[2.57px]',
        className
      )}
      style={{
        paddingTop: `${topBottomPadding}px`,
        paddingBottom: `${topBottomPadding}px`,
      }}
      {...props}
    >
      {/* 위로 스크롤 버튼: padding 영역에 절대 위치로 배치 */}
      <button
        onClick={() => handleScroll('up')}
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[16.28px] h-[16.28px] bg-[#C2D4FC] rounded-[5px] border-[1.42px] border-white"
        style={{ top: `${containerPadding}px` }}
        aria-label="Scroll up"
      >
        <UpArrowIcon />
      </button>

      {/* 스크롤 Thumb: 이제 버튼과 겹치지 않고 올바른 영역에서 렌더링됩니다. */}
      <ScrollAreaPrimitive.ScrollAreaThumb className="relative flex-1 bg-[#C2D4FC] rounded-[5px] border-[1.42px] border-white" />

      {/* 아래로 스크롤 버튼: padding 영역에 절대 위치로 배치 */}
      <button
        onClick={() => handleScroll('down')}
        className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center w-[16.28px] h-[16.28px] bg-[#C2D4FC] rounded-[5px] border-[1.42px] border-white"
        style={{ bottom: `${containerPadding}px` }}
        aria-label="Scroll down"
      >
        <DownArrowIcon />
      </button>
    </ScrollAreaPrimitive.ScrollAreaScrollbar>
  );
});
CustomScrollBar.displayName = 'CustomScrollBar';

// --- 커스텀 스크롤 영역 컴포넌트 (개선됨) ---
const CustomScrollArea = React.forwardRef<
  React.ElementRef<typeof ScrollAreaPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => {
  const viewportRef = React.useRef<HTMLDivElement>(null);

  // 자식 요소에서 CustomScrollBar와 콘텐츠를 분리합니다.
  const scrollBar = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && child.type === CustomScrollBar
  );

  const content = React.Children.toArray(children).filter(
    (child) => !React.isValidElement(child) || child.type !== CustomScrollBar
  );

  return (
    <ScrollAreaPrimitive.Root
      ref={ref}
      className={cn('relative overflow-hidden', className)}
      {...props}
    >
      <ScrollAreaPrimitive.Viewport
        ref={viewportRef}
        className="h-full w-full rounded-[inherit]"
      >
        {content}
      </ScrollAreaPrimitive.Viewport>
      {/* 분리된 스크롤바에 viewportRef를 주입하여 클론합니다. */}
      {scrollBar &&
        React.cloneElement(scrollBar as React.ReactElement<any>, { viewportRef })}
      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
  );
});
CustomScrollArea.displayName = 'CustomScrollArea';

export { CustomScrollArea, CustomScrollBar };
