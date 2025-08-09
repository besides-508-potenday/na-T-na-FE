import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowIcon } from '@/assets/icons';

interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent) => void;
  disabled?: boolean;
}

const InputField = ({
  message,
  setMessage,
  sendMessage,
  disabled = false,
}: InputFieldProps) => {
  const isOverLimit = message.length > 60;
  const isDisabled = disabled || message.trim() === '' || isOverLimit;

  return (
    <div className="flex w-full px-1 pb-2 flex-col">
      <form
        onSubmit={sendMessage}
        className="flex justify-between w-full items-center"
      >
        <Input
          placeholder="텍스트 입력"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full h-[44px] mx-2 bg-white border-[#E4E4E7] border-[2px] text-[#71717A] font-normal focus:outline-none focus:border-[#E4E4E7] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{
            fontFamily: 'DungGeunMo',
          }}
          aria-invalid={isOverLimit}
          disabled={disabled}
        />

        <Button
          disabled={isDisabled}
          type="submit"
          className="w-[44px] h-[44px] rounded-full cursor-pointer bg-[#FF5D94] hover:bg-[#E54B85] disabled:opacity-50  flex items-center justify-center border-none"
        >
          <ArrowIcon size={24} fill="white" />
        </Button>
      </form>
      <div className="h-6 mt-1 ml-3">
        {isOverLimit && (
          <p
            className="text-[16px] text-[#FF1919]"
            style={{ fontFamily: 'Pretendard' }}
          >
            60자를 넘었습니다
          </p>
        )}
      </div>
    </div>
  );
};

export default InputField;
