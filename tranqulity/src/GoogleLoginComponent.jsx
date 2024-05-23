import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function GoogleLoginComponent() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
  };

  const onFailure = (response) => {
    console.log('Login Failed:', response);
  };

  return (
    <GoogleOAuthProvider clientId="102354066473-2ada5u5b1pc3bm9c1rjqmk065aacp1sd.apps.googleusercontent.com">
      <GoogleLogin
        onSuccess={onSuccess}
        onFailure={onFailure}
        useOneTap
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginComponent;
