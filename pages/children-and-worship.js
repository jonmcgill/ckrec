import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { ChildrenAndWorshipContent, Image } from '../content/children';

export default function ChildrenAndWorship() {
  return (
    <Page title="Children and Worship">
      <PageContent>
        <img src={Image} />
        <Md>{ChildrenAndWorshipContent}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}