import 'server-only';

export const fetchUser = async () => {
  const res = await fetch('https://randomuser.me/api', {
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
  });
  const user = await res.json();
  return user
}