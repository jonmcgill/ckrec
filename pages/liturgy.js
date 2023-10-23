import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Cross from '../components/Cross';
import Md from '../components/Md'
import { LiturgyContent, Image } from '../content/liturgy';

export default function Liturgy() {
  return (
    <Page title="Liturgical Worship">
      <PageContent>
        <img src={Image} />
        <Md>{LiturgyContent}</Md>
        <Cross />
      </PageContent>
    </Page>
  )
}