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
const Projects = () => {
    return (
        <div className="container project-page">
            {/* <div className="text-zone">

                <h1>My projects</h1>
                <p>Roadmap vahi acha jisme project banaye acha</p>
            </div> */}

            <div className='card-wrapper'>




                <div className='card'>
                    <Card sx={{
                        maxWidth: 345,
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
                                Text to video converter using unsplash API for news and press releases
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
                                Text to video converter using unsplash API for news and press releases
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
                                Text to video converter using unsplash API for news and press releases
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
                                Text to video converter using unsplash API for news and press releases
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

                                Checkout my Github for More
                            </Typography>
                            <Typography variant="body2" sx={{ color: '#94a3b8', fontSize: '1.1rem' }}>
                                Text to video converter using unsplash API for news and press releases
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

                










            </div>


        </div>
    )
}

export default Projects
