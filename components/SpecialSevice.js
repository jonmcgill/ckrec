import { fonts } from '../shared/styles';

export default function SpecialService({ title, time, link }) {
  return (
    <section>
      <h3>{title}</h3>
      <p>
        <em>{time}</em>
      </p>
      {link && (
        <a href={link} target="_blank">
          Join the Zoom Meeting
        </a>
      )}
      <style jsx>{`
        section {
          margin-bottom: 40px;
        }

        section h3 {
          font-family: ${fonts.serif};
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 6px;
        }

        section p {
          font-size: 15px;
          margin-bottom: 6px;
        }
      `}</style>
    </section>
  )
}