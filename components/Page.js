import PageBackground from './PageBackground';
import PageHeading from './PageHeading';
import Footer from './Footer';
import NavigationBar from './NavigationBar';

export default function Page({ children, isHome, title }) {
  return (
    <>
      <NavigationBar />
      <PageBackground />
      <PageHeading isHome={isHome} title={title} />
      {children}
      <Footer />
    </>
  )
}