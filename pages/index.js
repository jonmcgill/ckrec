import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Page from '../components/Page';
import util from '../shared/util';

import { fonts, colors } from '../shared/styles';
import { services } from '../content/services';

export default function Index() {
  return (
    <Page isHome>
      <PageContent bg="rgba(255,255,255,0.95)" center id="services">
        <h2>Weekly Services</h2>
        <LineBreak color={util.theme().accent} />
        <Space y="30px" />
        {services.map(serv =>
          <Service key={serv.day} {...serv} />
        )}
      </PageContent>
    </Page>
  )
}


function Service({ day, services }) {
  return (
    <div>
      <h3>{day}</h3>
      <ul>
        {services.map(serv =>
          <li key={serv.name}>
            <span>{serv.name}</span>
            <span>{serv.time}</span>
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

        li {
          display: flex;
          margin: 0 !important;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}