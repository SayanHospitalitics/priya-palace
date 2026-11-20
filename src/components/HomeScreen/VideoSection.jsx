import { useEffect, useRef, useState } from 'react'
import { FaPlay, FaPause, FaVolumeHigh, FaVolumeXmark } from 'react-icons/fa6'
import { homeImages } from '../../content/images'
import Button from '../Shared/Button'
import Container from '../Shared/Container'
import Reveal from '../Shared/Reveal'
import SectionTitle from '../Shared/SectionTitle'

// The hotel video: drop one .mp4 / .webm / .mov file into src/assets/videos/ and it is used here.
// (If the folder has several, the first one by name is used. With none, the hotel photo is shown instead.)
const [videoSrc] = Object.entries(import.meta.glob('../../assets/videos/*.{mp4,webm,mov,m4v}', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([, url]) => url)

const control = 'grid size-11 cursor-pointer place-items-center rounded-full border-0 bg-white/90 p-0 text-dark shadow-lg transition-colors hover:bg-primary'

export default function VideoSection() {
  const frame = useRef(null)
  const video = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true) // browsers only allow autoplay with the sound off

  // play when at least 20% of the video is on screen, pause when it is not
  useEffect(() => {
    const el = frame.current
    const v = video.current
    if (!el || !v || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.2 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const toggle = () => {
    const v = video.current
    if (!v) return
    if (v.paused) v.play().catch(() => {})
    else v.pause()
  }

  return (
    <section className="relative section pb-0">
      <Container>
        <SectionTitle sub="Meetings &amp; Celebrations" center className="!mb-4">
          Make Room for a Memorable Occasion
        </SectionTitle>
        <p className="mx-auto mb-10 max-w-2xl text-center">
          A gathering becomes special when the setting feels right. Explore the event spaces at Hotel Priya Palace and tell us what you are planning.
        </p>
      </Container>

      {/* full-width video: edge to edge, no side margins */}
      <Reveal>
        <div ref={frame} className="relative aspect-video max-h-[85vh] w-full overflow-hidden bg-dark">
          {videoSrc ? (
            <video
              ref={video}
              src={videoSrc}
              poster={homeImages.video}
              muted={muted}
              loop
              playsInline
              preload="metadata"
              onPlay={() => setPlaying(true)}
              onPause={() => setPlaying(false)}
              className="size-full object-cover"
            />
          ) : (
            <img src={homeImages.video} alt="Hotel Priya Palace" className="size-full object-cover" />
          )}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />

          {videoSrc && (
            <>
              {/* the only controls: play / pause and mute / unmute */}
              <button type="button" aria-label={playing ? 'Pause video' : 'Play video'} onClick={toggle} className="absolute inset-0 cursor-pointer border-0 bg-transparent p-0">
                {!playing && (
                  <span className="absolute top-1/2 left-1/2 grid size-20 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-medium text-dark shadow-xl"><FaPlay className="translate-x-0.5" /></span>
                )}
              </button>
              <div className="absolute bottom-4 left-4 flex gap-3 sm:bottom-6 sm:left-6">
                <button type="button" aria-label={playing ? 'Pause video' : 'Play video'} onClick={toggle} className={control}>{playing ? <FaPause /> : <FaPlay className="translate-x-px" />}</button>
                <button type="button" aria-label={muted ? 'Unmute video' : 'Mute video'} onClick={() => setMuted((m) => !m)} className={control}>{muted ? <FaVolumeXmark /> : <FaVolumeHigh />}</button>
              </div>
            </>
          )}
        </div>
      </Reveal>

      {/* <Container className="py-10 text-center sm:py-14">
        <Button href="/banquets">Enquire About an Event</Button>
      </Container> */}
    </section>
  )
}
