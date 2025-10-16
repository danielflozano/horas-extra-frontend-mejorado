import { GlobalButton } from '@/components';
import { useRecoverPassword } from '../hooks/useRecoverPassword';
import { AuthInput, AuthLayout, SuccessErrorMessage } from '../components';

export const VerifyCodePage = () => {
  const {
    register,
    handleSubmit,
    errors,
    onSubmitVerifyCode,
    accessErrorMessages,
  } = useRecoverPassword();

  return (
    <AuthLayout title="Recuperar Contraseña">
      <SuccessErrorMessage message={accessErrorMessages} />
      <form onSubmit={handleSubmit(onSubmitVerifyCode)}>
        <AuthInput
          label='Código de verificación'
          data='codigo'
          register={register}
          errors={errors} 
          rules={{
            required: 'El código es obligatorio',
          }}
        />
        <GlobalButton type='submit' className='w-full p-1.5'>
          Verificar código
        </GlobalButton>
      </form>
    </AuthLayout>
  );
};
