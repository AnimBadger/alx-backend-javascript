import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const firstPromise = await uploadPhoto();
    const secondPromise = await createUser();

    return { photo: firstPromise, user: secondPromise };
  } catch (error) {
    return { photo: null, user: null };
  }
}
