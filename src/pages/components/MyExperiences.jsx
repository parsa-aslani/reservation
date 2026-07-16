// import
import { CustomDivider } from "../../components";
import { experiencesdata } from "../../const/experiencesdata";
import ExperiencesPanel from "./Experiencespanel";
// mui
import { Box, Grid} from "@mui/material";
// react icons
import { MdWork } from "react-icons/md";
// set jsx
const MyExperiences = () => {
  return (
    <>
      <CustomDivider
        text="تجربیات من"
        icon={<MdWork style={{ marginRight: "0.5rem", fontSize: "1.2rem" }} />}
      />
      <Box sx={{ mb: 2 }}>
        <Grid container>
          {experiencesdata.map((experience, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
              <ExperiencesPanel
                number={experience.number}
                icon={experience.icon}
                tooltiptitle={experience.tooltiptitle}
                color={experience.color}
                bordercolor={experience.bordercolor}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};
export default MyExperiences;
