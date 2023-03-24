import { Formik, Form } from "formik";

const CustomForm = ({ submitHandler, initialValues, validation, children }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitHandler}
      validationSchema={validation}
      
    >
         <Form autoComplete="off">
          {children}
        </Form>
    </Formik>
  );
};

export default CustomForm;
