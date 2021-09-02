// Interface User
interface IUserSchema extends TMongoDocument {
  _id: string;
  name: string;
  email: string;
  password: string;
}
