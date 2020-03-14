import GlobalStyles from '../components/GlobalStyles';
import PageBackground from '../components/PageBackground';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Footer from '../components/Footer';

import { fonts, colors } from '../shared/styles';
import { services } from '../content/services';

export default function Index() {
  return (
    <div>
      <GlobalStyles />
      <PageBackground />
      <PageTitle />
      <PageContent bg="rgba(255,255,255,0.95)" center>
        <h2>Weekly Services</h2>
        <LineBreak />
        <Space y="30px" />
        {services.map(serv =>
          <Service key={serv.day} {...serv} />
        )}
      </PageContent>
      <Footer />
    </div>
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
          max-width: 600px;
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
          line-height: 1.7;
          justify-content: space-between;
        }
      `}</style>
    </div>
  )
}