import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { ChildrenAndWorshipContent } from '../content/children';

export default function ChildrenAndWorship() {
  return (
    <Page title="Children and Worship">
      <PageContent>
        <Md>{ChildrenAndWorshipContent}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}