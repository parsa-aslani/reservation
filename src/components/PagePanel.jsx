import { Box } from "@mui/material";

const PagePanel = (props) => {
  const { pagenumber, index, children, ...others } = props;
  return (
    <div
      role="tabpanel"
      hidden={pagenumber !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`sidebar-tab-${index}`}
      {...others}
    >
      {pagenumber === index && <Box sx={{ height: "100vh" }}>{children}</Box>}
    </div>
  );
};
export default PagePanel;
