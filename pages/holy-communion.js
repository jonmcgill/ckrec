import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { Content } from '../content/communion';

export default function HolyCommunionWalkthrough() {
  return (
    <Page title="Holy Communion: A Summary">
      <PageContent>
        <Md>{Content}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}