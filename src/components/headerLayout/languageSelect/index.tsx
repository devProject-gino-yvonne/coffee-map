'use client';
import { useState } from 'react';
import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
} from '@mui/material';

export default function LanguageSelect() {
  const [language, setLanguage] = useState('zh');

  const handleChange = (event: SelectChangeEvent) => {
    setLanguage(event.target.value);
    console.log(`Selected language: ${event.target.value}`);
  };

  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <Select
        name="language"
        id="languageSelect"
        value={language}
        onChange={handleChange}
      >
        <MenuItem value={'zh'}>繁體中文</MenuItem>
        <MenuItem value={'en'}>English</MenuItem>
      </Select>
    </FormControl>
  );
}
