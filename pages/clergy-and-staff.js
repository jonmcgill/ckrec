import Page from '../components/Page';
import PageContent from '../components/PageContent';

export default function ClergyAndStaff() {
  return (
    <Page title="Clergy and Staff">
      <PageContent>
        <h2>Bishop</h2>
        <p>
          <img src="/img/bp-manto.png" alt="Peter Manto, Bishop Ordinary" />The Rt. Rev. Peter Manto
          is rector of Trinity Church and Bishop Ordinary of the REC's Diocese of the Central States. Bp.
          Manto has been a parish pastor for over 40 years. He was the church-planter for the
          non-denominational church which became Trinity Church and guided its move into the Reformed
          Episcopal Church. Bp. Manto has been married to his wife Janice for over 40 years. They have
          four adult children and 13 grandchildren.
        </p>
        <h2>Parish Rector</h2>
        <p>
          <img src="/img/fr-wayne.png" alt="Wayne McNamara, Parish Rector" />Fr. Wayne became rector
          of Christ the King in 1992 after 12 years of serving in special education. He was ordained
          in 1998 by the Association of Independent Covenant Churches and was received as a Presbyter
          in the Reformed Episcopal Church in 2000. He currently serves on the boards of the Children's
          Hunger Relief Fund, St. Lazarus Mission, and the Huffman Historic Neighborhood Association. In
          1998, Fr. Wayne co-founded Dominion Academy of Dayton where he serves as Priest-in-Charge. His
          scholarly interests lie in liturgics, Anglican studies, and the Christian ascetical tradition,
          and in 2015, he was accepted as an oblate by the Order of Saint Benedict. Fr. Wayne has four
          children and four grandchildren and lives with his wife, Sandy.
        </p>
        <h2>Parish Staff</h2>
        <ul>
          <li>Jenny Downey, Parish Administrator</li>
          <li>Amanda McGill, Music Director</li>
        </ul>
        <h2>Parish Council</h2>
        <ul>
          <li>Fr. Wayne McNamara, Rector</li>
          <li>Jeremy Downey, Junior Warden</li>
          <li>Mike McDermott, Senior Warden</li>
        </ul>
        <h2>Parish Vestry</h2>
        <ul>
          <li>Jeremy Downey, Junior Warden</li>
          <li>Mike McDermott, Senior Warden</li>
          <li>Dan Hack, Treasurer</li>
          <li>Rick Teachey, Sexton</li>
          <li>Joshua Abernathy, Secretary</li>
          <li>Deepika McNamara</li>
          <li>Tim Dana</li>
          <li>James Hoffman</li>
          <li>Lauren Hilyer</li>
        </ul>
        <style jsx>{`
          img {
            float: left;
            margin-right: 18px;
            border-radius: 2px;
            width: 40%;
            max-width: 150px;
          }

          li {
            margin-bottom: 8px !important;
          }
        `}</style>
      </PageContent>
    </Page>
  )
}
