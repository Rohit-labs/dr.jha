import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function HeroRight({ branch }) {
  const location = useLocation()
  const isSurat = branch?.slug === 'surat' || location.pathname.toLowerCase().includes('/surat')

  const defaultMain = isSurat
    ? '/images/treatments/exercise-therapy2.jpeg'
    : '/images/treatments/exercise-therapy.jpeg'

  const defaultTop = isSurat
    ? '/images/treatments/cosmetic-acupuncture.jpeg'
    : '/images/treatments/exercise-therapy3.jpeg'

  const defaultBottom = isSurat
    ? '/images/treatments/shockwave-therapy2.jpeg'
    : '/images/treatments/laser-therapy2.jpeg'

  const [mainImgSrc, setMainImgSrc] = useState(defaultMain)
  const [topImgSrc, setTopImgSrc] = useState(defaultTop)
  const [bottomImgSrc, setBottomImgSrc] = useState(defaultBottom)

  useEffect(() => {
    setMainImgSrc(defaultMain)
    setTopImgSrc(defaultTop)
    setBottomImgSrc(defaultBottom)
  }, [isSurat, defaultMain, defaultTop, defaultBottom])

  const mainFallback = isSurat
    ? '/Dr Jha photos/treatment photos/Exercise therapy2.jpeg'
    : '/Dr Jha photos/treatment photos/Exercise therapy.jpeg'

  const topFallback = isSurat
    ? '/images/treatments/cosmetic-acupuncture-laser.jpeg'
    : '/Dr Jha photos/treatment photos/Exercise therapy3.jpeg'

  const bottomFallback = isSurat
    ? '/Dr Jha photos/treatment photos/Shockwave therapy2.jpeg'
    : '/Dr Jha photos/treatment photos/LASER therapy2.jpeg'

  const mainAlt = isSurat
    ? 'Physiotherapist providing exercise therapy in Surat clinic'
    : 'Physiotherapist providing hands-on exercise rehabilitation therapy'

  const topAlt = isSurat
    ? 'Cosmetic acupuncture and facial laser therapy in Surat clinic'
    : 'Manual therapy and specialized musculoskeletal joint mobilization'

  const bottomAlt = isSurat
    ? 'Advanced clinical shockwave therapy treatment in Surat clinic'
    : 'Advanced clinical laser therapy for deep tissue healing and pain relief'

  return (
    <div className="w-full mt-6 lg:mt-0">
      {/* Main Relative Composition Container */}
      <div className="relative w-full max-w-[520px] sm:max-w-[580px] lg:max-w-[680px] aspect-[0.95/1] mx-auto overflow-visible select-none">
        
        {/* ========================================================
            1. DECORATIVE SVG BACKGROUND (Blobs, Curves, Botanical Leaves)
            ======================================================== */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
          viewBox="0 0 680 715"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Large soft organic sage blobs behind photography */}
          <g opacity="0.95">
            {/* Upper-left large sage blob */}
            <path
              d="M 120 140 C 40 180 25 300 70 400 C 115 500 200 550 310 530 C 420 510 470 430 460 310 C 450 190 390 90 280 70 C 190 55 160 120 120 140 Z"
              fill="#E8EEDC"
            />
            {/* Lower-right very light sage blob */}
            <path
              d="M 380 340 C 310 410 330 540 400 610 C 470 680 590 695 650 630 C 710 565 715 450 665 375 C 615 300 450 270 380 340 Z"
              fill="#F1F4E9"
            />
            {/* Top-right pale sage accent blob */}
            <path
              d="M 440 60 C 390 100 410 190 470 230 C 530 270 630 250 665 190 C 700 130 675 50 605 25 C 535 0 490 20 440 60 Z"
              fill="#E8EEDC"
              opacity="0.65"
            />
          </g>

          {/* Thin curved botanical line 1 (Left flank rising upward) */}
          <path
            d="M 55 620 C 15 510 30 370 70 270 C 95 205 140 145 195 95 C 235 58 280 42 330 38"
            stroke="#02663D"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Botanical Leaves Cluster 1 - along left curve */}
          <g fill="#02663D" opacity="0.85">
            {/* Leaf pair near top left curve */}
            <path d="M 185 105 C 175 90 155 92 152 108 C 162 118 180 115 185 105 Z" />
            <path d="M 195 95 C 205 82 225 86 226 102 C 214 110 198 105 195 95 Z" />
            {/* Leaf along mid-left curve */}
            <path d="M 72 265 C 58 255 42 265 44 282 C 58 288 72 278 72 265 Z" />
            <path d="M 80 280 C 85 295 102 300 110 288 C 105 272 90 270 80 280 Z" />
            {/* Leaf along lower-left curve */}
            <path d="M 40 430 C 25 425 15 440 22 455 C 36 458 46 445 40 430 Z" />
            <path d="M 48 445 C 56 458 72 460 78 448 C 72 435 58 435 48 445 Z" />
            {/* Small accent sprig at bottom left */}
            <path d="M 52 610 C 40 600 32 612 38 625 C 50 626 58 618 52 610 Z" />
          </g>

          {/* Thin curved botanical line 2 (Top right background accent) */}
          <path
            d="M 470 35 C 540 48 620 85 655 155 C 675 195 678 245 660 290"
            stroke="#02663D"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.65"
          />

          {/* Botanical Leaves Cluster 2 - top right */}
          <g fill="#02663D" opacity="0.8">
            <path d="M 530 45 C 538 30 558 32 562 48 C 550 58 534 54 530 45 Z" />
            <path d="M 610 80 C 625 70 642 80 640 98 C 626 102 612 92 610 80 Z" />
            <path d="M 655 150 C 670 145 682 160 678 175 C 662 178 652 165 655 150 Z" />
            <path d="M 662 215 C 678 215 685 232 676 245 C 662 244 654 228 662 215 Z" />
          </g>
        </svg>

        {/* ========================================================
            2. MAIN DOMINANT IMAGE
            ======================================================== */}
        <div
          className="absolute top-[5%] left-[4%] w-[70%] h-[80%] z-10"
          style={{
            filter: 'drop-shadow(0 20px 45px rgba(0,0,0,0.08))',
          }}
        >
          <img
            src={mainImgSrc}
            onError={() => setMainImgSrc(mainFallback)}
            alt={mainAlt}
            loading="eager"
            className="w-full h-full object-cover rounded-[55px_55px_150px_70px] sm:rounded-[75px_75px_190px_90px] border-4 sm:border-[6px] border-[#F8F6F0]/90"
          />
        </div>

        {/* ========================================================
            3. TOP IMAGE CARD
            ======================================================== */}
        <div
          className="absolute top-[9%] right-[2%] w-[36%] h-[41%] z-20"
          style={{
            filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.09))',
          }}
        >
          <img
            src={topImgSrc}
            onError={() => setTopImgSrc(topFallback)}
            alt={topAlt}
            loading="lazy"
            className="w-full h-full object-cover rounded-[32px] sm:rounded-[42px] border-[6px] sm:border-[8px] border-[#F8F6F0]"
          />
        </div>

        {/* ========================================================
            4. BOTTOM IMAGE CARD
            ======================================================== */}
        <div
          className="absolute bottom-[5%] right-[1%] w-[40%] h-[40%] z-20"
          style={{
            filter: 'drop-shadow(0 16px 32px rgba(0,0,0,0.09))',
          }}
        >
          <img
            src={bottomImgSrc}
            onError={() => setBottomImgSrc(bottomFallback)}
            alt={bottomAlt}
            loading="lazy"
            className="w-full h-full object-cover rounded-[32px] sm:rounded-[42px] border-[6px] sm:border-[8px] border-[#F8F6F0]"
          />
        </div>

        {/* ========================================================
            5. "STRONGER EVERY DAY" FLOATING CARD (Shifted 60px down, 21px left)
            ======================================================== */}
        <div className="absolute bottom-[20%] sm:bottom-[22%] lg:bottom-[24%] left-[40%] sm:left-[43%] lg:left-[45%] -translate-x-[21px] translate-y-[60px] z-30 pointer-events-none select-none">
          <div
            className="bg-[#FCFBF7] rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 border border-[#DCDDD5]/90 shadow-[0_10px_28px_rgba(0,0,0,0.08)] transition-transform duration-300"
            style={{ transform: 'rotate(-3deg)' }}
          >
            <span className="font-handwriting text-[#26332F] text-[19px] sm:text-[22px] lg:text-[25px] font-bold leading-tight tracking-wide block">
              Stronger
            </span>
            <span className="font-handwriting text-[#26332F] text-[19px] sm:text-[22px] lg:text-[25px] font-bold leading-tight tracking-wide block">
              Every Day
            </span>
            {/* Delicate hand-drawn botanical green underline */}
            <svg
              className="w-16 sm:w-20 h-3.5 text-[#02663D] mt-0.5 overflow-visible"
              viewBox="0 0 80 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M 3 6 C 22 13, 54 13, 77 3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>

      </div>
    </div>
  )
}

