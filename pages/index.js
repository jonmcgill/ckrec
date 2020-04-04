import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Page from '../components/Page';
import SpecialService from '../components/SpecialSevice';
import util from '../shared/util';
import { fonts, colors } from '../shared/styles';
import { services, specialServices } from '../content/services';

export default function Index() {
  return (
    <Page isHome>
      <PageContent bg="rgba(255,255,255,0.95)" center id="services">
        <h2>Holy Week and Easter</h2>
        <LineBreak color={util.theme().accent} />
        <Space y="30px" />
        <main>
          {/* <p>
            <em>
              In obedience to our bishop and in compliance with <a href="https://coronavirus.ohio.gov/wps/wcm/connect/gov/81a5ce67-eeb6-4c29-861f-f2996160f028/Director%27s+Order+--+Stay+At+Home+03.22.20R.pdf?MOD=AJPERES&CONVERT_TO=url&CACHEID=ROOTWORKSPACE.Z18_M1HGGIK0N0JO00QO9DDDDM3000-81a5ce67-eeb6-4c29-861f-f2996160f028-n43OTq8" target="_blank">Ohio's Public Health Stay at Home Order</a>, we will be cancelling all regular services until futher directed.
              Please check back regularly for updates on when we will resume. If you have any questions, please email us.
            </em>
          </p>
          <div>
            <a href="http://www.recus.org/covid19-response.html" target="_blank">
              Read Bishop Sutton's Letter Here
            </a>
          </div> */}
          {specialServices.map(data =>
            <SpecialService key={data.time} {...data} />
          )}
          {/* {services.map(serv =>
            <Service key={serv.day} {...serv} />
          )} */}
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