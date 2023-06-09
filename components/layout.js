import { useEffect } from 'react'
import { Lenis, useLenis } from '@studio-freight/react-lenis'
import Router from 'next/router'
import { CustomHead } from 'components'

export default function Layout({
  seo = { title: '', description: '', image: '', keywords: '' },
  children,
}) {
  const lenis = useLenis()

  useEffect(() => {
    function onHashChangeStart(url) {
      url = '#' + url.split('#').pop()
      lenis.scrollTo(url)
    }

    Router.events.on('hashChangeStart', onHashChangeStart)

    return () => {
      Router.events.off('hashChangeStart', onHashChangeStart)
    }
  }, [lenis])

  return (
    <>
      <CustomHead {...seo} />

      <Lenis root>{children}</Lenis>
    </>
  )
}
