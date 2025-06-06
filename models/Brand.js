import mongoose from "mongoose";

const { Schema } = mongoose;

const brandSchema = new Schema({
  label: { type: String, required: true, unique: true },
  value: { type: String, required: true, unique: true },
});

const virtual = brandSchema.virtual("id");
virtual.get(function () {
  return { id: this._id };
});

brandSchema.set("toJSON", {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

const Brand = mongoose.model("Brand", brandSchema);

export default Brand;
