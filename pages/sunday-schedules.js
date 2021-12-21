import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { Content } from '../content/schedules';

export default function SundaySchedules() {
  return (
    <Page title="Sunday Schedules">
      <PageContent>
        <Md>{Content}</Md>
      </PageContent>
    </Page>
  )
}
