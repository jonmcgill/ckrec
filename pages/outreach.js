import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/outreach';

export default function Outreach() {
  return (
    <Page title="Outreach">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
