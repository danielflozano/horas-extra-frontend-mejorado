import { Link } from 'react-router-dom';
import { AuthLayout } from '../components/AuthLayout';
import { useLogin } from '../hooks/useLogin';
import { GlobalButton } from '@/components';
import { useAuth } from '@/context/AuthContext';

export const LoginPage = () => {
  const { register, handleSubmit, errors, loading, apiError, onSubmit } = useLogin();

  if(loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-editColor-3"></div>
      </div>
    );
  }

  return (
    <AuthLayout title="Iniciar Sesión">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* -> 8. Muestra el error de la API si existe */}
        {apiError && (
          <div
            className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <span className="block sm:inline">{apiError}</span>
          </div>
        )}
        <div className="pb-4">
          <label className="text-epaColor1 block pb-2 font-medium">
            Correo Electronico
          </label>
          <input
            type="email"
            className="w-full p-1 border border-epaColor1 rounded-md"
            {...register('email', {
              required: 'El correo electronico es obligatorio',
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
            {...register('password', {
              required: 'La contraseña es obligatoria',
              minLength: { value: 8, message: 'Minimo 8 caracteres' },
            })}
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>
        <GlobalButton type="submit" className="w-full p-1.5 mb-4">
          Iniciar Sesión
        </GlobalButton>
      </form>
      <div className="text-center">
        <p>
          ¿No recuerda su contraseña? haga click{' '}
          <Link to={'/recover/initiate'} className="text-blue-500 font-bold">
            Aqui
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};
