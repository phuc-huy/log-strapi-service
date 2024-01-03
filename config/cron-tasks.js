module.exports = {
  postCountEmail: {
    task: async ({ strapi }) => {
      console.log(`--------- Bắt đầu chạy đếm Tracking ---------`);

      const count = await strapi.db.query("api::response.response").count({
        orderBy: { createdAt: 'DESC' },
        district:"user_id",
        where: {
          path: "/api/v1/users/me",
          method: "GET",
          status_code: 200,
        },
      });

      console.log(count);

      console.log(`=========== Kết thúc chạy đếm Tracking ==========`);
    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
