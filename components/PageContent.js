import { colors, fonts } from '../shared/styles';
import util from '../shared/util';
import config from '../shared/config';

export default function PageContent({ bg, children, center, ...rest }) {
  return (
    <>
      <section className="page-content" {...rest}>
        <div>
          {children}
        </div>
      </section>
      <style jsx global>{`
        .page-content {
          background: ${bg || 'rgba(255,255,255,0.95)'};
          padding: 60px 30px;
          position: relative;
          z-index: 3;
          color: ${colors.black};
          text-align: ${center ? 'center' : 'left'};
        }

        .page-content > div {
          max-width: ${config.contentMaxWidth};
          margin: 0 auto;
        }

        .page-content h2 {
          font-family: ${fonts.serif};
          margin: 50px 0 30px;
        }

        .page-content h2:first-child {
          margin-top: 0;
        }

        .page-content p,
        .page-content li {
          font-family: ${fonts.sans};
          font-size: 16px;
          line-height: 1.7;
          margin-bottom: 30px;
        }

        .page-content li {
          list-style: disc;
          margin-left: 22px;
        }

        .page-content a {
          color: ${util.theme().accent};
          font-family: ${fonts.sans};
        }

        @media screen and (min-width: 800px) {
          .page-content {
            padding: 80px 30px;
          }

          .page-content p,
          .page-content li {
            font-size: 18px;
            line-height: 1.9;
          }

          .page-content h2 {
            font-size: 28px;
            margin: 70px 0 30px;
          }
        }
      `}</style>
    </>
  )
}