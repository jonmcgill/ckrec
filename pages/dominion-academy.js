import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/dominion';

export default function DominionAcademy() {
  return (
    <Page title="Dominion Academy">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
