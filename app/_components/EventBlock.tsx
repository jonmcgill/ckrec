import { info, EventBlock } from '../_info'

function EventBlock(props: EventBlock) {
  if (!props.show) return null

  const items = props.items.filter((item) => item.show !== false)

  return (
    <section className="event-block">
      <h2 className="prim center">{props.title}</h2>
      <div className="center">
        <div className="line" />
      </div>
      {items.map((item) => (
        <div key={item.date} className="event-item">
          <div className="flex between">
            <span className="bold">{item.date || item.day}</span>
            <span className="bold">{item.date ? item.day : ''}</span>
          </div>
          {item.events.map((ev) => (
            <div key={ev.join('')} className="flex between thin">
              <span className={ev.length === 1 ? 'bold italic' : ''}>{ev[0]}</span>
              <span>{ev[1]}</span>
            </div>
          ))}
        </div>
      ))}
    </section>
  )
}

export function EventBlocks() {
  return (
    <>
      {info.events.map((ev) => (
        <EventBlock key={ev.title} {...ev} />
      ))}
    </>
  )
}
