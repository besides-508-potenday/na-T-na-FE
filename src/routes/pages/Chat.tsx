/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import socket from '@/server';
import InputField from '@/modules/chat/components/InputField';
import MessageContainer from '@/modules/chat/components/MessageContainer';
import LayoutCard from '@/components/LayoutCard';

function Chat() {
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
    <LayoutCard headerMessage="채팅중">
      {/* 채팅 영역 */}
      <div className="flex-1 bg-[#DAF1FE] flex flex-col overflow-hidden">
        {/* 메시지 리스트 - 스크롤 */}
        <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
          <MessageContainer messageList={messageList} user={user} />
        </div>

        <div className="flex-shrink-0 px-4 pb-4 pt-2 ">
          <InputField
            message={message}
            setMessage={setMessage}
            sendMessage={sendMessage}
          />
        </div>
      </div>
    </LayoutCard>
  );
}

export default Chat;
