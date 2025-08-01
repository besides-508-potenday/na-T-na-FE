import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface InputFieldProps {
  message: string;
  setMessage: (value: string) => void;
  sendMessage: (e: React.FormEvent) => void;
}

const InputField: React.FC<InputFieldProps> = ({
  message,
  setMessage,
  sendMessage,
}) => {
  return (
    <div className="w-full fixed bottom-0 bg-red-500 flex min-h-[50px]">
      <div className="w-[50px] bg-slate-500 text-white font-bold flex justify-center items-center text-2xl">
        +
      </div>
      <form onSubmit={sendMessage} className="flex w-full">
        <Input
          placeholder="Type in here…"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="rounded-none focus-visible:ring-0 focus-visible:ring-offset-0 border-0 flex-1 px-2"
        />
        <Button
          type="submit"
          disabled={message === ''}
          className="rounded-none min-w-[70px] bg-yellow-300 hover:bg-yellow-400 text-black"
        >
          전송
        </Button>
      </form>
    </div>
  );
};

export default InputField;
