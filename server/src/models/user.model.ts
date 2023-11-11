import mongoose, {Document, Model, Schema} from "mongoose";
import bcrypt from 'bcryptjs';

const emailRegexPattern: RegExp = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;

export interface IUser extends Document{
  name: string;
  email: string;
  password: string;
  avatar: {
    public_id: string;
    url: string;
  },
  role: string;
  isVerified: boolean;
  courses: Array<{courseId: string}>;
  comparePassword: (password: string) => Promise<boolean>;
}

const userSchema: Schema<IUser> = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "Por favor, insira seu nome"],
  },
  email: {
    type: String,
    required: [true, "Por favor, insira seu email"],
    validate: {
      validator: function (value: string) {
        return emailRegexPattern.test(value);
      },
      message: "Por favor, insira um email válido"
    },
    unique: true
  },
  password: {
    type: String,
    required: [true, "Por favor, insira sua senha"],
    minLength: [6, "Mínimo de 6 caracteres"],
    select: false,
  },
  avatar: {
    public_id: String,
    url: String,
  },
  role: {
    type: String,
    default: "user",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  courses: [
    {
      courseId: String,
    }
  ]
},{timestamps: true});

// Hash password before saving
userSchema.pre<IUser>('save', async function(next){
  if(!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

// compare password
userSchema.methods.comparePassword = async function(enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);

};

const userModel: Model<IUser> = mongoose.model('User', userSchema);
export default userModel;