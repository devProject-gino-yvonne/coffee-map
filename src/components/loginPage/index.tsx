'use client';
import { FormControl, TextField, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

const submitLogin = () => {
  console.log('login btn clicked');
};

const forgetPassword = () => {
  console.log('forget password clicked');
};

export default function LoginPage() {
  const t = useTranslations('LoginPage');

  return (
    <FormControl className="flex flex-col gap-y-3">
      <div className="flex flex-col gap-y-3">
        <TextField
          required
          id="account"
          label={t('accountLabel')}
          variant="outlined"
        />
        <TextField
          required
          id="password"
          label={t('passwordLabel')}
          variant="outlined"
        />
      </div>
      <div className="flex justify-end">
        <p
          onClick={() => forgetPassword()}
          className="text-xs text-gray-500 hover:underline"
        >
          {/* 忘記密碼 */}
          {t('forgetPassword')}
        </p>
      </div>
      <Button onClick={() => submitLogin()} size="small" variant="contained">
        {/* 登入 */}
        {t('loginButton')}
      </Button>
    </FormControl>
  );
}
