import usersReducer from '../features/redux/usersSlice';
import challengesReducer from '../features/redux/challengesSlice';
import alghoritmsReducer from '../features/redux/alghoritmsSlice';
import emailsReducer from '../features/redux/emailsSlice';
import premiumsReducer from '../features/redux/premiumsSlice';
import businessReducer from '../features/redux/businessSlice';
import startersReducer from '../features/redux/startersSlice';
import freeusersReducer from '../features/redux/freeusersSlice';
import leadersReducer from '../features/redux/leadersSlice';
import coursesReducer from '../features/redux/coursesSlice';
import messagesReducer from '../features/redux/messagesSlice';
import codefaceWarriorsReducer from './../features/redux/codefaceWarriorsSlice';
import commonsReducer from './../features/redux/commonsSlice';
import featuresReducer from './../features/redux/featuresSlice';
import authReducer from './../features/redux/authSlice';
import projectsReducer from './../features/redux/projectsSlice';
import signInControllerReducer from '../features/redux/signInControllerSlice';
<<<<<<< HEAD
=======
import githubLocalReducer from '../features/redux/githubLocalSlice';
import {githubApiSlice} from '../features/redux/githubApiSlice';
import {apiSlice} from '../features/redux/apiSlice';
import {githubDataSlice} from '../features/redux/githubLocalSlice';
>>>>>>> main

const rootReducer = {
  users: usersReducer,
  emails: emailsReducer,
  challenges: challengesReducer,
  alghoritms: alghoritmsReducer,
  premiums: premiumsReducer,
  business: businessReducer,
  starters: startersReducer,
  freeusers: freeusersReducer,
  leaders: leadersReducer,
  courses: coursesReducer,
  messages: messagesReducer,
  codefaceWarriors: codefaceWarriorsReducer,
  commons: commonsReducer,
  features: featuresReducer,
  auth: authReducer,
  projects: projectsReducer,
  signInController: signInControllerReducer,
<<<<<<< HEAD
=======
  githubLocal: githubLocalReducer,
  githubDataSlice: githubDataSlice.reducer,
  [githubApiSlice.reducerPath]: githubApiSlice.reducer,
  [apiSlice.reducerPath]: apiSlice.reducer,
>>>>>>> main
};

export default rootReducer;
