import { colors, fonts } from '../shared/styles';

export default function ServiceTimes({ active, day, date, services }) {
  if (!active) return false;

  return (
    <div>
      <section>
        <h3>{day}</h3>
        {date && <strong>{date}</strong>}
      </section>
      <ul>
        {services.map(serv =>
          <li key={serv[0]}>
            <span>{serv[0]}</span>
            <span>{serv[1]}</span>
          </li>
        )}
      </ul>
      <style jsx>{`
        div {
          text-align: left;
          font-family: ${fonts.sans};
          color: ${colors.black};
          margin: 0 auto;
          max-width: 400px;
        }

        h3 {
          font-size: 16px;
          font-weight: bold;
        }

        ul {
          margin: 7px 0px 40px;
        }

        section,
        li {
          display: flex;
          margin: 0 !important;
          justify-content: space-between;
        }

        @media screen and (min-width: 800px) {
          div {
            max-width: 600px;
          }

          h3 {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  )
}