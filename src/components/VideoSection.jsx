const VideoSection = () => {
  return (
    <section className="w-full bg-white py-12 px-4 md:px-0">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-[1440px]">
          <div className="relative w-full aspect-video overflow-hidden rounded-md shadow-md">
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              controls // allows mute/playback control
              playsInline
              poster="/img/video-poster.jpg"
            >
              <source src="/img/WordHopeLandingPage.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
