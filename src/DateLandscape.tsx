import { FormControl, Stack } from "@mui/material";
import { StaticDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { ptBR } from "@mui/x-date-pickers/locales";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";

export default function DateLandscape() {
  const [valueDate, setValueDate] = useState<Dayjs | null>(dayjs());

  return (
    <FormControl sx={{ marginLeft: "95px" }}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="pt-BR"
        localeText={
          ptBR.components.MuiLocalizationProvider.defaultProps.localeText
        }
      >
        <Stack spacing={3}>
          <StaticDatePicker
            orientation="landscape"
            views={["year", "month"]}
            openTo="month"
            minDate={dayjs("2009-01-01")}
            maxDate={dayjs("2023-12-31")}
            value={valueDate}
            onChange={(newValue) => {
              setValueDate(newValue);
            }}
          />
        </Stack>
      </LocalizationProvider>
    </FormControl>
  );
}
