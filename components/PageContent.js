import { colors, fonts } from '../shared/styles';

export default function PageContent({ bg, children, center }) {
  return (
    <>
      <section className="page-content">
        {children}
      </section>
      <style jsx global>{`
        .page-content {
          background: ${bg};
          padding: 60px 30px;
          position: relative;
          z-index: 3;
          color: ${colors.black};
          text-align: ${center ? 'center' : 'left'};
        }

        .page-content h2 {
          font-family: ${fonts.serif};
          margin-bottom: 30px;
        }
      `}</style>
    </>
  )
}