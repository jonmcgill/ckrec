import { colors, fonts } from '../shared/styles';

interface IPageContent {
  children?: any;
  bg?: string;
  center?: boolean;
}

export default function PageContent({ bg, children, center }: IPageContent) {
  return (
    <>
      <section className="page-content">
        {children}
      </section>
      <style jsx global>{`
        .page-content {
          background: ${bg};
          padding: 60px 20px;
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