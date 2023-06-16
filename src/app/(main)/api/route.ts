import { NextResponse } from 'next/server';

export async function POST() {
  const res = await fetch('https://randomuser.me/api/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = await res.json();

  return NextResponse.json(data);
}

function iteratorToStream(iterator: any) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
 
function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
 
const encoder = new TextEncoder()
 
async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(1000)
  yield encoder.encode('<p>Two</p>')
  await sleep(1000)
  yield encoder.encode('<p>Three</p>')
}
 
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  console.log(searchParams);
  console.log(searchParams.get('name'));
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)
 
  return new Response(stream)
}