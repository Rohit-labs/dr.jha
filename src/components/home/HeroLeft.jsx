import { Calendar } from 'lucide-react'

export default function HeroLeft() {
  const avatars = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&h=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&h=120&q=80',
  ]

  return (
    <div className="flex flex-col justify-center space-y-6 sm:space-y-7 max-w-xl">
      {/* Top Tag Pill */}
      <div>
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE8E0] border border-stone-300/50 text-xs font-semibold text-stone-700 tracking-wide">
          <span className="w-2 h-2 rounded-full bg-[#243B2E]"></span>
          <span>Trusted Care</span>
          <span className="text-stone-400">•</span>
          <span>3 Locations</span>
          <span className="text-stone-400">•</span>
          <span>10+ Years</span>
        </div>
      </div>

      {/* Main Heading */}
      <div className="space-y-1">
        <h1 className="font-serif text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#1A1A1A] tracking-tight leading-[1.06]">
          Move Better.
        </h1>
        <h2 className="font-serif italic text-5xl sm:text-6xl lg:text-[72px] font-bold text-[#A8482D] tracking-tight leading-[1.06]">
          Live Fuller.
        </h2>
      </div>

      {/* Subheading */}
      <p className="text-stone-600 text-base sm:text-[17px] leading-relaxed font-normal max-w-lg">
        Expert physiotherapy, rehabilitation and acupuncture care for a
        healthier, stronger and pain-free you.
      </p>

      {/* Primary Action Buttons */}
      <div className="flex flex-wrap items-center gap-3.5 pt-2">
        <a
          href="#book"
          className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-white bg-[#A8482D] hover:bg-[#933D25] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-[#A8482D]/25 cursor-pointer"
        >
          <Calendar className="w-4 h-4 text-white/90" />
          <span>Book an Appointment</span>
          <span className="text-white/80 font-normal">→</span>
        </a>

        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-full text-sm sm:text-[15px] font-semibold text-stone-800 bg-white/80 hover:bg-white border border-stone-300/80 active:scale-[0.98] transition-all duration-200 shadow-xs hover:shadow-sm cursor-pointer"
        >
          {/* Custom WhatsApp Icon */}
          <svg
            className="w-4 h-4 fill-[#25D366]"
            viewBox="0 0 24 24"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span>WhatsApp Us</span>
        </a>
      </div>

      {/* Social Proof Avatar Bar */}
      <div className="flex items-center gap-3.5 pt-3">
        {/* Avatar Stack */}
        <div className="flex items-center -space-x-2.5">
          {avatars.map((url, i) => (
            <img
              key={i}
              src={url}
              alt={`Patient ${i + 1}`}
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white object-cover shadow-xs"
            />
          ))}
        </div>

        {/* Text */}
        <div className="flex flex-col">
          <span className="text-xs sm:text-[13px] font-bold text-stone-900 leading-tight">
            Trusted by 5,000+ patients
          </span>
          <span className="text-[11px] sm:text-xs text-stone-500 font-medium leading-tight">
            Real people. Real recovery.
          </span>
        </div>
      </div>
    </div>
  )
}
