import util from '../shared/util';

export default function Cross() {
  return (
    <>
      <div>&#9841;</div>
      <style jsx>{`
        div {
          text-align: center;
          color: ${util.theme().accent};
          font-size: 30px;
        }
      `}</style>
    </>
  )
}