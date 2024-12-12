import React, { useRef, useState } from "react";

const Hero = () => {
  const [currentVideo, setCurrentVideo] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideoCount = 4;
  const nextVidRef = useRef(null);
  const upcomingVideoIndex = (currentVideo % totalVideoCount) + 1;
  const handleMiniVideoClick = () => {
    setHasClicked(true);
    setCurrentVideo((prev)=>(prev%totalVideoCount)+1);
  };
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  return (
    <div className="relative h-dvh w-screen overflow-x-hidden">
      <div
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
        id="video-frame"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVideoClick}
              className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVidRef}
                loop
                src={getVideoSrc((currentVideo % totalVideoCount) + 1)}
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVidRef}
            src={getVideoSrc(currentVideo)}
            loop
            muted
            id="next-video"
            className="absolute-center absolute invisible z-20 size-64 object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
          <video
            ref={nextVidRef}
            src={getVideoSrc(
              currentVideo === totalVideoCount - 1 ? 1 : currentVideo
            )}
            loop
            muted
            autoPlay
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-70">
          G<b>a</b>ming
        </h1>
      </div>
    </div>
  );
};

export default Hero;
