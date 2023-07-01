import { Video, staticFile } from 'remotion';
import { Cc } from './CC';

export const MyComposition = () => {
  return (
    <>
      <Video
        src={staticFile('v.mp4')}
        style={{ margin: '0 auto', width: 1280, height: 720 }}
      />
      <Cc />
    </>
  );
};
