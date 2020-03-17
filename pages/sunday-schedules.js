import Page from '../components/Page';
import PageContent from '../components/PageContent';

export default function SundaySchedules() {
  return (
    <Page title="Sunday Schedules">
      <PageContent>
        <a href="https://docs.google.com/document/d/1dsi4vmeYla4vL-bm4FzhjjZGae9ezdBWmodXv3_ot1Y/edit?usp=sharing" target="_blank">
          Nursery Schedule
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1JnDYiy0ejFsQAtmEpinx5m11xVGeB0Q-MbzavlxAFsI/edit" target="_blank">
          Tellers
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1sR_9jTYm9DYmzo5DvlTG8jxXeFoiDH03-cJ5h8d1OyU/edit" target="_blank">
          Greeters
        </a>
        <br />
        <a href="https://docs.google.com/document/d/1BtE5q4qYOQ2YDwMiHl8dTQmh7DYM_XCJTpjbuWEVgrQ/edit?usp=sharing" target="_blank">
          Acolytes/Lector
        </a>
        <br />
        <a href="http://lazarusmission.org/ministry/volunteer-page/" target="_blank">
          St. Lazarus Mission
        </a>
        <style jsx>{`
          a {
            line-height: 2;
          }
        `}</style>
      </PageContent>
    </Page>
  )
}
