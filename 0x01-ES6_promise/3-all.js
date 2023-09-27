import { uploadPhoto, createUser } from './utils';

export default function signupSystem() {
  const firstPromise = uploadPhoto();
  const secondPromise = createUser();

  return Promise.all([firstPromise, secondPromise]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  }).catch(() => { console.log('Signup system offline'); });
}
