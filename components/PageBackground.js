import { content } from '../content/content'
import util from '../shared/util';

export default function PageBackground() {
  return (
    <>
      <div className="bg" />
      <style jsx>{`
        .bg {
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

        @media screen and (max-width: 500px) {
          .bg {
            background-image: url("${content.BackgroundImg.mobile}");
          }
        }

        @media screen and (min-width: 501px) {
          .bg {
            background-image: url("${content.BackgroundImg.desktop}");
          }
        }
      `}</style>
    </>
  )
}