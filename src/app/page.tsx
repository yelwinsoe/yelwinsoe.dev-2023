'use client'
// import Image from 'next/image'
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
  ProgressBar,
  Stack,
  Badge,
  Image
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
                <p className='fs-5'>Senior Software Engineer</p>
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
                  <SLink to='blog'>
                    <Button className={activeId === 'blog' ? styles.activeTab : 'text-secondary'}>Blog</Button>
                  </SLink>
                  <SLink to='experiences'>
                    <Button className={activeId === 'experiences' ? styles.activeTab : 'text-secondary'}>Experiences</Button>
                  </SLink>
                  <SLink to='portfolio'>
                    <Button className={activeId === 'portfolio' ? styles.activeTab : 'text-secondary'}>Portfolio</Button>
                  </SLink>
                </div>
                <br /><br />
                <div>
                  <Link href='https://github.com/yelwinsoe' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'white' }} />
                  </Link> &nbsp;&nbsp;
                  <Link href='https://www.linkedin.com/in/yelwinsoe/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
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
                    <Col><p>JavaScript / TypeScript</p></Col>
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
                          <small>Jul 2020 - Present</small><br />
                          <span className='text-white'>Senior Software Engineer - Team Lead</span><br />
                          <small>Findjobs Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>
                        <ul>
                          <li>Lead a team of 8 software developers to deliver high-quality software on time and within budget.</li>
                          <li>Increased web traffic by 500% by implementing a search engine friendly job portal using Next.js with Server Side Rendering and integrating with Google Search.</li>
                          <li>Reduced deployment time by 90% by implementing a GitHub workflow with Docker.</li>
                        </ul>
                      </p>
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
                          <small>Mar 2019 - Jul 2020</small><br />
                          <span className='text-white'>Senior Software Engineer</span><br />
                          <small>GrabJobs Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>
                        <ul>
                          <li>Increased web traffic by 300% by implementing a search engine friendly job portal using PHP/Laravel.</li>
                          <li>Streamlined employer subscription payment system using Stripe, resulting in a 50% increase in company revenue.</li>
                        </ul>
                      </p>
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
                          <small>May 2018 - Mar 2019</small><br />
                          <span className='text-white'>Project Officer</span><br />
                          <small>Nanyang Technology University</small>
                        </div>
                      </div>
                      <br />
                      <p>
                        <ul>
                          <li>Increased labeller productivity by 200% by implementing a partial pre-labelled video using SOLO v3 Real-Time Object Detection Algorithm for object labeling in Self-Driving Car Research.</li>
                          <li>Contributed to research on creating a simulation and physical environment for testing self-driving cars.</li>
                        </ul>
                      </p>
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
                          <small>Mar 2016 - May 2018</small><br />
                          <span className='text-white'>Senior Web Developer</span><br />
                          <small>Evvo Media Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>
                        <ul>
                          <li>Automated the recording and editing of TV footage using Ubuntu Server/FFMPEG with Nginx RTMP streaming server deployed locally/intranet and Raspberry Pi as video player, resulting in a 300% reduction in time to record and distribute footage.</li>
                          <li>Developed a digital signage system that supports multiple content types (text, photo, video, etc.) with a flexible layout using Raspberry Pi and NodeJs.</li>
                        </ul>
                      </p>
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
                          <small>Dec 2014 - Jan 2016</small><br />
                          <span className='text-white'>Web Developer</span><br />
                          <small>Novitee Pte Ltd</small>
                        </div>
                      </div>
                      <br />
                      <p>
                        <ul>
                          <li>Developed and deployed a purchasing and inventory system and kitchen display system that is currently used by Foodfare Pte Ltd and Each a Cup Pte Ltd.</li>
                        </ul>
                      </p>
                    </div>
                  </div>
                </Link>
                <br /><br />
                <h3 id='portfolio'>Portfolio</h3>
                <div className='mt-4'>
                  <Row>
                    <Col md={5}>
                      <Image src='/projects/findjobs_dashboard.png' width='100%' alt='Findjobs employer dashboard' />
                    </Col>
                    <Col md={7}>
                      <span className='text-white'>Findjobs Employer Dashboard</span><br />
                      <small>A dashboard for Employers to post jobs and manage applicants on Findjobs job portal.</small><br />
                      <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                        <Badge pill bg="primary">JavaScript</Badge>
                        <Badge pill bg="primary">TypeScript</Badge>
                        <Badge pill bg="primary">NodeJs</Badge>
                        <Badge pill bg="primary">ReactJs</Badge>
                        <Badge pill bg="primary">Bootstrap</Badge>
                        <Badge pill bg="primary">PostgreSql</Badge>
                      </Stack>
                      <Link href="https://dashboard.findjobs.asia" className='text-white' target='_blank'>https://dashboard.findjobs.asia</Link>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className='mt-3'>
                  <Row>
                    <Col md={5}>
                      <Image src='/projects/findjobs_job_portal.png' width='100%' alt='Findjobs employer dashboard' />
                    </Col>
                    <Col md={7}>
                      <span className='text-white'>Findjobs Job Portal</span><br />
                      <small>Jobseeker can browse and apply for jobs, as well as tracking their applications.</small><br />
                      <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                        <Badge pill bg="primary">JavaScript</Badge>
                        <Badge pill bg="primary">TypeScript</Badge>
                        <Badge pill bg="primary">NodeJs</Badge>
                        <Badge pill bg="primary">ReactJs</Badge>
                        <Badge pill bg="primary">Bootstrap</Badge>
                        <Badge pill bg="primary">PostgreSql</Badge>
                      </Stack>
                      <Link href="https://dashboard.findjobs.asia" className='text-white' target='_blank'>https://dashboard.findjobs.asia</Link>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <br />
          <br />
        </Col>
      </Row>
    </Container>
  )
}
