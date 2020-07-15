module.exports = mongoose => {
  const schema = mongoose.Schema(
      {
        title: String,
        description: String,
        updates: Array,
      },
      { timestamps: true }
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Menu = mongoose.model("menu", schema);
  return Menu;
};
