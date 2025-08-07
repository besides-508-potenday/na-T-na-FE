import LayoutCard from '@/components/LayoutCard';
import NickNameConfirmButton from '@/modules/nickname/components/NickNameConfirmButton';
import CustomInput from '@/modules/nickname/components/NickNameInput';
import NicknameConfirmModal from '@/modules/nickname/components/NicknameConfirmModal';
import { useAppStore } from '@/store';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Nickname() {
  const navigate = useNavigate();
  const { nickname, setNickname } = useAppStore();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 닉네임 유효성 검사
  const isNicknameValid =
    nickname.trim().length >= 2 && nickname.trim().length <= 10;
  const hasError = nickname.trim().length > 0 && !isNicknameValid;

  // 에러 메시지 설정
  const getErrorMessage = () => {
    if (nickname.trim().length === 0) return '';
    if (nickname.trim().length < 2) return '닉네임은 2자 이상이어야 합니다.';
    if (nickname.trim().length > 10) return '닉네임은 10자 이하여야 합니다.';
    return '';
  };

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
              error={hasError}
              errorMessage={getErrorMessage()}
              nickname={nickname}
              handleClear={handleClear}
              onChange={(e) => setNickname(e.target.value)}
            />
          </div>
          <NickNameConfirmButton
            nickname={nickname}
            onClick={handleConfirm}
            error={hasError}
          />
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
