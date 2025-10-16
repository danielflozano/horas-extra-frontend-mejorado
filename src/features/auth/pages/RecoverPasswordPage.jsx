import { AuthLayout } from '../components/AuthLayout';
import { SuccessErrorMessage } from '../components/SuccessErrorMessage';
import { useRecoverPassword } from '../hooks/useRecoverPassword';
import { GlobalButton } from '@/components';

export const RecoverPasswordPage = () => {
  const {
    accessErrorMessages,
    register,
    handleSubmit,
    errors,
    onSubmitRecoverPassword,
    onClickBack,
  } = useRecoverPassword();

  return (
    <AuthLayout title="Recuperar Contraseña">
      <SuccessErrorMessage message={accessErrorMessages} />
      <form onSubmit={handleSubmit(onSubmitRecoverPassword)}>
        <div className="pb-4">
          <label className="text-epaColor1 block pb-2 font-medium">
            Correo electrónico
          </label>
          <input
            type="text"
            className="w-full p-1 border border-epaColor1 rounded-md"
            {...register('email', {
              required: 'El correo electrónico es obligatorio',
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <GlobalButton type="submit" className="w-full p-1.5 mb-4">
          Enviar Código
        </GlobalButton>
        {/* TODO: Hacer la funcion de regresar y de una vez eliminar el error */}
        <GlobalButton variant="secondary" onClick={onClickBack} className="w-full p-1.5">
          Regresar
        </GlobalButton>
      </form>
    </AuthLayout>
  );
};
