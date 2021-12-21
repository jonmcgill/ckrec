import Page from '../components/Page';
import PageContent from '../components/PageContent';
import Md from '../components/Md'
import { StaffContent } from '../content/staff'

export default function ClergyAndStaff() {
  return (
    <Page title="Clergy and Staff">
      <PageContent>
        <Md>{StaffContent}</Md>
      </PageContent>
    </Page>
  )
}
