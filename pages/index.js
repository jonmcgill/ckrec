import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Page from '../components/Page';
import SpecialService from '../components/SpecialSevice';
import ServiceTimes from '../components/ServiceTimes';
import util from '../shared/util';
import { services, specialServices } from '../content/services';

const addServices = false;
const addSpecial = true;

export default function Index() {
  return (
    <Page isHome>
      <PageContent bg="rgba(255,255,255,0.95)" center id="services">
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
          {addSpecial && (
            <>
              <h2>Upcoming Services</h2>
              <LineBreak color={util.theme().accent} />
              <Space y="30px" />
              {specialServices.map(data =>
                <SpecialService key={data.time} {...data} />
              )}
            </>
          )}
          {addServices && (
            <>
              <h2>Weekly Services</h2>
              <LineBreak color={util.theme().accent} />
              <Space y="30px" />
              {services.map(serv =>
                <ServiceTimes active key={serv.day} {...serv} />
              )}
            </>
          )}
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