import { fonts } from '../shared/styles';

export default function GlobalStyles() {
  return (
    <style jsx global>{`
      ${fonts.import}

      * {
        box-sizing: border-box;
      }

      body, h1, h2, h3, h4, h5, h6, p, ul, ol {
        margin: 0;
        padding: 0;
      }

      li {
        list-style: none;
      }

      body.isNavOpen {
        overflow: hidden;
      }

      a {
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      ol {
        margin-left: 20px;
      }

      ol > li {
        list-style-type: decimal;
      }
    `}</style>
  )
}