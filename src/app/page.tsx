'use client'
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
  Image,
  Card
} from 'react-bootstrap'
import { useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

export default function Home() {

  // Restrict value to be between the range [0, value]
  const clamp = (value: number) => Math.max(0, value);

  // Check if number is between two values
  const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

  const [activeId, setActiveId] = useState("about");

  useLayoutEffect(() => {
    const ids = ['about', 'contributions', 'skills', 'blog', 'experiences', 'portfolio']
    const offset = 10
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

  const [showMoreExp, setShowMoreExp] = useState(false)
  const [showMorePortfolio, setShowMorePortfolio] = useState(false)

  return (
    <Container className={styles.container}>
      <Row>
        <Col md={{ span: 10, offset: 1 }} xs={12}>
          <div>
            <Row>
              <Col md={4} className={styles.leftCol} >
                <h2 className={styles.name}>Ye Lwin Soe</h2>
                <p className='fs-5'>Senior Software Engineer</p>
                <p>
                  Build web stuff, frontend/backend/fullstack dev. Interested in Web3, ML/DL, sometimes too many interest.
                </p>
                <div className='d-block d-sm-none'>
                  <Link href='mailto:yelwinsoe.mm@gmail.com' target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', color: 'white' }} />
                  </Link> &nbsp;&nbsp;
                  <Link href='https://github.com/yelwinsoe' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'white' }} />
                  </Link> &nbsp;&nbsp;
                  <Link href='https://www.linkedin.com/in/yelwinsoe/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
                  </Link>
                </div>
                <br />
                <div className="d-md-grid gap-3">
                  <SLink to='about'>
                    <Button className={activeId === 'about' ? styles.activeTab : 'text-secondary mr-2'}>About</Button>
                  </SLink>
                  <SLink to='contributions'>
                    <Button className={activeId === 'contributions' ? styles.activeTab : 'text-secondary mr-2'}>Contributions</Button>
                  </SLink>
                  <SLink to='skills'>
                    <Button className={activeId === 'skills' ? styles.activeTab : 'text-secondary mr-2'}>Skills</Button>
                  </SLink>
                  <SLink to='blog'>
                    <Button className={activeId === 'blog' ? styles.activeTab : 'text-secondary mr-2'}>Blog</Button>
                  </SLink>
                  <SLink to='experiences'>
                    <Button className={activeId === 'experiences' ? styles.activeTab : 'text-secondary mr-2'}>Experiences</Button>
                  </SLink>
                  <SLink to='portfolio'>
                    <Button className={activeId === 'portfolio' ? styles.activeTab : 'text-secondary mr-2'}>Portfolio</Button>
                  </SLink>
                </div>
                <br /><br />
                <div className='d-none d-sm-block'>
                  <Link href='mailto:yelwinsoe.mm@gmail.com' target='_blank'>
                    <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', color: 'white' }} />
                  </Link> &nbsp;&nbsp;
                  <Link href='https://github.com/yelwinsoe' target='_blank'>
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'white' }} />
                  </Link> &nbsp;&nbsp;
                  <Link href='https://www.linkedin.com/in/yelwinsoe/' target='_blank'>
                    <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'white' }} />
                  </Link>
                </div>
              </Col>
              <Col md={8} className={styles.rightCol}>
                <div id="about">
                  <p>
                    Hi there! I&apos;m a full-stack web developer with 8+ years of experience. I&apos;ve been working as a Software Engineer since 2014, and I love building things that people can use. I&apos;m also a lifelong learner and I&apos;m always looking for new ways to improve my skills.
                  </p>
                  <p>
                    I&apos;m not one for stuffy introductions, so I&apos;ll just say this: I love coding. I love the challenge of solving problems and creating something from scratch. I also love the feeling of satisfaction when I see someone using something that I&apos;ve built. If you&apos;re looking for someone to solve your Web Development problems, I&apos;m your guy.
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
                <div className={styles.skillsWrapper}>
                  <Row>
                    <Col><p>JavaScript / TypeScript</p></Col>
                    <Col><ProgressBar now={95} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>Python / Flask / Django</p></Col>
                    <Col><ProgressBar now={70} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>PHP / Laravel</p></Col>
                    <Col><ProgressBar now={60} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>Go</p></Col>
                    <Col><ProgressBar now={50} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>Node.Js / Express.Js / Sequelize</p></Col>
                    <Col><ProgressBar now={90} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>ReactJs</p></Col>
                    <Col><ProgressBar now={85} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>MySql / PostgreSql / Sql</p></Col>
                    <Col><ProgressBar now={80} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>MondoDB / NoSql</p></Col>
                    <Col><ProgressBar now={50} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>HTML</p></Col>
                    <Col><ProgressBar now={90} animated variant="success" /></Col>
                  </Row>
                  <Row>
                    <Col><p>CSS</p></Col>
                    <Col><ProgressBar now={80} animated variant="success" /></Col>
                  </Row>
                </div>
                <br />
                <h3 id='blog' className='mb-4 text-white'>Blog</h3>
                <div className={styles.blogWrapper}>
                  <Row className='g-3'>
                    <Col xs={12} md={6}>
                      <Link href='https://blog.yelwinsoe.dev/rest-vs-graphql-how-to-choose-your-api-architecture' target='_blank'>
                        <Card className={styles.articles}>
                          <Card.Img variant="top" height={200} style={{ objectFit: 'cover' }} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1690341841839/58d9b592-3ec7-4fd6-afe4-a6be39b3608a.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
                          <Card.Body>
                            <Card.Title>REST vs GraphQL — How to choose your API architecture?</Card.Title>
                            <Card.Text>
                            Having been working on both REST and GraphQL api, I&apos;ve accumulated a mental checklist on how to choose ...
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                    <Col xs={12} md={6}>
                      <Link href='https://blog.yelwinsoe.dev/how-to-protect-your-api' target='_blank'>
                        <Card className={styles.articles}>
                          <Card.Img variant="top" height={200} style={{ objectFit: 'cover' }} src="https://cdn.hashnode.com/res/hashnode/image/upload/v1690349721766/9d0e6754-87cb-4a23-add6-501c16337bb1.webp?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp" />
                          <Card.Body>
                            <Card.Title>How to protect your API?</Card.Title>
                            <Card.Text>
                              Have you deployed your Websites or Mobile Apps and got hit in the face with thousands dollar worth of bill from your SMS provider after a few months? Yes, i have ...
                            </Card.Text>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  </Row>
                  <br /><br />
                  <div style={{ textAlign: 'center' }}>
                    <Link href='https://blog.yelwinsoe.dev' target='_blank'>
                      <Button>Show More</Button>
                    </Link>
                  </div>
                </div>
                <br />
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
                          <li>Lead a team of software developers to deliver high-quality software on time and within budget.</li>
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
                {!showMoreExp && <div style={{ textAlign: 'center' }}>
                    <Button onClick={() => { setShowMoreExp(true) }}>Show More</Button>
                  </div>}
                {showMoreExp &&
                  <>
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
                  </>
                }
                <br /><br />
                <h3 id='portfolio'>Portfolio</h3>
                <small>Some projects I&apos;ve involved thougout my career.</small>
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
                      <Link href="https://findjobs.asia" className='text-white' target='_blank'>https://findjobs.asia</Link>
                    </Col>
                  </Row>
                </div>
                <hr />
                <div className='mt-3'>
                  <Row>
                    <Col md={5}>
                      <Image src='/projects/grabjobs_dashboard.png' width='100%' alt='GrabJobs employer dashboard' />
                    </Col>
                    <Col md={7}>
                      <span className='text-white'>GrabJobs Employer Dashboard</span><br />
                      <small>A dashboard for Employers to post jobs and manage applicants on Findjobs job portal.</small><br />
                      <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                        <Badge pill bg="primary">JavaScript</Badge>
                        <Badge pill bg="primary">TypeScript</Badge>
                        <Badge pill bg="primary">NodeJs</Badge>
                        <Badge pill bg="primary">ReactJs</Badge>
                        <Badge pill bg="primary">Bootstrap</Badge>
                        <Badge pill bg="primary">PostgreSql</Badge>
                        <Badge pill bg="primary">Python</Badge>
                      </Stack>
                      <Link href="https://employer.grabjobs.co" className='text-white' target='_blank'>https://employer.grabjobs.co</Link>
                    </Col>
                  </Row>
                </div>
                {!showMorePortfolio && <div style={{ textAlign: 'center' }}>
                    <br /><br />
                    <Button onClick={() => { setShowMorePortfolio(true) }}>Show More</Button>
                  </div>}
                {showMorePortfolio &&
                  <>
                    <hr />
                    <div className='mt-3'>
                      <Row>
                        <Col md={5}>
                          <Image src='/projects/grabjobs_job_portal.png' width='100%' alt='GrabJobs Job Portal' />
                        </Col>
                        <Col md={7}>
                          <span className='text-white'>GrabJobs Job Portal</span><br />
                          <small>Jobseeker can browse and apply for jobs, as well as tracking their applications.</small><br />
                          <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">TypeScript</Badge>
                            <Badge pill bg="primary">NodeJs</Badge>
                            <Badge pill bg="primary">ReactJs</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="primary">PostgreSql</Badge>
                          </Stack>
                          <Link href="https://grabjobs.co" className='text-white' target='_blank'>https://grabjobs.co</Link>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <div className='mt-3'>
                      <Row>
                        <Col md={5}>
                          <Image src='/projects/evvo_channel.png' width='100%' alt='EVVO Channel Portal' />
                        </Col>
                        <Col md={7}>
                          <span className='text-white'>EVVO Channel - Video Platform</span><br />
                          <small>Businesses can create their own video channel through EVVO channel. Be it private or public.</small><br />
                          <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                            <Badge pill bg="primary">PHP</Badge>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">MySql</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="primary">Nginx / RTMP</Badge>
                          </Stack>
                          <Link href="https://evvochannel.tv" className='text-white' target='_blank'>https://evvochannel.tv</Link>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <div className='mt-3'>
                      <Row>
                        <Col md={5}>
                          <Image src='/projects/purchasing-inventory-system.png' width='100%' alt='EVVO Channel Portal' />
                        </Col>
                        <Col md={7}>
                          <span className='text-white'>Novitee - Purchasing & Inventory System</span><br />
                          <small>Businesses can manage and make order for their inventory.</small><br />
                          <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                            <Badge pill bg="primary">PHP</Badge>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">MySql</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="primary">Nginx / RTMP</Badge>
                          </Stack>
                          <Link href="https://novitee.com/solutions/purchasing" className='text-white' target='_blank'>https://novitee.com/solutions/purchasing</Link>
                        </Col>
                      </Row>
                    </div>
                    <hr />
                    <div className='mt-3'>
                      <Row>
                        <Col md={5}>
                          <Image src='/projects/kitchen-display-system.png' width='100%' alt='EVVO Channel Portal' />
                        </Col>
                        <Col md={7}>
                          <span className='text-white'>Novitee - Kitchen Display System</span><br />
                          <small>Order management system for the chef in the kitchen, help chef to be more productive.</small><br />
                          <Stack direction="horizontal" gap={1} className='mt-2 mb-2'>
                            <Badge pill bg="primary">JavaScript</Badge>
                            <Badge pill bg="primary">WebSocket</Badge>
                            <Badge pill bg="primary">MySql</Badge>
                            <Badge pill bg="primary">Bootstrap</Badge>
                            <Badge pill bg="primary">Nginx / RTMP</Badge>
                          </Stack>
                          <Link href="https://novitee.com/solutions/kitchen-display-system" className='text-white' target='_blank'>https://novitee.com/solutions/kitchen-display-system</Link>
                        </Col>
                      </Row>
                    </div>
                  </>
                }
              </Col>
            </Row>
          </div>
          <br /><br /><br />
        </Col>
      </Row>
    </Container>
  )
}
