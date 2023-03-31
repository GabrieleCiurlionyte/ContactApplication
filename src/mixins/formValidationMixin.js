export default {
  methods: {
    fieldsValid() {
      if (
        this.form.company &&
        this.form.email &&
        this.form.firstName &&
        this.form.lastName &&
        this.form.phone_number &&
        this.form.position
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
