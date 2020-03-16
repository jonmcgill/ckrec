import Page from '../components/Page';
import PageContent from '../components/PageContent';

export default function REC() {
  return (
    <Page title="The Reformed Episcopal Church">
      <PageContent>
        <p>
          <img src="/img/rec-logo.jpg" alt="REC Logo" />
          Built upon the foundation of the authoritative Word of God, the Holy Scriptures,
          the <a href="http://www.recus.org" target="_blank">Reformed Episcopal Church</a> sets
          her highest priority on biblical worship and declares her
          commitment to the work of evangelism, the bold and unadulterated proclamation of salvation
          by grace through faith in the Lord Jesus Christ (Acts 8:4). In keeping the faith once
          delivered to the saints, the Reformed Episcopal Church, however, does not believe
          evangelism to be the end, but rather the beginning of her divinely given vocation.
        </p>
        <p>
          In addition to being evangelical, she is deeply committed to discipleship, the work of
          training evangelized men and women in Christian living (St. Matthew 28:20). When the Gospel
          is truly proclaimed and the mercies of God are made known, redeemed men and women must be
          led to offer their bodies as a living sacrifice, which is their spiritual service
          (Romans 12:1). Thus, the Reformed Episcopal Church understands the Christian life to be
          necessarily corporate. The Gospel call of salvation is not only to a savior, but also to
          a visible communion (I Cor.12:27) which, being indwelt by Christ’s Spirit, transcends
          both temporal and geographic bounds.
        </p>
        <p>
          Therefore, the Reformed Episcopal Church is creedal, following the historic catholic faith
          as it was confessed by the early undivided Church in the Apostles’ (A.D. 150), Nicene
          (A.D. 325) and Athanasian Creeds (circa. A.D. 401); sacramental, practicing the divinely
          ordained sacraments of Baptism and the Lord’s Supper as outward and visible signs of His
          inward and spiritual grace; liturgical, using the historic Book of Common Prayer; and
          Episcopal, finding unity with the Church of the earliest Christian eras through submission
          to the government of godly bishops.
        </p>
        <p>
          In this fashion, by embracing the broad base of doctrine and practice inherent in apostolic
          Christianity received by the Church of the English Reformation and expressed in the
          Thirty-Nine Articles of Religion, the Reformed Episcopal Church has a foundation for effective
          ministry in the name of Christ to a world which is lost and dying without Him.
        </p>
        <p>
          <em>Approved, General Committee, October 5, 2003</em>
        </p>
        <style jsx>{`
          img {
            float: left;
            margin-right 18px;
            border-radius: 2px;
            width: 40%;
            max-width: 100px;
          }
        `}</style>
      </PageContent>
    </Page>
  )
}
