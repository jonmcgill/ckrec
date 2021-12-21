import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/rec';

export default function REC() {
  return (
    <Page title="The Reformed Episcopal Church">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
