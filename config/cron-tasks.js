module.exports = {
  postCountEmail: {
    task: async ({ strapi }) => {
      console.log(
        `Sending email with published article count (run by Strapi cron)`
      );

    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
