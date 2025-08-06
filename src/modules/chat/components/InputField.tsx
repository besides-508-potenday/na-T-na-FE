import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ArrowIcon } from '@/assets/icons';

interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent) => void;
}

const InputField = ({ message, setMessage, sendMessage }: InputFieldProps) => {
  return (
    <div className="flex w-full px-1 pb-2 h-16 items-center">
      <form onSubmit={sendMessage} className="flex justify-between w-full">
        <Input
          placeholder="텍스트 입력"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full h-[44px] mx-2 bg-white border-[#E4E4E7] border-[3px] text-[#71717A] font-normal focus:outline-none focus:border-[#E4E4E7] focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
          style={{
            fontFamily: 'DungGeunMo',
          }}
        />

        <Button
          disabled={message === ''}
          type="submit"
          className="w-[44px] h-[44px] rounded-full bg-[#FF5D94] hover:bg-[#E54B85] disabled:opacity-50  flex items-center justify-center border-none"
        >
          <ArrowIcon size={24} fill="white" />
        </Button>
      </form>
    </div>
  );
};

export default InputField;
