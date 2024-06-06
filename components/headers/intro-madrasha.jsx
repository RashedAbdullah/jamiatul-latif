"use client";

import { Noto_Serif_Bengali } from "next/font/google";
const bengali = Noto_Serif_Bengali({ subsets: ["bengali"] });

export const metadata = {
  title: "জামিয়াতুল লতিফ - হোম",
  description:
    "জামিয়াতুল লতিফ মাদরাসা। রূপগঞ্জ, নারায়ণগঞ্জ। একটি ধর্মীয় কওমি শিক্ষা প্রতিষ্ঠান। ঢাকা বিভাগের নারায়ণগঞ্জ জেলার রূপগঞ্জ থানার বরাব এলাকায় অবস্থিত।",
};
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function IntroMadrasha() {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">পরিচিতি</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>মাদরাসা সম্পর্কে</MenuItem>
          <MenuItem value={20}>শিক্ষকবৃন্দ</MenuItem>
          <MenuItem value={30}>ছাত্র-সংখ্যা</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
