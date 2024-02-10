import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TeamMember() {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);


    const styles = () => {
        if (windowSize[0] <= 576) {
            // Small devices (phones)
            return { marginTop: '16%' };
        } else {
            // Larger devices (tablets, desktops)
            return { marginTop: '10%' };
        }
    };

    return (
        <>
            <svg style={{ position: 'absolute', top: '0', right: '0', width: '10%', minWidth: '50px', height: 'auto', float: 'inline-end' }}
                fill="#0eddc4" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)" stroke="#0eddc4" strokeWidth="0.00032">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M24 4v24l-8-8-8 8v-24h16z"></path>
                </g>
            </svg>


            <Container style={styles()}>
                <Button style={{ fontWeight: 'bold' }} variant="info">Company Name Here</Button><br /><br />
                <p style={{ width: '50vw', margin: 'auto', borderBottom: 'dashed 2px', borderBottomColor: 'aquamarine' }}>Your first project task is to develop a responsive web page for the Company Member Team
                    Page. The design reference is provided in the attached file named "designed-1." Utilize
                    React.js to bring this design to life, ensuring responsiveness across various devices. This
                    project allows you to showcase your coding skills and creativity while adhering to the design
                    reference.</p>

            </Container>
            <br />
            <h2>
                Meet Our Team
            </h2>
            <br />

            <Container className='lead-management-member'>
                <Button style={{ fontWeight: 'bold' }} variant="info">LeaderShip And Management Team</Button>{' '}
                <br /> <br /> <br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Founder Name]</Card.Title>
                                <Card.Text>
                                    Founder/CEO
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Founder Name]</Card.Title>
                                <Card.Text>
                                    Founder/CEO
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Vp Name]</Card.Title>
                                <Card.Text>
                                    VP, Development & Growth
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[VP Name]</Card.Title>
                                <Card.Text>
                                    VP, Sales & Marketing
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[VP Name]</Card.Title>
                                <Card.Text>
                                    VP, Finance & Operation
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <svg style={{ width: '10%', minWidth: '50px', height: 'auto', float: 'left' }}
                fill="#0eddc4" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"
                transform="rotate(270)" stroke="#0eddc4" strokeWidth="0.00032">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M24 4v24l-8-8-8 8v-24h16z"></path>
                </g>
            </svg>

            <br /><br />
            <Container className='developer-member'>
                <Button style={{ fontWeight: 'bold' }} variant="info">Development Team</Button>{' '}
                <br /><br /><br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Team Lead,SE
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Developer Name]</Card.Title>
                                <Card.Text>
                                    Software Engineer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>

            </Container>
            <svg style={{ width: '10%', minWidth: '50px', height: 'auto', float: 'inline-end' }}
                fill="#0eddc4" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"
                transform="rotate(90)" stroke="#0eddc4" strokeWidth="0.00032">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M24 4v24l-8-8-8 8v-24h16z"></path>
                </g>
            </svg>
            <br /> <br />

            <Container className='sales-marketing-member'>
                <Button style={{ fontWeight: 'bold' }} variant="info">Sales and Marketing Team</Button>{' '}
                <br /> <br /> <br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Team Lead
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Sales Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Sales Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.3' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Sales Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <br />
                <Row style={{ justifyContent: 'center' }} >
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Marketing Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Marketing Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col style={{ width: '15rem', marginTop: '5px', display: 'flex', justifyContent: 'center', flex: '0.5' }}>
                        <Card style={{ width: '15rem' }}>
                            <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" />
                            <Card.Body>
                                <Card.Title>[Employee Name]</Card.Title>
                                <Card.Text>
                                    Marketing Officer
                                </Card.Text>
                                <Card.Link href="#"><i className="bi bi-linkedin" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-github" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                                <Card.Link href="#"><i className="bi bi-twitter" style={{ fontSize: '1.5rem' }}></i></Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

            </Container>
            <svg style={{ width: '10%', minWidth: '50px', height: 'auto', float: 'left' }}
                fill="#0eddc4" viewBox="0 0 32.00 32.00" xmlns="http://www.w3.org/2000/svg"
                transform="rotate(270)" stroke="#0eddc4" strokeWidth="0.00032">
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <title>bookmark</title>
                    <path d="M24 4v24l-8-8-8 8v-24h16z"></path>
                </g>
            </svg>
        </>
    );
}

export default TeamMember;