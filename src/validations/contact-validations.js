import * as yup from "yup";
export const contactValidation = yup.object().shape({
  name: yup
    .string()
    .required("نام و نام خانوادگی اجباری است")
    .max(20, "حداکثر حروف 20 میباشد"),
  email: yup
    .string()
    .required("ادرس ایمیل اجباری است")
    .email("ایمیل نا معتبر است"),
  message: yup
    .string()
    .required("متن پیام اجباری میباشد")
    .max(400, "حداکثر حروف 400 میباشد"),
});
