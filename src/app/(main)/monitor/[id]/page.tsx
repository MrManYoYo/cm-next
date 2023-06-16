import { fetchUser } from '@/utils/fetchUser';

const MonitorDetail = async ({ params }: { params: { id: string } }) => {
  const fetchUserResult = await fetchUser();
  const { results } = fetchUserResult;
  const [user] = results;

  return (
    <div>
      Monitor {params.id} &apos;s Detail
      <div>{user?.name?.first}</div>
    </div>
  );
}

export default MonitorDetail;