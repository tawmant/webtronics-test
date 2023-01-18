import React, { useRef } from 'react'
import st from './Footer.module.scss'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  const socialMediaRef = useRef([
    {
      src: '/images/svg/social-media/facebook.svg',
      href: 'https://portfolio-tawmant-work.vercel.app/',
      alt: 'facebook icon',
      width: 12,
      height: 22,
    },
    {
      src: '/images/svg/social-media/gitlab.svg',
      href: 'https://gitlab.com/tawmant',
      alt: 'gitlab icon',
      width: 24,
      height: 24,
    },
    {
      src: '/images/svg/social-media/twitter.svg',
      href: 'https://portfolio-tawmant-work.vercel.app/',
      alt: 'twitter icon',
      width: 24,
      height: 24,
    },
    {
      src: '/images/svg/social-media/linkedin.svg',
      href: 'https://www.linkedin.com/in/tawmant/',
      alt: 'linkedin icon',
      width: 23,
      height: 22,
    },
  ])
  return (
    <footer id="footer" className={st.footer}>
      <div className={st.container}>
        <div className={st.row}>
          <div className={st.left}>
            <Image
              src="/images/svg/logo.svg"
              alt="logo"
              width={169}
              height={33}
            />
            <p className={st.leftDescription}>
              Wisconsin Ave, Suite 700 Chevy Chase, Maryland 20815
            </p>
          </div>

          <div className={st.center}>
            <h4 className={st.footerTitle}>Company</h4>
            <div className={st.row}>
              <div className={st.centerLeft}>
                <Link href="/#about-us" passHref scroll={false}>
                  <p className="text">About Us</p>
                </Link>
                <Link href="/#steps" passHref scroll={false}>
                  <p className="text">Steps</p>
                </Link>
                <Link href="/#FAQ" passHref scroll={false}>
                  <p className="text">FAQs</p>
                </Link>
              </div>
              <div className={st.centerRight}>
                <Link href="/#review" passHref scroll={false}>
                  <p className="text">Review</p>
                </Link>
                <Link href="/#gallery" passHref scroll={false}>
                  <p className="text">Gallery</p>
                </Link>
              </div>
            </div>
          </div>

          <div className={st.right}>
            <h4 className={st.footerTitle}>Social media</h4>
            <div className={st.row}>
              {socialMediaRef.current.map((socialMediaItem) => (
                <Link
                  key={socialMediaItem.src}
                  href={socialMediaItem.href}
                  target="_blank"
                >
                  <Image {...socialMediaItem} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
