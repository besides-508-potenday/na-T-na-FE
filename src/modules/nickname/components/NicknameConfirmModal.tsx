import { StepIcon } from '@/assets/icons';
import { CardHeader } from '@/components/CardHeader';
import { GridPattern } from '@/components/GridPattern';

interface NicknameConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  nickname: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function NicknameConfirmModal({
  isOpen,
  onClose,
  nickname,
  onConfirm,
  onCancel,
}: NicknameConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 백그라운드 오버레이 */}
      <div
        className="absolute inset-0 bg-black/10 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* 모달 컨테이너 */}
      <div className="relative z-10 w-full max-w-sm mx-4">
        <div className="bg-white border-2 border-[#7538C5] rounded-[32px] overflow-hidden">
          {/* 헤더 */}
          <CardHeader message="닉네임 확인" />

          {/* 본문 */}
          <div className="bg-white px-2 py-3 relative overflow-hidden">
            {/* 격자 패턴 배경 */}
            <div className="absolute inset-0">
              <GridPattern />
            </div>

            <div className="relative z-10 px-2 py-5">
              <div className="text-center mb-5">
                <h2
                  className="text-[#18181B] text-[26px] font-semibold leading-tight"
                  style={{ fontFamily: 'Pretendard' }}
                >
                  {nickname}으로 시작하시겠습니까?
                </h2>
              </div>

              {/* 버튼들 */}
              <div className="flex gap-3 px-3">
                <button
                  onClick={onCancel}
                  className="flex-1 bg-[#95CDFE] border-l-[2px] cursor-pointer border-b-[2px] border-[#2C55C7] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#759CFE]  active:bg-[#2C55C7] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
                >
                  <StepIcon size={20} fill="#18181B" />
                  <span
                    className="text-[20px] font-normal text-[#18181B]"
                    style={{ fontFamily: 'DungGeunMo' }}
                  >
                    아니요
                  </span>
                </button>

                <button
                  onClick={onConfirm}
                  className="flex-1 bg-[#FC89BA] border-l-[2px] cursor-pointer border-b-[2px] border-[#FF5D94] rounded-md px-3 py-4 flex items-center justify-center gap-1 shadow-[inset_-2px_2px_1px_0px_rgba(255,255,255,0.4)] transition-all duration-200 hover:bg-[#FF72AE] active:bg-[#FF4282] active:translate-x-0.5 active:translate-y-0.5 active:border-r-[1px] active:border-b-[1px]"
                >
                  <StepIcon size={20} fill="#18181B" />
                  <span
                    className="text-[20px] font-normal text-[#18181B]"
                    style={{ fontFamily: 'DungGeunMo' }}
                  >
                    네
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
