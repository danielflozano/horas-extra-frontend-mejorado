import { AuthInput, AuthLayout, SuccessErrorMessage } from '../components';
import { useRecoverPassword } from '../hooks/useRecoverPassword';
import { GlobalButton } from '@/components';

export const ResetPasswordPage = () => {
  const {
    register,
    handleSubmit,
    onSubmitResetPassword,
    errors,
    accessErrorMessages,
    email,
  } = useRecoverPassword();

  return (
    <AuthLayout title="Recuperar Contraseña">
      <SuccessErrorMessage message={accessErrorMessages} />
        <form onSubmit={handleSubmit(onSubmitResetPassword)}>
          <AuthInput
            label='Correo Electrónico'
            defaultValue={email}
            data='email'
            register={register}
            errors={errors} 
            rules={{
              required: 'El correo electronico es obligatorio',
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Correo electrónico no válido",
              }
            }}
          />
          <AuthInput
            type='password'
            label='Nueva Contraseña'
            data='nuevaPassword'
            register={register}
            errors={errors} 
            rules={{
              required: 'La contraseña es obligatoria',
              minLength: { value: 8, message: 'Minimo 8 caracteres' },
            }}
          />
          <AuthInput
            type='password'
            label='Confirmar Contraseña'
            data='confirmarPassword'
            register={register}
            errors={errors} 
            rules={{
              required: 'La contraseña es obligatoria',
              minLength: { value: 8, message: 'Minimo 8 caracteres' },
            }}
          />
          <GlobalButton type='submit' className='w-full p-1.5'>
            Cambiar Contraseña
          </GlobalButton>
        </form>
    </AuthLayout>
  );
};
