import SignInPage from "../pages/SignIn/SingInPage";
import SignUpPage from "../pages/SignUp/SingUpPage";
import HomePage from "../pages/HomePage/HomePage";
import NotesPage from "../pages/Note/Notes";
import NotePage from "../pages/Note/Note";

export const routes = [
  { path: "/signin", component: SignInPage },
  { path: "/signup", component: SignUpPage },
  { path: "/", component: HomePage },
  { path: "/note/:id", component: NotesPage },
  { path: "/note/:id/:id", component: NotePage },
];
