import { fetchApi } from "@/utils/fetchApi";
import { Input, Grid, Button } from "@nextui-org/react";
import { useFormik } from "formik";
import withAuth from "../../src/HOC/withAuth";

type createDataType = {
  name: string;
  password: string;
  phone: string;
  email: string;
};

const validate = (values: createDataType) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = "Required";
  } else if (values.name.length > 1000) {
    errors.name = "Must be 1000 characters or less";
  } else if (values.name.length < 2) {
    errors.name = "Must be 2 characters or more";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 8) {
    errors.password = "Must be 8 characters or more";
  } else if (
    !/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/i.test(
      values.password
    )
  ) {
    errors.password =
      "Password, should have at least a number, a special character";
  }

  if (!values.phone) {
    errors.phone = "Required";
  } else if (!/(84|0[3|5|7|8|9])+([0-9]{8})\b/g.test(values.phone)) {
    errors.phone = "Invalid phone number";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

const CreatePage = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      phone: "",
      email: "",
    },
    validate,
    onSubmit: (values: createDataType, { resetForm }) => {
      // call login api
      fetchApi("http://localhost:3000/api/create", {
        method: "POST",
        body: JSON.stringify(values),
      }).then(() => {
        alert("Create successfully");
        resetForm();
      });
    },
  });

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Register</h1>
      <Grid.Container gap={2} justify="center">
        <form onSubmit={formik.handleSubmit}>
          <Grid.Container gap={2} justify="center">
            <Grid md={4}>
              <Input
                id="name"
                name="name"
                type="text"
                label="Name"
                placeholder="Name"
                onChange={formik.handleChange}
                value={formik.values.name}
                helperColor="error"
                helperText={formik.errors.name ? formik.errors.name : ""}
                width="250px"
              />
            </Grid>
            <Grid md={4}>
              <Input
                id="password"
                name="password"
                type="password"
                label="Password"
                placeholder="Password"
                onChange={formik.handleChange}
                value={formik.values.password}
                helperColor="error"
                helperText={
                  formik.errors.password ? formik.errors.password : ""
                }
                width="250px"
              />
            </Grid>
          </Grid.Container>
          <Grid.Container gap={2} justify="center">
            <Grid md={4}>
              <Input
                id="phone"
                name="phone"
                type="phone"
                label="Phone"
                placeholder="Phone"
                onChange={formik.handleChange}
                value={formik.values.phone}
                helperColor="error"
                helperText={formik.errors.phone ? formik.errors.phone : ""}
                width="250px"
              />
            </Grid>
            <Grid md={4}>
              <Input
                id="email"
                name="email"
                type="email"
                label="Email"
                placeholder="Email"
                onChange={formik.handleChange}
                value={formik.values.email}
                helperColor="error"
                helperText={formik.errors.email ? formik.errors.email : ""}
                width="250px"
              />
            </Grid>
            <Grid.Container justify="center" gap={4} style={{ marginTop: 20 }}>
              <Button type="submit">Submit</Button>
            </Grid.Container>
          </Grid.Container>
        </form>
      </Grid.Container>
    </>
    //   {/* </div>
    // </main> */}
  );
};

export default withAuth(CreatePage);
