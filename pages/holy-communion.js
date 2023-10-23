import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { Content, Image } from '../content/communion';

export default function HolyCommunionWalkthrough() {
  return (
    <Page title="Holy Communion: A Summary">
      <PageContent>
        <img src={Image} />
        <Md>{Content}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}