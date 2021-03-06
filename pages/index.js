import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';
import Page from '../components/Page';
import SpecialService from '../components/SpecialSevice';
import ServiceTimes from '../components/ServiceTimes';
import util from '../shared/util';
import { services, specialServices, holyWeek } from '../content/services';

const addServices = false;
const addSpecial = false;
const isHolyWeek = true;
const signupLink = 'https://ckrec.us10.list-manage.com/track/click?u=3ac737087baab366987bd82d2&id=163cc3391f&e=a177249b3e'

export default function Index() {
  return (
    <Page isHome>
      <PageContent bg="rgba(255,255,255,0.95)" center id="services">
        <main>
          {isHolyWeek && (
            <>
            <h2>Holy Week Services</h2>
            <LineBreak color={util.theme().accent} />
            <Space y="30px" />
            {holyWeek.map(data =>
              <SpecialService key={data.time} {...data} />
            )}
          </>
          )}
          {/* <h2>In-Person Services</h2>
          <p>
            We currently offer two Holy Communion services on Sunday mornings. The 9:00 AM service is a said service (no singing)
            and the 10:00 AM service has limited singing. Both services have limited seating. If you plan to attend,
            please <a href={signupLink} target="_blank">sign up</a> before Sunday morning so we are able to prepare the elements accordingly.
          </p> */}

          <p>
            As an act of love towards your neighbor we ask that you please observe the following guidelines while attending our in-person gatherings:
          </p>
          <ol>
            <li>
              Please wear a mask during the service (exceptions for small children or if  you have a medical condition)
            </li>
            <li>
              Sit together with your family leaving one pew between you and the next person
            </li>
            <li>
              Please observe strict social distancing (six feet) including while entering, exiting, and any fellowship in
              the building afterwards. Everyone is encouraged to fellowship outside after the services
            </li>
            <li>
              If you or a member of your household is sick, please refrain from coming to the service that week
            </li>
          </ol>
          <h2>Virtual Services</h2>
          <p>
            If you are unable to join us at the sanctuary, you can participate in
            a live stream of the service over <a href="https://zoom.us/download" target="_blank">Zoom</a>.
          </p>
          <ol>
            <li>Make sure you have the Zoom client installed on your device</li>
            <li>Request a meeting password from <a href="mailto:info@ctkdayton.org">info@ctkdayton.org</a></li>
            <li>On Sunday morning, <a href="https://us02web.zoom.us/j/83954661868" target="_blank">join the virtual service</a></li>
          </ol>
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

          main p,
          main ol {
            text-align: left;
          }

          ol {
            padding-left: 20px;
          }

          ol li {
            list-style-type: decimal;
          }
        `}</style>
      </PageContent>
    </Page>
  )
}