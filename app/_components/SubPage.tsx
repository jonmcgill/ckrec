import Link from 'next/link'
import { Logo } from './Logo'
import { getContentMarkdown } from '../util'
import { cssClasses } from '../utilClient'
import './cssSubPage.css'

type SubPageProps = {
  title: string
  metaUrl: string
  noFirstLetter?: boolean
}

export default async function SubPage(props: SubPageProps) {
  const { htmlContent } = await getContentMarkdown(props.metaUrl)
  const css = cssClasses({
    'sub-page-main': true,
    'first-letter': !props.noFirstLetter,
  })

  return (
    <>
      <header className="sub-page-header">
        <div className="sub-page-hero">
          <div className="inner">
            <Link href="/">
              <Logo shadow />
            </Link>
            <h1 className="prim text-light text-shadow">
              {props.title}
            </h1>
            <div className="line" />
            <div />
            <span className="cross text-light text-shadow">
              ♱
            </span>
          </div>
        </div>
      </header>
      <main className={css}>
        <section
          className="content-wrap has-links-dark"
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
        <div className="cross">♱</div>
      </main>
    </>
  )
}