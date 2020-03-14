import util from '../shared/util';

export default function PageBackground() {
  return (
    <>
      <div className="bg" />
      <style jsx>{`
        .bg {
          background-image: url("${util.background()}");
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