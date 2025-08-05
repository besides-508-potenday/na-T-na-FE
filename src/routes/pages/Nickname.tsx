import LayoutCard from '@/components/LayoutCard';
import NickNameConfirmButton from '@/modules/nickname/components/NickNameConfirmButton';
import CustomInput from '@/modules/nickname/components/NickNameInput';
import NicknameConfirmModal from '@/modules/nickname/components/NicknameConfirmModal';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Nickname() {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleConfirm = () => {
    if (nickname.trim()) {
      setIsModalOpen(true);
    }
  };
  const handleClear = () => {
    setNickname('');
  };

  const handleModalConfirm = () => {
    setIsModalOpen(false);
    // 여기에 다음 페이지로 이동하는 로직을 추가할 수 있습니다
    navigate('/characters');
  };

  const handleModalCancel = () => {
    setIsModalOpen(false);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <LayoutCard headerMessage="닉네임 입력중。。。">
        <div className="flex-1 flex flex-col  items-center gap-5 px-7 pt-30 z-10">
          <div className="text-center">
            <p
              className="text-[32px] font-semibold text-[#18181B]"
              style={{ fontFamily: 'Pretendard' }}
            >
              캐릭터와 대화할 이름을
              <br />
              정해 주세요
            </p>
          </div>
          <div className="pb-4">
            {' '}
            <CustomInput
              placeholder="닉네임을 입력하세요"
              error={false}
              errorMessage={'errorMessage'}
              nickname={nickname}
              handleClear={handleClear}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <NickNameConfirmButton onClick={handleConfirm} />
        </div>
      </LayoutCard>

      <NicknameConfirmModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        nickname={nickname}
        onConfirm={handleModalConfirm}
        onCancel={handleModalCancel}
      />
    </>
  );
}
