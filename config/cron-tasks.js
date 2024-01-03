module.exports = {
  postCountEmail: {
    task: async ({ strapi }) => {
      console.log(`--------- Bắt đầu chạy đếm Tracking ---------`);

      const count = await strapi.db
        .connection
        .from("responses")
        .orderBy("createdAt", "desc")
        .where({
          path: "/api/v1/users/me",
          method: "GET",
          status_code: 200,
        })
        .select("user_id")
        .groupBy("user_id")
        .count()

      console.log(count);

      console.log(`=========== Kết thúc chạy đếm Tracking ==========`);
    },
    options: {
      // Every minute
      rule: "*/1 * * * *",
    },
  },
};
