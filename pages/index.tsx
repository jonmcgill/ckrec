import GlobalStyles from '../components/GlobalStyles';
import PageBackground from '../components/PageBackground';
import PageTitle from '../components/PageTitle';
import PageContent from '../components/PageContent';
import LineBreak from '../components/LineBreak';
import Space from '../components/Space';

export default function Index() {
  return (
    <div>
      <GlobalStyles />
      <PageBackground />
      <PageTitle />
      <PageContent bg="rgba(255,255,255,0.9)" center>
        <h2>Weekly Services</h2>
        <LineBreak />
        <Space y="30px" />
        <p>Foo bar bam</p>
      </PageContent>
    </div>
  )
}