import { Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import Navigation from '../Navigation/Navigation'
import anshu from '../img/anshu.jpg'
import diksha from '../img/diksha.jpg'
import khushi from '../img/khushi.jpg'
const TeamCard = ({ name, role, imgSrc, linkedin, github, instagram }) => (
  <Grid item xs={12} sm={6} md={4}>
    <div className="team-block-single" style={{ width: '70%', height: '300px', backgroundColor: '#f8f9fa', borderRadius: '10px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <div className="team-grids">
        <a href="#team-single">
          <img src={imgSrc} className="img-fluid" alt={name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
          <div className="team-info">
            <div className="social-icons-section" style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
              <a className="fac" href={linkedin} style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
              <a className="twitter mx-2" href={github} style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a className="google" href={instagram} style={{ margin: '0 10px' }}>
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
        </a>
      </div>
      <div className="team-bottom-block p-4" style={{ textAlign: 'center' }}>
        <h5 className="member mb-1"><a href="#team" style={{ color: '#343a40' }}>{name}</a></h5>
        <small style={{ display: 'block' }}>{role}</small>
      </div>
    </div>
  </Grid>
);

function About() {
  return (
    <div>
       <br />
        <br />
        <br />
        <br />
        <br />
        <Navigation />
      <section className="single_grid_w3_main align-w3" id="about">
        <div className="container" style={{ textAlign: 'center', padding: '0 20px', marginBottom: '20px' }}>
          <h3 className='text-2xl font-bold'>Our Mission Is To Find Houses</h3>
        </div>
      </section>

      <section className="blog_w3ls align-w3" id="posts">
        <div className="container" style={{ padding: '0 20px', marginBottom: '20px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <div className="blog-post" style={{ marginBottom: '20px' }}>
                <img src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=640" alt="Post 1" style={{ maxWidth: '100%', height: 'auto', marginLeft: '20px' }} />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="blog-post" style={{ textAlign: 'center', margin: '20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className='text-lg font-semibold mx-5'>Expanding Our Reach</h3>
                <p className='m-5' >Find your ideal rental home with us. Explore spacious layouts, modern amenities, and prime locations. Read about our latest efforts to reach more communities and provide healthcare access to those in remote areas.</p>
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <Grid container spacing={2} style={{ marginTop: '20px' }}>
            <Grid item xs={12} sm={6}>
              <div className="blog-post" style={{ textAlign: 'center', margin: '20px 0', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 className='text-lg font-semibold mx-5'>Why We Choose This</h3>
                <p  className='m-5'>Rent with us and enjoy modern conveniences at your fingertips. Our rental properties feature state-of-the-art appliances, high-speed internet access, and energy-efficient designs.</p>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="blog-post">
                <img src="https://images.pexels.com/photos/1575939/pexels-photo-1575939.jpeg?auto=compress&cs=tinysrgb&w=640" alt="Post 2" style={{ maxWidth: '100%', height: 'auto', marginRight: '20px' }} />
              </div>
            </Grid>
          </Grid>
          <br />
          <br />
          <h1 className='text-center mb-10 font-bold text-2xl '>Our Team</h1>
          <Grid container spacing={1} style={{ justifyContent: 'center', paddingLeft: '120px'}}> 
            <TeamCard
              name="Anshu Jain"
              role="web developer"
              imgSrc={anshu}
              linkedin="https://www.linkedin.com/in/anshu-jain-8453a8245/"
              github="https://github.com/ItsAnshujain"
              instagram="https://github.com/ItsAnshujain"
            />
            <TeamCard
              name="Diksha"
              role="Web developer"
              imgSrc={diksha}
              linkedin="https://www.linkedin.com/in/diksha-sharma-824548244"
              github="https://github.com/diksha-34"
              instagram="https://instagram.com/dikshasharma8103?igshid=YTQwZjQ0NmI0OA=="
            />
            <TeamCard
              name="Khushi Gupta"
              role="Data Scientist"
              imgSrc={khushi}
              linkedin="https://www.linkedin.com/in/khushi-gupta-34a764233"
              github="https://github.com/KhushiGupta12321"
              instagram="#"
            />
          </Grid>
        </div>
      </section>
    </div>
  );
}

export default About;