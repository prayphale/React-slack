import React, { ComponentType } from "react";

import { auth } from "src/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

export interface WithAuthProps {
  user: any;
  loading: any;
  auth: any;
}

export const Wrapper =
  <P extends WithAuthProps = WithAuthProps>(Component: ComponentType<P>) =>
  (props: P) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [user, loading] = useAuthState(auth);

    return <Component {...props} user={user} loading={loading} auth={auth} />;
  };
