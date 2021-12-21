import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/nls';

export default function NoLongerStrangers() {
  return (
    <Page title="No Longer Strangers">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
