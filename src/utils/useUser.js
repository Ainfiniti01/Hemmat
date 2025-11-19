import { useQuery } from '@tanstack/react-query';

const fetchUser = async () => {
  const res = await fetch('/api/auth/session');
  if (!res.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await res.json();
  return data.user;
};

export default function useUser() {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUser,
  });
}
