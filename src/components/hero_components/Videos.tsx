

export function HeroVideo(src: any) {
    return (
      <video preload="none" autoPlay loop muted playsInline >
        <source src='/home/videos/Comp 1_1.mp4' type="video/mp4" />
        {/* <source src={src} src='/home/videos/Comp 1_1.mp4' type="video/mp4" /> */}
        Your browser does not support the video tag.
      </video>
    )
  }