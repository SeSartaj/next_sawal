import * as React from "react";
import { makeStyles } from "@mui/styles";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import UserActivityCard from "./Cards/UserActivityCard";

interface UserActivityTabsProps {
  userActivity: any
  lang: string;
  dictionary: any;
}

const useStyles = makeStyles((theme) => ({
  tabListContainer: {
    display: "flex",
    justifyContent: "center",
  },
  tab: {
    flex: 1,
  },
}));

const UserActivityTabs: React.FC<UserActivityTabsProps> = ({userActivity, lang, dictionary}) => {
  const classes = useStyles();
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const renderUserActivity = (type: string) =>
    userActivity?.[type]?.map((activity: any) => (
      <UserActivityCard
        key={activity.id}
        discussion={type === "discussions"}
        activity={activity}
        lang={lang}
        dictionary={dictionary}
      />
    ));

  return (
    <Box sx={{ width: "100%", typography: "body1", padding: 5, marginBottom: 20 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            className={classes.tabListContainer}
          >
            {userActivity?.discussions && <Tab className={classes.tab} label={dictionary["main"].questions} value="1" />}
            {userActivity?.answers && <Tab className={classes.tab} label={dictionary["main"].answers} value="2" />}
            {userActivity?.comments && <Tab className={classes.tab} label={dictionary["main"].comments} value="3" />}
          </TabList>
        </Box>
        <TabPanel value="1">
          <div className="px-4 flex-col space-y-3">{renderUserActivity("discussions")}</div>
        </TabPanel>
        <TabPanel value="2">
          <div className="px-4 flex-col space-y-3">{renderUserActivity("answers")}</div>
        </TabPanel>
        <TabPanel value="3">
          <div className="px-4 flex-col space-y-3">{renderUserActivity("comments")}</div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
export default UserActivityTabs;

