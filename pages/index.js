import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Page from '../components/Page';
import ServiceTimes from '../components/ServiceTimes';
import Md from '../components/Md'
import util from '../shared/util';
import { VirtualServices } from '../content/services';
import { content } from '../content/content'

export default function Index() {
  return (
    <Page isHome>
      <PageContent center>
        <img src={content.Home.contentImage} />
        <main id="services">
          {content.SpecialServices.filter((s) => s.show).map((s) => (
            <div key={s.title}>
              <h2>{s.title}</h2>
              <LineBreak color={util.theme().accent} />
              <Space y="20px" />
              {s.items.filter((serv) => serv.show).map((serv) => (
                <ServiceTimes
                  active
                  key={serv.day}
                  day={serv.day}
                  date={serv.date}
                  services={serv.events}
                />
              ))}
              <Space y="40px" />
            </div>
          ))}
          <h2>Weekly Services</h2>
          <LineBreak color={util.theme().accent} />
          <Space y="20px" />
          {content.WeeklyServices.map((serv) => (
            <ServiceTimes
              active
              key={serv.day}
              day={serv.day}
              date={serv.date}
              services={serv.events}
            />
          ))}
          <Space y="40px" />
          <Md>{VirtualServices}</Md>       
        </main>
        <style jsx>{`
          h2 {
            margin-top: 0 !important;
          }

          main div {
            margin-top: 20px;
          }
        `}</style>
      </PageContent>
    </Page>
  )
}