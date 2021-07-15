import md5 from 'crypto-js/sha256';

const useGravatar = () => {
  const user = localStorage.getItem('user') || { email: '' };
  const { email } = user;
  const hash = md5(email);

  return `https://www.gravatar.com/avatar/${hash}`;
};

export default useGravatar;
