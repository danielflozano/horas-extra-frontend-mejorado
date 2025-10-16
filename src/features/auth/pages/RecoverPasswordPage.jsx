import { GlobalButton } from '@/components';
import { AuthInput, AuthLayout, SuccessErrorMessage } from '../components';
import { useRecoverPassword } from '../hooks/useRecoverPassword';

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
        <AuthInput
          label='Correo Electrónico'
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
