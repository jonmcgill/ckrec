import PageBackground from './PageBackground';
import PageHeading from './PageHeading';
import Footer from './Footer';

export default function Page({ children, isHome, title }) {
  return (
    <>
      <PageBackground />
      <PageHeading isHome={isHome} title={title} />
      {children}
      <Footer />
    </>
  )
}