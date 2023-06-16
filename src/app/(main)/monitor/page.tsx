import Link from 'next/link';

import styles from './styles.module.css'

const mockFetch = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        data: [
          { name: 'xxx-1', id: 1 },
          { name: 'xxx-2', id: 2 },
          { name: 'xxx-3', id: 3 },
        ]
      })
    }, 2000)
  })
}

const Monitor = async () => {
  const [, res] = await mockFetch().then(res => [null, res]).catch(err => [err, null]);
  const { data = [] } = res || {};
  return (
    <div className={styles['main-cont']}>
      Monitor List

      <ul>
        {
          data.map((item: any) => (
            <li key={item.name}>
              <Link href={`/monitor/${item.id}`}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}

export default Monitor;