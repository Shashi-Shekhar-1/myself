// import React from "react";
import Lottie from "lottie-react";
import Animation from "./Animation/Profile.json";
import assigmentAnimation from "./Animation/Assigment.json";
import timetableAnimation from "./Animation/Timetable.json";
import attendanceAnimation from "./Animation/Attendance.json";
import notificationAnimation from "./Animation/Notification.json";
import { Grid, Box, Card, Typography } from "@mui/material";

export const StudentDashboard = () => {
  const cardStyle = {
    textAlign: "center",
    border: "1px solid gray",
    borderRadius: "25px",
    padding: "10px",
  };

  return (
    <div>
      <Box
        sx={{
          border: "2px solid black",
          borderRadius: "20px",
          p: 4,
          mx: "auto",
          width: "78%",
        }}
      >
        <Typography
          variant="h4"
          gutterButtom
          sx={{
            pl: 3,
            pt: 2,
            fontFamily: "Poppins,sans-serif",
            fontWeight: "bold",
            letterSpacing: "0.5px",
          }}
        >
          Dashboard
        </Typography>

        <Grid container spacing={15} justifyContent="center">
          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ ...cardStyle, mr: "240px", mt: "50px" }}>
              <Lottie animationData={Animation} style={{ height: 200 }} />
            </Card>
            <Typography
              variant="h6"
              align="left"
              sx={{ mt: 1, ml: 14, fontFamily: "Poppins, sans-serif" }}
            >
              My Profile
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Card
              sx={{
                ...cardStyle,
                padding: "20px",
                ml: "-180px",
                mr: "100px",
                mt: "48px",
                pb: "4px",
                pl: "150px",
                pt: "20px",
              }}
            >
              <Lottie
                animationData={attendanceAnimation}
                style={{ height: 220 }}
              />
            </Card>
            <Typography
              variant="h6"
              align="left"
              sx={{ mt: 1, fontFamily: "Poppins, sans-serif" }}
            >
              Attendance
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={8}>
            <Card sx={{ ...cardStyle, padding: "20px" }}>
              <Lottie
                animationData={assigmentAnimation}
                style={{ height: 220 }}
              />
            </Card>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 1, fontFamily: "Poppins, sans-serif" }}
            >
              Assignment
            </Typography>
          </Grid>

          <Grid item xs={12} sm={16} md={4}>
            <Card sx={{ ...cardStyle, padding: "20px" }}>
              <Lottie
                animationData={timetableAnimation}
                style={{ height: 220 }}
              />
            </Card>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 1, fontFamily: "Poppins, sans-serif" }}
            >
              Timetable
            </Typography>
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ ...cardStyle, padding: "20px" }}>
              <Lottie
                animationData={notificationAnimation}
                style={{ height: 220 }}
              />
            </Card>
            <Typography
              variant="h6"
              align="center"
              sx={{ mt: 1, fontFamily: "Poppins, sans-serif" }}
            >
              Notifications
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
