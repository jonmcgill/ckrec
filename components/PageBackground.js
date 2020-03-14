// TODO: add theming for different seasons
export default function PageBackground() {
  return (
    <>
      <div className="bg" />
      <style jsx>{`
        .bg {
          background-image: url("https://enacademic.com/pictures/enwiki/70/Florentinischer_Meister_um_1300_001.jpg");
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          position: fixed;
          top: 0px;
          left: 0px;
          height: 100vh;
          width: 100%;
          z-index: 1;
        }
      `}</style>
    </>
  )
}