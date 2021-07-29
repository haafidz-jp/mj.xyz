import Head from 'next/head'
import Sedia from '../component/Sedia'


export default function Home() {
  return (
    <div className="bg-gray-100	flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>CV. Mulia Jaya Agung</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-5xl	 font-bold">
          {' '}
          <a className="text-blue-600" href="/">
            TOKO MULIA JAYA
          </a>
        </h1>

        <div className="flex flex-col flex-wrap items-center justify-around max-w-xl	 mt-6 sm:w-full">

        
        <p className="mt-9 text-2xl font-mono border md:p-5">
          Jl.Pintu Ps. Barat No.36 Jatinegara
        </p>

        <h1
          className="mt-9 text-center text-3xl "
        >
          <Sedia />
        </h1>

        <h2
          className="font-semibold text-4xl mt-10"
        >
          Temukan Kami
        </h2>
        </div>

        <div className="flex flex-wrap items-center justify-around sm:w-full max-w-xs xl:max-w-3xl	mt-4">
          
          <a
            href="https://wa.me/+6281288283426"
            className="p-6 mt-4 text-center border w-auto rounded-xl bg-white hover:bg-gray-50"
          >
            <img 
              className="w-36"
              src="/whatsapp.svg" alt="Whatsapp Logo" />
          </a>

          <a
            href="https://tokopedia.com/jayabaru123"
            className="p-6 mt-4 text-center border w-auto rounded-xl bg-white hover:bg-gray-50"
          >
            <img 
              className="w-36"
              src="/tokopedia2.png" alt="Tokopedia Logo" />
          </a>

          <a
            href="https://shopee.co.id/haafidz123"
            className="p-6 mt-4 text-center border w-auto rounded-xl bg-white hover:bg-gray-50"
          >
            <img 
              className="w-36"
              src="/shopee.svg" alt="Shopee Logo" />
          </a>

        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-20 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
