import { NextPage } from "next";
import { useRouter } from "next/router";

const withAuth = (Component: NextPage<any>) => {
  const Wrapper = (props: any) => {
    const router = useRouter();
    const auth = props.auth;
    if (!auth || auth === "false") {
      // redirect
      typeof window !== "undefined" && router.push("/login");
      return null;
    }

    return <Component {...props} />;
  };

  Wrapper.getInitialProps = async (ctx: { [key: string]: any }) => {
    return { auth: ctx?.req?.cookies?.auth };
  };

  return Wrapper;
};

export default withAuth;
