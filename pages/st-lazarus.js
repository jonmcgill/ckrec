import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/stlazarus';

export default function StLazarusMission() {
  return (
    <Page title="St. Lazarus Mission">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
