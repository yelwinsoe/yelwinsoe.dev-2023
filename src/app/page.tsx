'use client'
import Image from 'next/image'
import styles from './page.module.scss'
import Link from 'next/link'
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

export default function Home() {
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
                  <Link href=''>
                    <Button className='text-secondary'>About</Button>
                  </Link>
                  <Link href=''>
                    <Button className={styles.activeTab}>Contributions</Button>
                  </Link>
                  <Link href=''>
                    <Button className='text-secondary'>Skills</Button>
                  </Link>
                  <Link href=''>
                    <Button className='text-secondary'>Experiences</Button>
                  </Link>
                  <Link href=''>
                    <Button className='text-secondary'>Portfolio</Button>
                  </Link>
                </div>
                <br /><br /><br />
                <div>
                  <Link href=''>
                    <Button variant='link'>
                      <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'white' }} />
                    </Button>
                    <Button variant='link'>
                      <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
                    </Button>
                  </Link>
                </div>
              </Col>
              <Col className={styles.rightCol}>
                <div>
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
                <h3 className='mb-4 text-white'>Contributions</h3>
                <div>
                  <GitHubCalendar username='yelwinsoe' colorScheme='dark' />
                </div>
                <br /><br />
                <h3 className='mb-4 text-white'>Skills</h3>
                <div>
                  <Row>
                    <Col>
                      <p>Javascript / Typescript</p>
                    </Col>
                    <Col>
                      <ProgressBar now={90} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>NodeJs</p>
                    </Col>
                    <Col>
                      <ProgressBar now={90} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>ReactJs</p>
                    </Col>
                    <Col>
                      <ProgressBar now={90} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>Python / Flask</p>
                    </Col>
                    <Col>
                      <ProgressBar now={70} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>PHP / Laravel</p>
                    </Col>
                    <Col>
                      <ProgressBar now={60} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>MySql / Sql</p>
                    </Col>
                    <Col>
                      <ProgressBar now={80} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>HTML</p>
                    </Col>
                    <Col>
                      <ProgressBar now={90} />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <p>CSS</p>
                    </Col>
                    <Col>
                      <ProgressBar now={90} />
                    </Col>
                  </Row>
                </div>
                <br /><br />
                <h3 className='mb-3 text-white'>Experiences</h3>
                <Link href='https://findjobs.com.sg' className={styles.exp} target='_blank'>
                  <div className={styles.expDiv}>
                    <div>
                      <div>
                        <Image src='/findjobs.png' width={60} height={60} alt='Findjobs logo' />
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
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
