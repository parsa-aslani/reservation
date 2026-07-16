// import
import { contactValidation } from "../../validations/contact-validations";
import { useEffect, useState } from "react";
// mui
import { Box, Grid, TextField, useTheme, Button, Zoom } from "@mui/material";
// react icons
import { Form, Formik } from "formik";
// email js
import emailjs from "@emailjs/browser";
// toast
import { toast } from "react-toastify";
// set jsx
const ConectMeForm = () => {
  const theme = useTheme();
  const [zoomLoading, setZoomLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setZoomLoading(true);
    return () => {
      setZoomLoading(false);
    };
  }, []);
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        message: "",
      }}
      validationSchema={contactValidation}
      onSubmit={(value, { resetForm }) => {
        setLoading(true);
        emailjs
          .send(
            "service_gwoape8",
            "template_x9f3f68",
            value,
            "GYtkrpahN8gm_MTb8",
          )
          .then(() => {
            toast.success("ایمیل ارسال شد");
            resetForm();
          })
          .catch((err) => {
            console.log(err);
            toast.error("ارسال ایمیل با مشکل مواجه شد");
          })
          .finally(() => {
            setLoading(false);
          });
      }}
    >
      {({ errors, touched, handleChange, handleBlur, values }) => (
        <Form>
          <Box>
            <Grid
              container
              sx={{
                p: 3,
                mx: "auto",
                mt: 6,
                boxShadow: 10,
                borderRadius: "1rem",
              }}
              className="conectme-form"
            >
              {loading ? (
                <Grid
                  size={12}
                  sx={{
                    my: 15,
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <div class="loader"></div>
                </Grid>
              ) : (
                <>
                  <Grid container sx={{ width: 1 }} spacing={3}>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: 70 }}>
                      <Zoom
                        in={zoomLoading}
                        style={{
                          transitionDelay: "100ms",
                        }}
                      >
                        <TextField
                          name="name"
                          label="نام و نام خانوادگی"
                          variant="filled"
                          sx={{ width: 1 }}
                          color={
                            theme.palette.mode === "dark"
                              ? "secondary"
                              : "primary"
                          }
                          value={values.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.name && Boolean(errors.name)}
                          helperText={touched.name && errors.name}
                        />
                      </Zoom>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }} sx={{ height: 85 }}>
                      <Zoom
                        in={zoomLoading}
                        style={{
                          transitionDelay: "200ms",
                        }}
                      >
                        <TextField
                          name="email"
                          label="ادرس ایمیل"
                          variant="filled"
                          sx={{ width: 1 }}
                          color={
                            theme.palette.mode === "dark"
                              ? "secondary"
                              : "primary"
                          }
                          value={values.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          error={touched.email && Boolean(errors.email)}
                          helperText={touched.email && errors.email}
                        />
                      </Zoom>
                    </Grid>
                  </Grid>
                  <Grid size={{ xs: 12 }} sx={{ height: 160 }}>
                    <Zoom
                      in={zoomLoading}
                      style={{
                        transitionDelay: "400ms",
                      }}
                    >
                      <TextField
                        name="message"
                        multiline
                        rows={4}
                        label="متن پیام"
                        variant="filled"
                        sx={{ width: 1 }}
                        color={
                          theme.palette.mode === "dark"
                            ? "secondary"
                            : "primary"
                        }
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.message && Boolean(errors.message)}
                        helperText={touched.message && errors.message}
                      />
                    </Zoom>
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Zoom
                      in={zoomLoading}
                      style={{
                        transitionDelay: "500ms",
                      }}
                    >
                      <Button
                        type="submit"
                        variant="contained"
                        sx={{ width: 1, py: 1.5, fontSize: "1rem" }}
                      >
                        ارسال ایمیل
                      </Button>
                    </Zoom>
                  </Grid>
                </>
              )}
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  );
};
export default ConectMeForm;
