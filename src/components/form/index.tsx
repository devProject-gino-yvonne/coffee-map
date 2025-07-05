import { FormControl, InputLabel, Input } from '@mui/material';

export default function Form() {
  return (
    <>
      <FormControl>
        <InputLabel htmlFor="account">Account</InputLabel>
        <Input id="account" />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="password">Password</InputLabel>
        <Input id="password" />
      </FormControl>
    </>
  );
}
