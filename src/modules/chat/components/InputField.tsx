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
    <div className="flex w-full px-2 pb-5">
      <form onSubmit={sendMessage} className="flex justify-between w-full">
        <Input
          placeholder="안녕 만나서 반가워"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="h-10 w-full mx-2 bg-[#C6CAFE]  border border-[#7538C5] text-black text-[9.12px] leading-[1.2] placeholder-black font-normal focus:outline-none"
          style={{
            fontFamily: 'Pretendard',
          }}
        />

        <Button
          disabled={message === ''}
          type="submit"
          className="w-10 h-10 rounded-full bg-[#FF5D94] hover:bg-[#E54B85] disabled:opacity-50  flex items-center justify-center border-none"
        >
          <ArrowIcon size={24} fill="white" />
        </Button>
      </form>
    </div>
  );
};

export default InputField;
