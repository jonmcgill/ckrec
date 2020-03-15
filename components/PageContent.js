import { colors, fonts } from '../shared/styles';
import util from '../shared/util';

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
          max-width: 600px;
          margin: 0 auto;
        }

        .page-content h2 {
          font-family: ${fonts.serif};
          margin-bottom: 30px;
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
        }
      `}</style>
    </>
  )
}