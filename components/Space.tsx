interface ISpace {
  x?: string;
  y?: string;
}

export default function Space({ x, y }: ISpace) {
  return (
    <>
      <div />
      <style jsx>{`
        div {
          display: ${x ? 'inline-block' : 'block'};
          padding-top: ${y || 0};
          padding-left: ${x || 0};
        }
      `}</style>
    </>
  )
}