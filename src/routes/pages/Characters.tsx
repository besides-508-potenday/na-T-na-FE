import { CardHeader } from '@/components/CardHeader';
import { ChevronLeftIcon, ChevronRightIcon } from '@/assets/icons';
import CharacterSelectButton from '@/modules/characters/ui/components/characterSelectButton';

function Characters() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 전체 컨테이너 */}
      <div className="flex flex-col justify-between items-center gap-[34px] px-4 pt-[60px] pb-[60px]">
        {/* 메인 카드 */}
        <div className="w-full max-w-sm flex flex-col items-center bg-[#DAF1FE] border-2 border-[#7538C5] rounded-[32px] shadow-[4px_4px_4px_0px_rgba(117,56,197,0.25)]">
          {/* 헤더 */}
          <CardHeader message="캐릭터 선택" />

          {/* 바디 */}
          <div className="flex-1 flex flex-col items-center gap-7 px-4 py-5 w-full">
            {/* 제목 섹션 */}
            <div className="flex flex-col items-center gap-1 w-full py-2">
              <h1
                className="text-[#18181B] text-[26px] font-semibold leading-[1.19] text-center"
                style={{ fontFamily: 'Pretendard' }}
              >
                대화를 나눌 친구를
                <br />
                선택해 주세요
              </h1>
            </div>

            {/* 캐릭터 선택 섹션 */}
            <div className="flex items-center justify-between w-full">
              {/* 왼쪽 화살표 */}
              <button className="w-12 h-12 flex items-center justify-center">
                <ChevronLeftIcon size={32} fill="#18181B" />
              </button>

              {/* 캐릭터 이미지 */}
              <div className="w-[210px] h-[210px] bg-[#95CDFE] border-[2.625px]  rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="/tudak2.png"
                  alt="투닥이"
                  className="w-[230px] h-[210px] object-cover"
                />
              </div>

              {/* 오른쪽 화살표 */}
              <button className="w-12 h-12 flex items-center justify-center">
                <ChevronRightIcon size={32} fill="#18181B" />
              </button>
            </div>

            {/* 캐릭터 정보 */}
            <div className="flex flex-col items-center gap-3 px-4 w-full">
              {/* 이름 */}
              <div className="flex items-center gap-5 w-full">
                <span
                  className="text-[#18181B] text-[28px] leading-[1em] whitespace-nowrap"
                  style={{ fontFamily: 'DungGeunMo' }}
                >
                  이름
                </span>
                <div className="flex-1 bg-white border-[1.5px] border-[#18181B] rounded px-2 py-1">
                  <span
                    className="text-[#18181B] text-lg font-semibold"
                    style={{ fontFamily: 'Pretendard' }}
                  >
                    투닥이
                  </span>
                </div>
              </div>

              {/* 성격 */}
              <div className="flex items-center gap-5 w-full">
                <span
                  className="text-[#18181B] text-[28px] leading-[1em] whitespace-nowrap"
                  style={{ fontFamily: 'DungGeunMo' }}
                >
                  성격
                </span>
                <div className="flex-1 bg-white border-[1.5px] border-[#18181B] rounded px-2 py-1">
                  <span
                    className="text-black text-lg font-semibold"
                    style={{ fontFamily: 'Pretendard' }}
                  >
                    소심함, 감정 과몰입,
                    <br />
                    인정 욕구, 관계 중심 정서
                  </span>
                </div>
              </div>

              {/* 특징 */}
              <div className="flex items-center gap-5 w-full">
                <span
                  className="text-[#18181B] text-[28px] leading-[1em] whitespace-nowrap"
                  style={{ fontFamily: 'DungGeunMo' }}
                >
                  특징
                </span>
                <div className="flex-1 bg-white border-[1.5px] border-[#18181B] rounded px-2 py-1">
                  <span
                    className="text-black text-lg font-semibold"
                    style={{ fontFamily: 'Pretendard' }}
                  >
                    특징 설명
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 하단 버튼 */}
        <div className="w-full max-w-sm px-3 pb-0">
          <CharacterSelectButton />
        </div>
      </div>
    </div>
  );
}

export default Characters;
