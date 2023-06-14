import Link from 'next/link';

const Monitor = () => {
  return (
    <div>
      Monitor List

      <ul>
        <li>
          <Link href='/monitor/1'>Monitor1</Link>
          <Link href='/monitor/2'>Monitor2</Link>
          <Link href='/monitor/3'>Monitor3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Monitor;