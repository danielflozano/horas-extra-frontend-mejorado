import { GlobalButton } from '@/components';
import { AuthLayout } from '../components/AuthLayout';
import { SuccessErrorMessage } from '../components/SuccessErrorMessage';
import { useRecoverPassword } from '../hooks/useRecoverPassword';

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
        <div className="pb-4">
          <label className="text-epaColor1 block pb-2 font-medium">
            Código de verificación
          </label>
          <input
            type="text"
            className="w-full p-1 border border-epaColor1 rounded-md"
            {...register('codigo', {
              required: 'El código es obligatorio',
            })}
          />
          {errors.codigo && (
            <p className="text-red-500 text-sm">{errors.codigo.message}</p>
          )}
        </div>
        <GlobalButton type='submit' className='w-full p-1.5'>
          Verificar código
        </GlobalButton>
      </form>
    </AuthLayout>
  );
};
