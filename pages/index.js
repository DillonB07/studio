import Head from 'next/head'
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>DillonB07</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="/">
            DillonB07's Studio. 
          </a>
        </h1>
        <p className="mt-3 text-2xl">
          Sorry! This studio is still a work in progress because I keep getting distracted and making other projects. <em>Maybe it'll never get made...</em><br/>Check out these instead:
        </p>

        <div className="mt-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://reddit.dillonb07.studio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Reddit Clone</h3>
            <p className="mt-4 text-xl">
              A Reddit Clone built with NextJS, Supabase and Stepzen
            </p>
          </a>
          <a
            href="https://google.dillonb07.studio"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Learn &rarr;</h3>
            <p className="mt-4 text-xl">
              A Google clone built with NextJS
             </p>
          </a>
          <a
            href="https://expo.dev/@DillonB07/deliveroo-clone"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Examples &rarr;</h3>
            <p className="mt-4 text-xl">
              Deliveroo clone built with React Native. You'll need the Expo Go mobile app to try this app for yourself.
            </p>
          </a>
          <a
            href="https://github.com/DillonB07"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Deploy &rarr;</h3>
            <p className="mt-4 text-xl">
              My GitHub Profile!
            </p>
          </a>
        </div>
      </main>
      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center"
          href="https://dillonb07.is-a.dev"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by{' '}
          <img src="https://dillonb07.is-a.dev/static/images/DillonB07.png" alt="DillonB07's logo" className="ml-2 h-4 rounded-full" />
        </a>
      </footer>
    </div>
  )
}
