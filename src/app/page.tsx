import Link from 'next/link'
import {photoList} from '../photos'
import Image from 'next/image'

export default function Home({searchParams: {page}}: {searchParams: {page: string}}) {
  const photos = photoList(page);
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-4xl font-bold m-10">NextGram</h1>
      <div className="flex gap-4 items-center justify-center m-auto w-96">
        <div>Current page {page || 1}</div>
        <Link className="p-4 bg-gray-50 border rounded shadow" href="/">Home</Link>
        <Link className="p-4 bg-gray-50 border rounded shadow" href="/?page=2">2</Link>
        <Link className="p-4 bg-gray-50 border rounded shadow" href="/?page=3">3</Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 auto-rows-max	 gap-6 m-10">
        {photos.map(({ id, imageSrc }) => (
          <Link key={id} href={`/photos/${id}`}>
            <Image
              alt=""
              src={imageSrc}
              height={500}
              width={500}
              className="w-full object-cover aspect-square"
            />
          </Link>
        ))}
      </div>
    </main>
  )
}
