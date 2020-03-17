import { colors } from '../shared/styles';

export default function LineBreak({ color = 'amber' }) {
  return (
    <>
      <hr />
      <style jsx>{`
        hr {
          width: 40%;
          max-width: 200px;
          border: none;
          border-bottom: 2px solid ${colors[color] || color};
        }
      `}</style>
    </>
  )
}