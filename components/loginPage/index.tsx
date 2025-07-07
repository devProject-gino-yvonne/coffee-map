'use client';
import { useState } from 'react';
import * as z from 'zod/v4';
import { FormControl, TextField, Button } from '@mui/material';
import { useTranslations } from 'next-intl';

const LoginSchema = z.object({
  account: z.email('請輸入正確的電子信箱').min(1, '帳號為必填'),
  password: z.string().min(1, '密碼為必填'), //TODO:密碼驗證格式待確認
});
type LoginForm = z.infer<typeof LoginSchema>;

const forgetPassword = () => {
  console.log('forget password clicked，準備開光箱');
};

export default function LoginPage() {
  const [loginFormData, setLoginFormData] = useState<LoginForm>({
    account: '',
    password: '',
  });

  const [errorMSGs, setErrorMSGs] = useState<
    Partial<Record<keyof LoginForm, string>>
  >({});

  const t = useTranslations('LoginPage');

  const handleChange =
    (field: keyof LoginForm) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setLoginFormData({ ...loginFormData, [field]: e.target.value });
      setErrorMSGs({ ...errorMSGs, [field]: '' });
    };

  const handleSubmitLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const result = LoginSchema.safeParse(loginFormData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof LoginForm, string>> = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof LoginForm;
        fieldErrors[key] = issue.message;
      }
      setErrorMSGs(fieldErrors);
      return;
    }

    //TODO:送出登入資料的api
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <FormControl className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-3">
          <TextField
            required
            id="account"
            label={t('accountLabel')}
            variant="outlined"
            value={loginFormData.account}
            error={!!errorMSGs.account}
            helperText={errorMSGs.account}
            onChange={handleChange('account')}
          />
          <TextField
            required
            id="password"
            label={t('passwordLabel')}
            type="password"
            variant="outlined"
            value={loginFormData.password}
            error={!!errorMSGs.password}
            helperText={errorMSGs.password}
            onChange={handleChange('password')}
          />
        </div>
        <div className="flex justify-end">
          <p
            onClick={() => forgetPassword()}
            className="text-xs text-gray-500 hover:underline cursor-pointer"
          >
            {t('forgetPassword')}
          </p>
        </div>
        <Button
          type="submit"
          size="small"
          variant="contained"
          color="secondary"
        >
          {t('loginButton')}
        </Button>
      </FormControl>
    </form>
  );
}
