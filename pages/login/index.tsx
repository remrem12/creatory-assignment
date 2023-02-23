import { fetchApi } from "@/utils/fetchApi";
import { Input, Grid, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import cookie from "react-cookies";
import { useRouter } from "next/router";

type createDataType = {
  username: string;
  password: string;
};

const validate = (values: createDataType) => {
  const errors: any = {};
  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.password) {
    errors.password = "Required";
  }
  return errors;
};

const LoginPage = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values: createDataType, { resetForm }) => {
      // call login api
      fetchApi("http://localhost:3000/api/auth", {
        method: "POST",
        body: JSON.stringify(values),
      }).then((res) => {
        if (res) {
          cookie.save("auth", res.auth, {});
          resetForm();
          router.push("/");
        }
      });
    },
  });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Signin</h1>
      <Grid.Container gap={2} justify="center">
        <form onSubmit={formik.handleSubmit}>
          <Grid md={6}>
            <Input
              id="username"
              name="username"
              type="text"
              label="Name"
              placeholder="Name"
              onChange={formik.handleChange}
              value={formik.values.username}
              helperColor="error"
              helperText={formik.errors.username ? formik.errors.username : ""}
              width="250px"
            />
          </Grid>
          <Grid md={6}>
            <Input
              id="password"
              name="password"
              type="password"
              label="Password"
              placeholder="Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              helperColor="error"
              helperText={formik.errors.password ? formik.errors.password : ""}
              width="250px"
            />
          </Grid>
          <Grid.Container gap={2} justify="center">
            <Grid.Container justify="center" gap={4} style={{ marginTop: 20 }}>
              <Button type="submit">Login</Button>
            </Grid.Container>
          </Grid.Container>
        </form>
      </Grid.Container>
    </>
  );
};

export default LoginPage;
