import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Container, TitleHeader } from 'styles'
import {
  FirstImage,
  SecondImage,
  ThirdImage,
  FourthImage,
  SectionWrapper,
  TextWrapper,
} from './style'
import { Parallax } from 'components'
import { gsap } from 'gsap'
import { useWindowSize } from 'hooks'

const About = () => {
  let trigger = useRef()
  let timeline = useRef()
  let imageRef = useRef([])
  const { width: windowWidth } = useWindowSize()

  useEffect(() => {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        scrub: true,
        start: 'center top',
        end: 'bottom center',
      },
    })

    let changeBg = gsap.utils.toArray('#change-bg')

    changeBg.forEach((el) => {
      tl.fromTo(
        el,
        { backgroundColor: 'rgb(251, 251, 251)' },
        { backgroundColor: 'rgb(1, 20, 223)' },
        0
      )
    })

    imageRef.current.forEach((image) => {
      tl.to(image, { opacity: 0 }, 0)
    })
  }, [])

  return (
    <SectionWrapper id="change-bg" ref={trigger}>
      <Container>
        <TextWrapper>
          <TitleHeader className="about-text">
            a Gen Z podcast company focused on capturing the conversations that
            comfort you and making them available when you need them the most
          </TitleHeader>
        </TextWrapper>
        <FirstImage ref={(el) => (imageRef.current[0] = el)}>
          <Parallax speed={-1.5} trigger={trigger}>
            <Image
              src="/images/blue.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </FirstImage>
        <SecondImage ref={(el) => (imageRef.current[1] = el)}>
          <Parallax speed={0.5} trigger={trigger}>
            <Image
              src="/images/red.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </SecondImage>
        <ThirdImage ref={(el) => (imageRef.current[2] = el)}>
          <Parallax speed={-1.5} trigger={trigger}>
            <Image
              src="/images/purple.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </ThirdImage>
        <FourthImage ref={(el) => (imageRef.current[3] = el)}>
          <Parallax speed={-1} trigger={trigger}>
            <Image
              src="/images/pink.png"
              alt="what does getting cheated on feel like?"
              quality={90}
              fill
            />
          </Parallax>
        </FourthImage>
      </Container>
    </SectionWrapper>
  )
}

export default About
