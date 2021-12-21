import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/sundayschool';

export default function SundaySchool() {
  return (
    <Page title="Sunday School">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}