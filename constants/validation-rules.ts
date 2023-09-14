export const VALIDATION_RULES = {
  //TODO Change messages when i18n ready
  required: { required: { value: true, message: "Field is required" } },
  email: {
    required: {
      value: true,
      message: "Field is required",
    },
    pattern: {
      value: /\S+@\S+\.\S+/,
      message: "Entered value does not match email format",
    },
  },
  password: {
    required: {
      value: true,
      message: "Field is required",
    },
    pattern: {
      value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      message: "Minimum eight characters, at least one number",
    },
  },
};
