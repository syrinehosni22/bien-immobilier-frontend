export default function agencePresentaion() {
  return (
    <>
      <div className="video-container">
        <video className="video" autoPlay muted>
          <source src="video.mp4" type="video/mp4" />
        </video>
      </div>
    </>
  );
}
