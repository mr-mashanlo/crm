import { useForm } from '@tanstack/react-form';
import { HTTPError } from 'ky';

import { useAuth } from '@/entities/auth';
import { mapServerErrors } from '@/shared/libs';

export const useSignUpForm = ( { onSuccess, onError }: { onSuccess?: () => void, onError?: () => void } ) => {

  const { signup } = useAuth();

  const form = useForm( {
    defaultValues: {
      email: 'one@company.com',
      password: 'one12345'
    },

    onSubmit: async ( { value, formApi } ) => {
      try {
        await signup( value );
        onSuccess?.();
      } catch ( error ) {
        if ( error instanceof HTTPError ) {
          formApi.setErrorMap( { onChange: { fields: mapServerErrors( error.data.errors ) } } );
        }
        onError?.();
      }
    }
  } );

  return form;

};