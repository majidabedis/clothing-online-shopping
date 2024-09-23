import styles from './banertop.module.css'
function Banertop() {
  return (
    <>
      <div className="relative mt-20 isolate flex items-center gap-x-6 overflow-hidden bg-gray-50 px-6 py-2.5 sm:px-3.5 sm:before:flex-1 -z-10">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#817314] to-[#cdcdb6] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[577/310] w-[36.0625rem] bg-gradient-to-r from-[#817314] to-[#cdcdb6] opacity-30"
            style={{
              clipPath:
                'polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)',
            }}
          />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            <strong className="font-semibold">GeneriCon 2023</strong>
            <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
              <circle cx={1} cy={1} r={1} />
            </svg>
            Join us in Denver from June 7 – 9 to see what’s coming next.
          </p>
          <a
            href="#"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold
         text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 
         focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            Shop now <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
        </div>
      </div>
      <div className={styles.div_bannertop}>
        <div className={styles.div_banner1}></div>
        <div className={styles.div_banner2}>
          <p className={styles.p_trend}>TREND</p>
          <p className={styles.p_march}>March top picks</p>
          <p className={styles.p_grear}>Gear up for the warmer weather with our
            selection of  March top picks for
            men this spring. Embrace the season
            with light layers, textured polos,
            and stylish Cuban collar shirts.
            Whether you&apos;re looking for a
            casual yet fashionable look or
            want to stand out with unique textures
            and designs, we&apos;ve got you covered.
            Elevate your wardrobe and stay on-trend
            this season with our must-have spring
            picks for men!
          </p>
          <button className={styles.btn_shop}>Shop The Trim</button>
        </div>
      </div>
    </>
  )
}

export default Banertop