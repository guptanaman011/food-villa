import { Outlet } from 'react-router-dom';

const About = () => {
  return (
    <div>
      <h1>About us</h1>
      <p>HELLO FROM ABOUT US PAGE</p>
      <Outlet />
    </div>
  );
};

export default About;
