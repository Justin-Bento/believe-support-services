import Link from 'next/link'
import clsx from 'clsx'


export default function ProgramCard({Headline, Supporting, Media}: any) {
  Media = clsx( 'transition-all hover:opacity-80 bg-cover bg-center rounded-xl opacity-90 hover:cursor-pointer', Media )
  return (
    <Link href="/programs/slug">
      <article className={Media}>
        <div className="relative w-full h-72 wrapper bg-stone-900/60 backdrop-blur-sm backdrop-brightness-20 rounded-xl">
          <div className="absolute bottom-0 left-0 p-8">
            <h3 className="text-white type-title-large">
              {Headline}
            </h3>
            <p className="text-white max-w-prose type-body-large">
              {Supporting}
            </p>
          </div>
        </div>
      </article>
    </Link>
  )
}
