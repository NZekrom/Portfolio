import {
  makeStyles,
  Box
} from "@material-ui/core";
import Line from "../component/line";
import acheivementBG from "../assets/images/acheivementBG.jpeg";
import acheivement1 from "../assets/images/acheivement1.jpeg";
import acheivement2 from "../assets/images/acheivement2.jpeg";
import acheivement3 from "../assets/images/acheivement3.jpeg";


;

const ACHEIVEMENT_DATA_LIST = [
  {
    title: "GATE 2023, Cleared",
    image: acheivement1,
    imageWidth: '500vw',
    description: [
      "GATE is organized anually in India and is one of the toughest exam to crack for any student",
      "Secured a rank of 5769 in GATE 2023, in computer science, displaying a great understanding of the field",
      "Gate Score: 423: "
    ]
  },
  {
    title: "LeetCode",
    image: acheivement2,
    imageWidth: 500,
    description: [
      "LeetCode is an online coding platform developed to improve the coding skills for people of all profession with the desire to improve themself",
      "Solved more than 600 questions, and the count is still increasing, to improve myself and apply the skills in real life challenge",
      "Language Used: C++, Java, Python, MySQL"
    ]
  },
  {
    title: "Coding Club",
    image: acheivement3,
    imageWidth: 500,
    imageHeight: 380,
    description: [
      "Its a college club created for the purpose of clearing the coding round in various company hiring rounds",
      "Gives a clear understanding of the challenges in the hiring process of various organization and allow us to prepare ourself accordingly",
      ""
    ]
  },
]

const useStyles = makeStyles((theme) => ({

  contentText: {
    color: "#FFFFFF",
  },
  imageSize:{
    width: "25vw",
    height: "25vw"
  }
}));

function Acheivement(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', }}
      style={{ backgroundImage: `url(${acheivementBG})` }} id="Acheivement">
      <div><Line pageTheme={pageTheme} text="Acheivements"></Line></div>
      <Box sx={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', alignItems: 'center', paddingTop: "7%", paddingBottom: "10%", marginLeft: "3%", marginRight: "3%" }} className="pt-4" >
        {ACHEIVEMENT_DATA_LIST.map((item, index) => (
          <div className="content" key={index}>
            <div className="content-overlay"></div>
            <img src={item.image} alt="loading" className={classes.imageSize}/>
            <div className="content-details fadeIn-bottom">
              <h3 className={classes.contentText}>{item.title}</h3>
              {item.description.map((item, index) => (
                <p className={classes.contentText} key={index}>{item}</p>
              ))}
            </div>
          </div>

        ))}
      </Box>
    </Box>
  );
}

export default Acheivement;