import * as React from 'react';
import './Layout.scss'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import cde from '../assets/images/cde.jpg'
import ttv from '../assets/images/ttv.png'
import bus from '../assets/images/bus.png'
import qr from '../assets/images/qr.png'
import ml from '../assets/images/ml.png'
import git from '../assets/images/giyt.jpg'
import Pass from '../assets/images/Pass.png'
import fly from '../assets/images/fly.png'
import Loader from 'react-loaders';
import './Sidebar.scss';
import Sidebar from './Sidebar'
const Projects = () => {
    return (
        <>
            <Sidebar isHomePage={false} />
            <div className="container project-page">
                <div className="text-zone-projects">

                    <h1>My projects</h1>

                </div>

                <div className='card-wrapper'>

                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="CDE"
                                height="140"
                                image={fly}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    SimpliFly: Flight Ticket Booking System
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech Stack: Springboot, react, MySQL</strong></p>
                                    A simple and dynamic Flight Ticket booking system
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/Simplifly-AirTicketBooking-System'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>


                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="CDE"
                                height="140"
                                image={cde}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    Collaborative Development Environment
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech Stack: MERN, Socket.io, Tailwind CSS</strong></p>
                                    Real time code editor for coders and Developers
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/Collaborative-Development-Environment'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>


                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={ttv}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    PressPix
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech Stack: HTML5, CSS3, Python3(Flask)</strong></p>

                                    Text to video converter using unsplash API for news and press releases
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/Text-to-Video-Processing-for-PIB-Press-Information-Bureau-using-Images'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>
                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={bus}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    Bus Pass Registration System
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech stack: HTML5, CSS3, JavaScript, SheetDBApi (Google sheets), jsPDF</strong></p>
                                    A pass registration app for institutes who have bus facilities.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/Bus-Pass-Registration-System-Using-HTML-CSS-Bootstrap-Javascript-using-Google-Sheet-as-Database'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>

                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={Pass}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    My-Pass Managaer
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech stack: React.js, Node.js, Express.js, MongoDB</strong></p>
                                    A simple app that manages your passwords.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://my-pass-manager.vercel.app/'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>



                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={ml}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    MelodyWave
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech Stack: HTML5, CSS3, Javascript</strong></p>
                                    A responsive web music player
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/Responsive-Web-Music-Player'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>

                    <div className='card'>
                        <Card sx={{
                            height: '100%',
                            maxWidth: 345,
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={qr}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    QR Based Tourist Information System
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <p><strong>Tech stack: React, Node.js, Gemeni API, Google cloud text to speech </strong></p>
                                    A tourist information system
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297/QR-Based-Tourist-Guide-SIH2023'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>


                    <div className='card'>
                        <Card sx={{
                            maxWidth: 345,
                            height: '100%',
                            background: 'linear-gradient(145deg, #1e293b, #334155)',
                            color: '#ffffff',
                            borderRadius: '15px',
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                        }}>
                            <CardMedia
                                component="img"
                                alt="Ttv"
                                height="140"
                                image={git}
                            />
                            <CardContent className='cardContent'>
                                <Typography gutterBottom variant="h5" component="div"
                                    sx={{

                                        fontFamily: "'Poppins', sans-serif",
                                        color: 'yellow',
                                        fontWeight: 'Bold',
                                        fontSize: '1.5rem'
                                    }}>

                                    Checkout my Github for More
                                </Typography>
                                <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                    <strong>Github: shardulkulk297</strong>
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="large"
                                    href='https://github.com/shardulkulk297'
                                    sx={{ color: '#38bdf8', fontSize: '1.1 rem' }}>View</Button>
                                <Button size="Large" sx={{ color: '#38bdf8' }}>Learn More</Button>
                            </CardActions>
                        </Card>

                    </div>












                </div>
                {/* <Loader type='pacman' /> */}

            </div>
        </>
    )
}

export default Projects
