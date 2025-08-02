import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Plus, Send } from 'lucide-react';

interface InputFieldProps {
  message: string;
  setMessage: (message: string) => void;
  sendMessage: (event: React.FormEvent) => void;
}

const InputField = ({ message, setMessage, sendMessage }: InputFieldProps) => {
  return (
    <div className="bg-transparent flex absolute bottom-0 w-full px-2 pb-1">
      <button
        type="button"
        className="w-10 h-10 rounded-full bg-[#3B3B3E] text-white flex items-center justify-center"
      >
        <Plus className="w-5 h-5" />
      </button>
      <form onSubmit={sendMessage} className="flex justify-between w-full">
        <Input
          placeholder="Type in here…"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="h-10 w-full mx-2 text-white rounded-lg border-none focus-visible:ring-0 focus-visible:ring-offset-0  bg-[#3B3B3E]"
        />
        <Button
          disabled={message === ''}
          type="submit"
          className="w-10 h-10 rounded-full border-none text-white bg-indigo-700 hover:bg-indigo-600 disabled:opacity-50 p-0 flex items-center justify-center"
        >
          <Send className="w-5 h-5" />
        </Button>
      </form>
    </div>
  );
};

export default InputField;
