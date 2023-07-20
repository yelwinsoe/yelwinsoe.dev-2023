'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import { Link as SLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import GitHubCalendar from 'react-github-calendar'

import {
  Container,
  Row,
  Col,
  Button,
  ProgressBar
} from 'react-bootstrap'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link'

export default function Home() {

  // Restrict value to be between the range [0, value]
  const clamp = (value: number) => Math.max(0, value);

  // Check if number is between two values
  const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const ids = ['about', 'contributions', 'skills', 'experiences', 'portfolio']
    const offset = 100
    const listener = () => {
      const scroll = window.scrollY;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      // console.log(position?.id)
      if (position?.id) {
        setActiveId(position?.id)
      }
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [])

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <div>
            <Row>
              <Col md={4} className={styles.leftCol}>
                <h2 className={styles.name}>Ye Lwin Soe</h2>
                <p className='fs-4'>Senior Software Engineer</p>
                <br />
                <p>
                  Build web stuff, frontend/backend/fullstack dev. Interested in Web3, ML/DL, sometimes too many interest.
                </p>
                <br />
                <div className="d-grid gap-3">
                  <SLink to='about'>
                    <Button className={activeId === 'about' ? styles.activeTab : 'text-secondary'}>About</Button>
                  </SLink>
                  <SLink to='contributions'>
                    <Button className={activeId === 'contributions' ? styles.activeTab : 'text-secondary'}>Contributions</Button>
                  </SLink>
                  <SLink to='skills'>
                    <Button className={activeId === 'skills' ? styles.activeTab : 'text-secondary'}>Skills</Button>
                  </SLink>
                  <SLink to='experiences'>
                    <Button className={activeId === 'experiences' ? styles.activeTab : 'text-secondary'}>Experiences</Button>
                  </SLink>
                  <SLink to='portfolio'>
                    <Button className={activeId === 'portfolio' ? styles.activeTab : 'text-secondary'}>Portfolio</Button>
                  </SLink>
                </div>
                <br /><br /><br />
                <div>
                  <Link href='https://github.com/yelwinsoe' target='_blank'>
                    <Button variant='link'>
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'white' }} />
                    </Button>
                  </Link>
                  <Link href='https://www.linkedin.com/in/yelwinsoe/' target='_blank'>
                    <Button variant='link'>
                      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col className={styles.rightCol}>
                <div id="about">
                  <p>
                    Hi there! I&apos;m a full-stack web developer with 8 years of experience. I&apos;ve been working as a team lead since 2016, and I love building things that people can use. I&apos;m also a lifelong learner and I&apos;m always looking for new ways to improve my skills.
                  </p>
                  <p>
                    I&apos;m not one for stuffy introductions, so I&apos;ll just say this: I love coding. I love the challenge of solving problems and creating something from scratch. I also love the feeling of satisfaction when I see someone using something that I&apos;ve built.

                    If you&apos;re looking for someone who can build you a beautiful and functional website, I&apos;m your guy. But if you&apos;re also looking for someone who can be a fun and relaxed collaborator, then I&apos;m your guy too.
                  </p>
                  <p>I hope you&apos;ll take a look around my website and see what I&apos;m all about. And if you have any questions, please don&apos;t hesitate to reach out.</p>
                </div>
                <br />
                <h3 id='contributions' className='mb-4 text-white'>Contributions</h3>
                <div>
                  <GitHubCalendar username='yelwinsoe' colorScheme='dark' />
                </div>
                <br /><br />
                <h3 id='skills' className='mb-4 text-white'>Skills</h3>
                <div>
                  <Row>
                    <Col><p>Javascript / Typescript</p></Col>
                    <Col><ProgressBar now={90} /></Col>
                  </Row>
                  <Row>
                    <Col><p>NodeJs</p></Col>
                    <Col><ProgressBar now={90} /></Col>
                  </Row>
                  <Row>
                    <Col><p>ReactJs</p></Col>
                    <Col><ProgressBar now={90} /></Col>
                  </Row>
                  <Row>
                    <Col><p>Python / Flask</p></Col>
                    <Col><ProgressBar now={70} /></Col>
                  </Row>
                  <Row>
                    <Col><p>PHP / Laravel</p></Col>
                    <Col><ProgressBar now={60} /></Col>
                  </Row>
                  <Row>
                    <Col><p>MySql / Sql</p></Col>
                    <Col><ProgressBar now={80} /></Col>
                  </Row>
                  <Row>
                    <Col><p>HTML</p></Col>
                    <Col><ProgressBar now={90} /></Col>
                  </Row>
                  <Row>
                    <Col><p>CSS</p></Col>
                    <Col><ProgressBar now={90} /></Col>
                  </Row>
                </div>
                <br /><br />
                <h3 id='experiences' className='mb-3 text-white'>Experiences</h3>
                <Link href='https://findjobs.com.sg' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/companies/findjobs.png' width={60} height={60} alt='Findjobs logo' />
                        <div className={styles.expTitle}>
                          <small>July 2020 - Present</small><br />
                          <span className='text-white'>Senior Software Engineer - Team Lead</span><br />
                          <small>Findjobs Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>Lead a team of up to 8 software developers to deliver high-quality software on time and within budget. Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search. Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</p>
                    </div>
                  </div>
                </Link>
                <br />
                <Link href='https://grabjobs.co' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/companies/grabjobs.png' width={60} height={60} alt='Findjobs logo' />
                        <div className={styles.expTitle}>
                          <small>July 2020 - July 2020</small><br />
                          <span className='text-white'>Senior Software Engineer</span><br />
                          <small>GrabJobs Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>Lead a team of up to 8 software developers to deliver high-quality software on time and within budget. Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search. Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</p>
                    </div>
                  </div>
                </Link>
                <br />
                <Link href='https://ntu.edu.sg' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/companies/ntu.png' width={60} height={60} alt='Findjobs logo' />
                        <div className={styles.expTitle}>
                          <small>July 2020 - Present</small><br />
                          <span className='text-white'>Project Officer</span><br />
                          <small>Nanyang Technology University</small>
                        </div>
                      </div>
                      <br />
                      <p>Lead a team of up to 8 software developers to deliver high-quality software on time and within budget. Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search. Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</p>
                    </div>
                  </div>
                </Link>
                <br />
                <Link href='https://evvomedia.com' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/companies/evvomedia.png' width={60} height={60} alt='Findjobs logo' />
                        <div className={styles.expTitle}>
                          <small>July 2020 - Present</small><br />
                          <span className='text-white'>Senior Web Developer</span><br />
                          <small>Nanyang Technology University</small>
                        </div>
                      </div>
                      <br />
                      <p>Lead a team of up to 8 software developers to deliver high-quality software on time and within budget. Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search. Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</p>
                    </div>
                  </div>
                </Link>
                <br />
                <Link href='https://novitee.com' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/companies/novitee.png' width={60} height={60} alt='Findjobs logo' />
                        <div className={styles.expTitle}>
                          <small>July 2020 - Present</small><br />
                          <span className='text-white'>Web Developer</span><br />
                          <small>Novitee Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>Lead a team of up to 8 software developers to deliver high-quality software on time and within budget. Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search. Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</p>
                    </div>
                  </div>
                </Link>
                <br />
                <h3 id='portfolio'>Portfolio</h3>
                <div style={{ height: '100vh' }}></div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
