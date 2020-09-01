import * as React from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { useLoadUserQuery } from "../generated/graphql";

interface PrivateRouteProps extends RouteProps {
  // tslint:disable-next-line:no-any
  component?: any;
  // tslint:disable-next-line:no-any
  children?: any;
}

const PrivateRoute = (props: PrivateRouteProps) => {
  const [isAuth, setIsAuth] = React.useState<boolean>(true);
  const { component: Component, children, ...rest } = props;
  const { loading } = useLoadUserQuery({
    onError: () => {
      localStorage.removeItem("token");
      setIsAuth(false);
    },
  });
  if (loading) {
    return <div>Loading</div>;
  }
  return (
    <Route
      {...rest}
      render={(routeProps) =>
        isAuth ? (
          Component ? (
            <Component {...routeProps} />
          ) : (
            children
          )
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
