const UserSchema = {
  name: "User",
  properties: {
    _id: "objectId",
    name: "string",
    status: "string?",
  },
  primaryKey: "_id",
};
export default UserSchema;
