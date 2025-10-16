import { AuthLayout } from '../components/AuthLayout';
import { SuccessErrorMessage } from '../components/SuccessErrorMessage';
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
          <div className="pb-4">
            <label className="text-epaColor1 block pb-2 font-medium">
              Correo electrónico
            </label>
            <input
              type="text"
              className="w-full p-1 border border-epaColor1 rounded-md"
              defaultValue={email}
              {...register('email', {
                required: 'El correo electrónico es obligatorio',
              })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
          <div className="pb-4">
            <label className="text-epaColor1 block pb-2 font-medium">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full p-1 border border-epaColor1 rounded-md"
              {...register('nuevaPassword', {
                required: 'La contraseña es obligatoria',
                minLength: { value: 8, message: 'Minimo 8 caracteres' },
              })}
            />
            {errors.nuevaPassword && (
              <p className="text-red-500 text-sm">{errors.nuevaPassword.message}</p>
            )}
          </div>
          <div className="pb-4">
            <label className="text-epaColor1 block pb-2 font-medium">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              className="w-full p-1 border border-epaColor1 rounded-md"
              {...register('confirmarPassword', {
                required: 'La contraseña es obligatoria',
                minLength: { value: 8, message: 'Minimo 8 caracteres' },
              })}
            />
            {errors.confirmarPassword && (
              <p className="text-red-500 text-sm">{errors.confirmarPassword.message}</p>
            )}
          </div>
          <GlobalButton type='submit' className='w-full p-1.5'>
            Cambiar Contraseña
          </GlobalButton>
        </form>
    </AuthLayout>
  );
};
