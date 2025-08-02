import { useEffect, useState } from 'react';
import socket from '@/server';
import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';

function Chat2() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessageList((prev) => prev.concat(message));
    });
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt('Enter your name');

    console.log('uuu', userName);

    socket.emit('login', userName, (res: any) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit('sendMessage', message, (res: any) => {
      console.log('send message response', res);
    });
    setMessage('');
  };

  return (
    <>
      <div className="w-full h-screen">
        <div className="h-screen bg-[#1A1B1B] bg-cover bg-center mx-auto max-w-md flex flex-col">
          <div className="flex-1 overflow-hidden">
            <MessageContainer messageList={messageList} user={user} />
          </div>
          <div className="flex-shrink-0">
            <InputField
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat2;
