import { colors, fonts } from '../shared/styles';

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

        .page-content p {
          font-family: ${fonts.sans};
          font-size: 18px;
          line-height: 1.6;
          margin-bottom: 30px;
        }
      `}</style>
    </>
  )
}