import Logo from './Logo';
import { colors, fonts } from '../shared/styles';

export default function PageTitle() {
  return (
    <header>
      <Logo color="amber" />
      <h1>
        <span>Christ the King</span>
        <span>Anglican Church</span>
      </h1>
      <hr />
      <p>
        Preserving, teaching, and living the historic Christian faith in
        communion with other branches of Christ’s Church to advance His Kingdom in all the earth.
      </p>
      <style jsx>{`
        header {
          color: white;
          height: 100vh;
          padding: 20px;
          padding-top: 25vh;
          position: relative;
          text-align: center;
          z-index: 3;
          background: rgba(0, 46, 16, 0.8);
          width: 100%;
        }

        h1 {
          font-family: ${fonts.serif};
          line-height: 1.1;
          padding: 20px 0;
        }

        h1 span {
          display: block;
        }

        hr {
          width: 40%;
          max-width: 400px;
          border: none;
          border-bottom: 2px solid ${colors.amber};
        }

        p {
          margin: 20px auto 0;
          font-family: ${fonts.sans};
          line-height: 1.6;
          max-width: 400px;
        }
      `}</style>
    </header>
  )
}