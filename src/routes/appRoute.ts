import SignInPage from "../pages/SignIn/SingInPage";
import SignUpPage from "../pages/SignUp/SingUpPage";
import HomePage from "../pages/HomePage/HomePage";
import NotesPage from "../pages/Note/Notes";
import NotePage from "../pages/Note/Note";
import VerifyPage from "../pages/Verify/VerifyPage";
import VerifyEmail from "../pages/Verify/VerifyEmail";
import ResetPasswordByEmail from "../pages/Reset/Email";
import ResetPassword from "../pages/Reset/Password";

export const routes = [
  { path: "/signin", component: SignInPage },
  { path: "/signup", component: SignUpPage },
  { path: "/", component: HomePage },
  { path: "/note/:id", component: NotesPage },
  { path: "/note/:id/:id", component: NotePage },
  { path: "/verify", component: VerifyPage },
  { path: "/verify/:id/:id", component: VerifyEmail },
  { path: "/forgotpassword", component: ResetPasswordByEmail },
  { path: "/reset/:id/:id", component: ResetPassword },
  { path: "/update/:id", component: ResetPassword },
];
