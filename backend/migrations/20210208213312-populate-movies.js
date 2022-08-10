module.exports = {
  async up(db, client) {
    await db
      .collection("movies")
      .insertMany([
        { title: "Avatar" },
        { title: "Interstellar" },
        { title: "Man of Steel" },
        { title: "The Batman" },
      ]);
  },

  async down(db, client) {
    await db.collection("movies").deleteMany({
      title: {
        $in: ["Avatar", "Interstellar", "Man of Steel", "The Batman"],
      },
    });
  },
};
