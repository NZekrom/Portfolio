import {
  makeStyles,
  Box
} from "@material-ui/core";
import Line from "../component/line";

import emailImg from '../assets/images/email.png';
import githubImg from '../assets/images/github.png';
import linkedinImg from '../assets/images/linkedin.png';
import mediumImg from '../assets/images/medium.png';
import twitterImg from '../assets/images/twitter.png';

const SOCIAL_MEDIA_LIST = [{
  link: 'mailto:namanprgs@mail.com',
  image: emailImg,
}, {
  link: 'https://twitter.com/Akanksha872',
  image: twitterImg,
}, {
  link: 'https://www.linkedin.com/in/naman111pratap222singh333/',
  image: linkedinImg,
}, {
  link: 'https://medium.com/@akankshasingh872',
  image: mediumImg,
}, {
  link: 'https://github.com/NZekrom',
  image: githubImg,
}];

const useStyles = makeStyles((theme) => ({

}));

function Contact(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <Box style={{ background: pageTheme.palette.background.default }} id="Contact">
      <Line pageTheme={pageTheme} text="Get in Touch" className="pb-2"></Line>
      <Box sx={{ justifyContent: 'space-evenly', display: 'flex', alignItems: 'center', paddingTop: "5%",  paddingBottom: "5%" }} className="pt-2 pb-2">
        {SOCIAL_MEDIA_LIST.map((item, index) => (
          <a href={item.link} target="_blank" key={index}> <img src={item.image} alt="loading" width="40%"></img></a>
        ))}
      </Box>
      <Box sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}>
        <h6 style={{ color: pageTheme.palette.primary.main }} className="pt-1 pb-1">Designed & Built by Akanksha Singh</h6>
      </Box>

    </Box>
  );
}

export default Contact;
