/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import socket from "@/server";
import InputField from "@/modules/chat/components/InputField";
import MessageContainer from "@/modules/chat/components/MessageContainer";
import { CardHeader } from "@/components/CardHeader";

function Chat() {
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState("");
  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessageList((prev) => prev.concat(message));
    });
    askUserName();
  }, []);

  const askUserName = () => {
    const userName = prompt("Enter your name");

    console.log("uuu", userName);

    socket.emit("join_room", userName, (res: any) => {
      if (res?.ok) {
        setUser(res.data);
      }
    });
  };
  const sendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    socket.emit("send_message", message, (res: any) => {
      console.log("send message response", res);
    });
    setMessage("");
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <div className="w-full max-w-[375px] h-[812px] flex flex-col border-2 border-[#7538C5] rounded-[32px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)] overflow-hidden bg-white">
        {/* 헤더 - 고정 */}
        <div className="flex-shrink-0">
          <CardHeader message="투닥이" />
        </div>

        {/* 채팅 영역 */}
        <div className="flex-1 bg-[#DAF1FE] flex flex-col justify-between overflow-hidden">
          {/* 메시지 리스트 - 스크롤 */}
          <div className="flex-1 overflow-y-auto px-4 py-4 custom-scrollbar">
            <MessageContainer messageList={messageList} user={user} />
          </div>

          <div className="flex-shrink-0 px-4 pb-4 pt-2 bg-[#DAF1FE]">
            <InputField
              message={message}
              setMessage={setMessage}
              sendMessage={sendMessage}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
