import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { registerUser, getRegistrationError } from '@/entities/Session';
import { appRoutes } from '@/shared/const/router';
import { useAppDispatch, useAppSelector } from '@/shared/lib/store/hooks';
import { Input } from '@/shared/ui/Input';
import { Button } from '@/shared/ui/Button';
import styles from './SignUpForm.module.scss';

const initialValues = {
  email: 'eve.holt@reqres.in',
  password: '',
  confirmPassword: '',
};

const validationSchema = Yup.object({
  email: Yup.string().trim().required('Это обязательное поле').email('Неверный формат e-mail'),
  password: Yup.string()
    .required('Это обязательное поле')
    .matches(/^\S*$/, 'Пробелы не допускаются')
    .min(5, 'Минимальная длина пароля 5 символов'),
  confirmPassword: Yup.string().oneOf([Yup.ref('password'), undefined], 'Пароли должны совпадать'),
});

export const SignUpForm = memo(() => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const errorText = useAppSelector(getRegistrationError);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: async (values) => {
      const { confirmPassword, ...body } = values;
      const result = await dispatch(registerUser(body));
      if (result.payload) {
        navigate(appRoutes.mainPage, { replace: true });
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <h1 className={styles.title}>Регистрация</h1>
      <Input
        placeholder='E-mail'
        label='E-mail'
        name='email'
        id='email'
        autoComplete='email'
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        disabled={formik.isSubmitting}
        error={!!formik.errors.email && !!formik.touched.email}
        helperText={formik.errors.email}
      />
      <Input
        label='Пароль'
        type='password'
        name='password'
        id='password'
        autoComplete='new-password'
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        disabled={formik.isSubmitting}
        error={!!formik.errors.password && !!formik.touched.password}
        helperText={formik.errors.password}
      />
      <Input
        label='Подтвердите пароль'
        type='password'
        name='confirmPassword'
        id='confirmPassword'
        autoComplete='new-password'
        required
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        disabled={formik.isSubmitting}
        error={!!formik.errors.confirmPassword && !!formik.touched.confirmPassword}
        helperText={formik.errors.confirmPassword}
      />
      <Button type='submit' disabled={formik.isSubmitting} className={styles.button}>
        Зарегистрироваться
      </Button>
      {errorText && <p className={styles.error}>{errorText}</p>}
    </form>
  );
});
