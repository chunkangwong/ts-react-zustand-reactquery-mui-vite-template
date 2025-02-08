import DeleteIcon from "@mui/icons-material/Delete";
import SearchIcon from "@mui/icons-material/Search";
import { SxProps, Theme } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import dayjs from "dayjs";
import { motion } from "motion/react";
import { type SearchHistoryItemType } from "../../types";

interface SearchHistoryItemProps {
  searchHistoryItem: SearchHistoryItemType;
  onSearch: (formValues: { city: string; country: string }) => void;
  onDelete: (id: number) => void;
}

const iconButtonStyle: SxProps<Theme> = {
  backgroundColor: "bg.itemIconButton",
  borderWidth: "2px",
  borderStyle: "solid",
  borderColor: "border.itemIconButton",
};

export const SearchHistoryItem = ({
  searchHistoryItem: { city, country, datetime, id },
  onDelete,
  onSearch,
}: SearchHistoryItemProps) => {
  const handleDelete = () => {
    onDelete(id);
  };

  const handleSearch = () => {
    onSearch({
      city,
      country,
    });
  };

  return (
    <Stack
      direction="row"
      width="100%"
      alignItems="center"
      gap={1}
      sx={{
        padding: "0 20px",
        height: "60px",
        backgroundColor: "bg.item",
        borderRadius: "16px",
        width: "100%",
        boxSizing: "border-box",
      }}
      component={motion.div}
      layout
    >
      <Stack
        marginRight="auto"
        width="100%"
        direction={{
          md: "row",
          sx: "column",
        }}
      >
        <Typography
          sx={{
            typography: {
              md: "body1",
              xs: "body2",
            },
          }}
        >
          {city}, {country}
        </Typography>
        <Typography
          marginLeft={{ md: "auto" }}
          sx={{
            color: "font.itemInfo",
            typography: {
              md: "body2",
              xs: "caption",
            },
          }}
        >
          {dayjs(datetime).format("DD-MM-YYYY hh:mmA")}
        </Typography>
      </Stack>
      <Stack direction="row" gap={1}>
        <Tooltip title="Search" disableInteractive>
          <IconButton size="small" onClick={handleSearch} sx={iconButtonStyle}>
            <SearchIcon />
          </IconButton>
        </Tooltip>
        <Tooltip title="Delete" disableInteractive>
          <IconButton size="small" onClick={handleDelete} sx={iconButtonStyle}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Stack>
    </Stack>
  );
};
