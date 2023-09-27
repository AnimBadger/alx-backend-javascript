import signUpUser from './4-user-promise';
import uploadPicture from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const userPromise = signUpUser(firstName, lastName);
  const picturePromise = uploadPicture(fileName);

  return Promise.allSettled([userPromise, picturePromise]).then((values) => {
    const final = [];
    values.forEach((element) => {
      if (element.status === 'fulfilled') {
        final.push({ status: element.status, value: element.value });
      } else {
        final.push({ status: element.status, value: `${element.reason}` });
      }
    });
    return final;
  });
}
