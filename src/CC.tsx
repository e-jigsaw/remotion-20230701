import { Sequence } from 'remotion';

const FONT_FAMILY = 'SF Pro Text, Helvetica, Arial, sans-serif';
const scripts = [
  {
    t: '親メンチンしてしまった回',
    d: 100,
    s: 0,
  },
  {
    t: '微妙な配牌...',
    d: 100,
    s: 100,
  },
  {
    t: '中対々和になったら嬉しいかなあ',
    d: 100,
    s: 228,
  },
  {
    t: 'まあどうせ鳴くしいいかーのポン',
    d: 100,
    s: 603,
  },
  {
    t: 'ドラ8pこい!!',
    d: 100,
    s: 1321,
  },
  {
    t: 'はい...',
    d: 100,
    s: 1421,
  },
  {
    t: '中のみでもいいかー...',
    d: 100,
    s: 1600,
  },
  {
    t: 'まあツモるしかないわな',
    d: 100,
    s: 3657,
  },
  {
    t: '七対子みるか迷う手',
    d: 100,
    s: 4089,
  },
  {
    t: 'ん？？6s...??',
    d: 100,
    s: 4299,
  },
  {
    t: 'んん？？9s...???',
    d: 100,
    s: 4527,
  },
  {
    t: 'うーん暗刻かあ',
    d: 100,
    s: 5334,
  },
  {
    t: 'えーこれどうしたらいいんだ？',
    d: 100,
    s: 5541,
  },
  {
    t: 'まって竹ばっかりくる',
    d: 100,
    s: 5758,
  },
  {
    t: '間6s待ちだけどさすがにね',
    d: 100,
    s: 5974,
  },
  {
    t: 'どう仕上げればいいのか決めかねてる',
    d: 100,
    s: 6205,
  },
  {
    t: 'なるほど2,3sシャンポンでいく！',
    d: 100,
    s: 6421,
  },
  {
    t: 'さすがに親のこの河怖くない？',
    d: 100,
    s: 6637,
  },
  {
    t: 'しかし対面ドラ3だったんだなあ',
    d: 100,
    s: 6759,
  },
  {
    t: '掴んじまったなあ...',
    d: 100,
    s: 6956,
  },
  {
    t: '放銃して開けてこれだったら泣いちゃう',
    d: 100,
    s: 7056,
  },
  {
    t: '裏のんなかったけど倍満十分！',
    d: 100,
    s: 7320,
  },
  {
    t: 'ごめんな...',
    d: 100,
    s: 7430,
  },
];

export const Cc: React.FC = () => {
  return (
    <>
      {scripts.map(({ t, d, s }, index) => (
        <Sequence key={index} durationInFrames={d} from={s}>
          <div
            style={{
              position: 'absolute',
              bottom: 120,
              textAlign: 'center',
              fontSize: 60,
              backgroundColor: '#bd3129',
              color: '#fff',
              fontWeight: 'bold',
              left: '50%',
              transform: 'translate(-50%,0)',
              padding: '10px 20px',
              fontFamily: FONT_FAMILY,
              zIndex: 999,
              width: '80vw',
            }}
          >
            {t}
          </div>
        </Sequence>
      ))}
    </>
  );
};
