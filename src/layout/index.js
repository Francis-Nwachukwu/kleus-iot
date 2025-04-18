import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { sidebarContents } from "utils/data";
import Fade from "@mui/material/Fade";
import { Popover } from "@mui/material";

const drawerWidth = 290;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

export default function Layout({ children, className }) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);
  const [selectedAccordion, setSelectedAccordion] = React.useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const popoverOpen = Boolean(anchorEl);
  const id = popoverOpen ? "simple-popover" : undefined;

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExpansion = (id) => {
    setSelectedAccordion(id);
    selectedAccordion === id
      ? setExpanded((prevExpanded) => !prevExpanded)
      : setExpanded(() => true);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" className="relative" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[
              {
                marginRight: 5,
              },
              open && { display: "none" },
            ]}
          >
            <MenuIcon />
          </IconButton>
          <div className="w-full flex justify-between items-center">
            <Link to={"/dashboard"}>
              <p className="text-[18px] max-md:text-[14px] font-semibold">
                Haymini platform
              </p>
            </Link>
            <div
              aria-describedby={id}
              onClick={handleClick}
              className="flex items-center gap-2 cursor-pointer"
            >
              <p className="text-[14px] max-md:text-[12px]">Ayobami</p>
              <IoMdArrowDropdown className="text-white" />
            </div>
          </div>
        </Toolbar>
        <Popover
          id={id}
          open={popoverOpen}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <div
            className={`w-[30vw] max-md:w-fit bg-white shadow-lg p-2 flex max-md:flex-col gap-2 justify-between items-center`}
          >
            <div className="bg-[#00a65a] text-white hover:bg-opacity-90 cursor-pointer px-4 py-2 rounded-md text-[14px] max-md:text-[12px]">
              Modify Password
            </div>
            <div className="bg-[#dd4b39] max-md:w-full text-white hover:bg-opacity-90 cursor-pointer px-4 py-2 rounded-md text-[14px] max-md:text-[12px]">
              Logout
            </div>
          </div>
        </Popover>
      </AppBar>
      <Drawer variant="permanent" open={open} className="w-[500px]">
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div>
          {sidebarContents.map(({ id, title, icon, children }) => (
            <Accordion
              key={id}
              expanded={selectedAccordion === id && expanded}
              onChange={() => handleExpansion(id)}
              className="!m-0 px-4 py-2"
              slots={{ transition: Fade }}
              slotProps={{ transition: { timeout: 400 } }}
              sx={[
                selectedAccordion === id && expanded
                  ? {
                      "& .MuiAccordion-region": {
                        height: "auto",
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "block",
                      },
                    }
                  : {
                      "& .MuiAccordion-region": {
                        height: 0,
                      },
                      "& .MuiAccordionDetails-root": {
                        display: "none",
                      },
                    },
              ]}
            >
              <AccordionSummary
                className="!min-h-[30px] !p-0"
                expandIcon={<ArrowDropDownIcon />}
              >
                <div className="flex gap-2 items-center justify-start">
                  {icon}
                  {open && (
                    <p className="text-[16px] max-md:text-[14px] font-semibold">
                      {title}
                    </p>
                  )}
                </div>
              </AccordionSummary>
              <AccordionDetails className="!flex !flex-col !gap-1">
                {children.map(({ id, title, icon, href }) => (
                  <Link
                    aria-label={title}
                    title={title}
                    className="relative left-2"
                    key={id}
                    to={href}
                  >
                    <div className="flex gap-2 items-center">
                      <span className="text-[12px]">{icon}</span>
                      {open && (
                        <p className="text-[14px] max-md:text-[12px]">
                          {title}
                        </p>
                      )}
                    </div>
                  </Link>
                ))}
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </Drawer>
      <div
        className={`mt-16 overflow-y-auto bg-[#ecf0f5] h-[calc(100vh-64px)] flex gap-6 max-md:gap-3 p-6 max-md:p-4 max-sm:p-2 ${className} flex-col flex-1`}
      >
        {children}
      </div>
    </Box>
  );
}
