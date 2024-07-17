import {
  makeStyles,
  Card,
  Typography,
  CardContent,
  LinearProgress,
  Box
} from "@material-ui/core";

import Line from "../component/line";
import bhelLogo from "../assets/images/bhel.png";
import '../App.css';
;

const WORK_EXPERIENCE_LIST = [{
  title: "Trainee",
  from: "Apr, 2022 - May, 2022",
  duration: "1 month",
  organization: "BHEL, Ranipur",
  image: bhelLogo,
  imageWidth: "40%",
  imageHeight: "40%",
  journey: [{
    title: "Learner",
    from: "Apr, 2022 - May, 2022",
  }],
  description: [
    "Worked as a trainee to learn th ebasic of web development, at the same time working on a live project with a group, to display the skill we learned as a trainee on the project Restaurant Management System, in the one month we got, we learn the use of various tools we can use to create our project and delivered a project fitting the criteria on the desired date",
    "Learn various skills like work and time management to avoid wasting other time and the role of a good project leader to manage the team"
  ]
}]

const useStyles = makeStyles((theme) => ({
  greyText: {
    color: "#828282"
  },
  card: {
    width: "60vw"
  },
  journey: {
    width: "25%"
  }
}));

function WorkExperience(props) {
  const classes = useStyles();
  const pageTheme = props.pageTheme;
  return (
    <div style={{ background: pageTheme.palette.background.default }} id="WorkExperience">
      <Line pageTheme={pageTheme} text="Work Experience"></Line>
      <Box
        className="workExperienceBox"
        sx={{ justifyContent: 'center', display: 'flex', flexDirection: "column", alignItems: 'center', paddingTop: "6%", paddingBottom: "8%" }}>
        {WORK_EXPERIENCE_LIST.map((item, index) => (
          <Box
            key={index}
            sx={{ justifyContent: 'center', display: 'flex', flexDirection: "row", alignItems: 'center', paddingTop: "2%" }}>
            <div className={classes.journey}>
              {
                item.journey.map((journey, index) => (

                  <div className="p-1" key={index}>
                    <h5>
                      <b>{journey.title}</b>
                    </h5>
                    <h6 className={classes.greyText}>
                      {journey.from}
                    </h6>
                  </div>
                ))
              }
            </div>
            <Card className={classes.card} >
              <CardContent>

                <h5 className="mb-1">
                  <b>{item.organization}</b>  ({item.duration})
                </h5>


                <img src={item.image} alt="loading" width={item.imageWidth} height={item.imageHeight} />

                {item.description.map((para, index) => (
                  <h6 key={index} className={classes.greyText}>
                   - {para}
                  </h6>
                ))}

              </CardContent>

            </Card>
            <LinearProgress />

          </Box>

        ))}
      </Box>
    </div >
  );
}

export default WorkExperience;
