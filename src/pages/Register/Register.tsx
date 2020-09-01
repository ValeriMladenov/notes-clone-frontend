import React, { useState } from "react";
import Alert from "../../components/Alert/Alert";
import { AlertProp } from "../../components/Alert/interfaces";
import { RegisterFields } from "./interfaces";
import { useSignUpMutation } from "../../generated/graphql";
import { useHistory } from "react-router-dom";
const Register: React.FC = () => {
  const history = useHistory();
  const [FieldErrors, setFieldErrors] = useState<AlertProp>({
    title: "",
    desc: "",
  });
  const [hasError, setHasError] = useState<boolean>(false);
  const [loginState, setLoginState] = useState<RegisterFields>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [RegisterUser] = useSignUpMutation({
    variables: {
      email: String(loginState.email),
      password: String(loginState.password),
      name: String(loginState.firstName + " " + loginState.lastName),
    },
    onCompleted: (result) => {
      localStorage.setItem("token", result.signUp.token);
      history.push("/notes");
    },
    onError: () => {
      setFieldErrors({
        title: "Please fill in all fields!",
        desc: "some coool desc",
      });
      setHasError(true);
    },
  });

  const onChangeField = (e: { target: { name: string; value: string } }) =>
    setLoginState({
      ...loginState,
      [String(e.target.name)]: String(e.target.value),
    });
  const LoginSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (
      loginState.firstName === "" ||
      loginState.lastName === "" ||
      loginState.email === "" ||
      loginState.password === ""
    ) {
      setFieldErrors({
        title: "Please fill in all fields!",
        desc: "some coool desc",
      });
      setHasError(true);
    } else {
      RegisterUser();
    }
  };
  return (
    <div className="h-screen overflow-hidden flex items-center justify-center bg-gray-200">
      <form
        onSubmit={LoginSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col my-2"
      >
        <div className="text-left mb-6 text-gray-900 font-extrabold text-4xl">
          Register
        </div>
        {hasError ? (
          <Alert title={FieldErrors.title} desc={FieldErrors.desc} />
        ) : (
          ""
        )}
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-gray-900 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              placeholder="Jane"
              name="firstName"
              value={String(loginState.firstName)}
              onChange={(e) => onChangeField(e)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="text"
              value={String(loginState.lastName)}
              name="lastName"
              placeholder="Doe"
              onChange={(e) => onChangeField(e)}
            />
          </div>
        </div>
        <div className="-mx-3 md:flex mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-gray-900 border border-red rounded py-3 px-4 mb-3"
              id="grid-first-name"
              type="text"
              name="email"
              value={String(loginState.email)}
              placeholder="work@valeri.ml"
              onChange={(e) => onChangeField(e)}
            />
          </div>
          <div className="md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-800 text-xs font-bold mb-2">
              Password
            </label>
            <input
              className="appearance-none block w-full bg-grey-lighter text-gray-900 border border-grey-lighter rounded py-3 px-4"
              id="grid-last-name"
              type="password"
              name="password"
              value={String(loginState.password)}
              placeholder="*******"
              onChange={(e) => onChangeField(e)}
            />
          </div>
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/login"
          >
            Login?
          </a>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Sign up
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
