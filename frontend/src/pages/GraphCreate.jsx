import React, { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Button,
  Grid,
  TextField,
  CircularProgress,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Divider from "@mui/material/Divider";
import { ScatterChart } from "@mui/x-charts/ScatterChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import ScatterPlotIcon from "@mui/icons-material/ScatterPlot";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import EqualizerRoundedIcon from "@mui/icons-material/EqualizerRounded";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";
import PieChartIcon from "@mui/icons-material/PieChart";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import CropIcon from "@mui/icons-material/Crop";
import AdsClickIcon from "@mui/icons-material/AdsClick";
import GestureIcon from "@mui/icons-material/Gesture";
export default function GraphCreate() {
  const data = [
    {
      id: "data-0",
      x1: 329.39,
      x2: 391.29,
      y1: 443.28,
      y2: 153.9,
    },
    {
      id: "data-1",
      x1: 96.94,
      x2: 139.6,
      y1: 110.5,
      y2: 217.8,
    },
    {
      id: "data-2",
      x1: 336.35,
      x2: 282.34,
      y1: 175.23,
      y2: 286.32,
    },
    {
      id: "data-3",
      x1: 159.44,
      x2: 384.85,
      y1: 195.97,
      y2: 325.12,
    },
    {
      id: "data-4",
      x1: 188.86,
      x2: 182.27,
      y1: 351.77,
      y2: 144.58,
    },
    {
      id: "data-5",
      x1: 143.86,
      x2: 360.22,
      y1: 43.253,
      y2: 146.51,
    },
    {
      id: "data-6",
      x1: 202.02,
      x2: 209.5,
      y1: 376.34,
      y2: 309.69,
    },
    {
      id: "data-7",
      x1: 384.41,
      x2: 258.93,
      y1: 31.514,
      y2: 236.38,
    },
    {
      id: "data-8",
      x1: 256.76,
      x2: 70.571,
      y1: 231.31,
      y2: 440.72,
    },
    {
      id: "data-9",
      x1: 143.79,
      x2: 419.02,
      y1: 108.04,
      y2: 20.29,
    },
    {
      id: "data-10",
      x1: 103.48,
      x2: 15.886,
      y1: 321.77,
      y2: 484.17,
    },
    {
      id: "data-11",
      x1: 272.39,
      x2: 189.03,
      y1: 120.18,
      y2: 54.962,
    },
    {
      id: "data-12",
      x1: 23.57,
      x2: 456.4,
      y1: 366.2,
      y2: 418.5,
    },
    {
      id: "data-13",
      x1: 219.73,
      x2: 235.96,
      y1: 451.45,
      y2: 181.32,
    },
    {
      id: "data-14",
      x1: 54.99,
      x2: 434.5,
      y1: 294.8,
      y2: 440.9,
    },
    {
      id: "data-15",
      x1: 134.13,
      x2: 383.8,
      y1: 121.83,
      y2: 273.52,
    },
    {
      id: "data-16",
      x1: 12.7,
      x2: 270.8,
      y1: 287.7,
      y2: 346.7,
    },
    {
      id: "data-17",
      x1: 176.51,
      x2: 119.17,
      y1: 134.06,
      y2: 74.528,
    },
    {
      id: "data-18",
      x1: 65.05,
      x2: 78.93,
      y1: 104.5,
      y2: 150.9,
    },
    {
      id: "data-19",
      x1: 162.25,
      x2: 63.707,
      y1: 413.07,
      y2: 26.483,
    },
    {
      id: "data-20",
      x1: 68.88,
      x2: 150.8,
      y1: 74.68,
      y2: 333.2,
    },
    {
      id: "data-21",
      x1: 95.29,
      x2: 329.1,
      y1: 360.6,
      y2: 422.0,
    },
    {
      id: "data-22",
      x1: 390.62,
      x2: 10.01,
      y1: 330.72,
      y2: 488.06,
    },
  ];
  const [formats, setFormats] = React.useState(() => ["bold", "italic"]);

  const handleFormat = (event, newFormats) => {
    setFormats(newFormats);
  };
  return (
    <>
      <Box
        sx={{
          bgcolor: "white",
          borderRadius: "16px",
          boxShadow: 0,
          border: "2px solid #EAEAEA",
          padding: 3,
          marginBottom: 3,
          display: "flex",
        //   height: 200,
          flexDirection: "column",
          overflowY: "auto", // Ensure content inside can scroll
          //   backgroundColor: "yellow",
        }}
      >
        <Box
          sx={{
            bgcolor: "#EAEAEA", // Background color
            borderRadius: "50px 50px 0px 50px", // Rounded edges
            border: "2px solid #FFFFFF", // Border with white color
            display: "flex",
            alignItems: "left",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            ml: "auto", // Align bubble to the right
            width: "70%",
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "left",
              fontSize: "14px",
              color: "#000", // Black text color
              paddingX: 5, // Add padding inside bubble
              margin: 2,
            }}
          >
            Create a React component called PieChartComponent that displays a
            pie chart icon along with labels for "Series A" and "Series B". Use
            Material-UI's PieChartIcon for the icon, and ensure the layout is
            visually appealing with proper spacing.
          </Typography>
        </Box>
        <Box
          sx={{
            width: 171,
            height: 50, // Chat bubble height
            bgcolor: "rgba(49, 49, 50, 0.06)", // #313132 with 6% opacity
            borderRadius: "50px 50px 50px 0px",
            border: "2px solid #EAEAEA", // Border with white color
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mt: 1, // Margin on top for spacing
            mr: "auto", // Align bubble to the left
          }}
        >
          <Typography
            variant="body2"
            sx={{
              textAlign: "center",
              fontSize: "14px",
              color: "#BABABA",
              paddingX: 2,
            }}
          >
            Almost there
          </Typography>
          <CircularProgress size={20} color="#EAEAEA" />
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 1,
          borderRadius: "12px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
          marginBottom: "100px",
          backgroundColor: "#E7E7E8", // Set the background color
        }}
      >
        {/* Icons Section */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%", // Full width for spacing adjustment
            marginBottom: 0,
          }}
        >
          <IconButton>
            <EqualizerRoundedIcon />
          </IconButton>

          <IconButton>
            <SendIcon />
          </IconButton>
        </Box>
        <Divider sx={{ width: "auto", marginY: 1, marginX: 2,backgroundColor: "lightgray",
                           borderColor: "lightgray", }} />
        <Box
          sx={{
            backgroundColor: "white",
            width: "90%",
            borderRadius: "8px",
            margin: 2,
          }}
        >
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 0fr)",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: 2,
              borderRadius: "8px",
              width: "100%",
            }}
          >
            <IconButton>
              <TimelineIcon />
            </IconButton>
            <IconButton
              sx={{
                color: "black", // Set the color of the icon
              }}
            >
              <ScatterPlotIcon />
            </IconButton>
            <IconButton>
              <SignalCellularAltIcon />
            </IconButton>
            <IconButton>
              <StackedBarChartIcon />
            </IconButton>
            <IconButton>
              <PieChartIcon />
            </IconButton>
            <IconButton>
              <WaterfallChartIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              width: "fit-content",
              margin: "auto",
              padding: 1,
              backgroundColor: "white",
              borderRadius: 2,
            }}
          >
            <ScatterChart
              width={470}
              height={250}
              series={[
                {
                  label: "Series A",
                  data: data.map((v) => ({ x: v.x1, y: v.y1, id: v.id })),
                },
                {
                  label: "Series B",
                  data: data.map((v) => ({ x: v.x1, y: v.y2, id: v.id })),
                },
              ]}
            />{" "}
          </Box>
          <ToggleButtonGroup
            value={formats}
            onChange={handleFormat}
            aria-label="text formatting"
            sx={{ margin: 2, borderColor: "lightgray",}}
          >
            <ToggleButton value="bold" aria-label="bold">
              <AdsClickIcon />
            </ToggleButton>
            <ToggleButton value="italic" aria-label="italic" disabled>
              <CropIcon />
            </ToggleButton>
            <ToggleButton value="underlined" aria-label="underlined" disabled>
              <GestureIcon />
            </ToggleButton>
            <ToggleButton value="color" aria-label="color" disabled>
              <FormatColorFillIcon />
              <ArrowDropDownIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
    </>
  );
}