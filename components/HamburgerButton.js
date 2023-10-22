import util from '../shared/util';

export default function HamburgerButton({ onClick }) {
  return (
    <>
      <button onClick={onClick}>
        <span />
      </button>
      <style jsx>{`
        button {
          appearance: none;
          border: none;
          cursor: pointer;
          padding: 0;
          margin-left: 8px;
          width: 46px;
          height: 46px;
          background: transparent;
          z-index: 1;
        }

        button span {
          display: block;
          height: 2px;
          background: ${util.theme().text};
          position: relative;
          width: 26px;
        }

        button span:before,
        button span:after {
          content: "";
          display: block;
          position: relative;
          height: 2px;
          background: ${util.theme().text};
        }

        button span:after {
          bottom: -6px;
        }

        button span:before {
          top: -8px;
        }
      `}</style>
    </>
  )
}