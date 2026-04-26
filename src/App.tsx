import { useState, useEffect, useCallback } from 'react'
import CoverPage from './pages/CoverPage'
import ImpastoPage from './pages/ImpastoPage'
import SpecialitaPage1 from './pages/SpecialitaPage1'
import SpecialitaPage2 from './pages/SpecialitaPage2'
import ClassichePage1 from './pages/ClassichePage1'
import ClassichePage2 from './pages/ClassichePage2'
import AperitivoPage from './pages/AperitivoPage'
import BirreViniPage from './pages/BirreViniPage'
import DolciCocktailPage from './pages/DolciCocktailPage'
import AmariGrappePage from './pages/AmariGrappePage'
import CaffetteriaPage from './pages/CaffetteriaPage'

const PAGE_W = 794
const PAGE_H = 1123

const pages = [
  <CoverPage />,
  <ImpastoPage />,
  <SpecialitaPage1 />,
  <SpecialitaPage2 />,
  <ClassichePage1 />,
  <ClassichePage2 />,
  <AperitivoPage />,
  <BirreViniPage />,
  <CoverPage />,
  <DolciCocktailPage />,
  <AmariGrappePage />,
  <CaffetteriaPage />,
]

export default function App() {
  const [currentPage, setCurrentPage] = useState(0)
  const [scale, setScale] = useState(1)

  const totalPages = pages.length

  const goNext = useCallback(() => {
    setCurrentPage(p => Math.min(p + 1, totalPages - 1))
  }, [totalPages])

  const goPrev = useCallback(() => {
    setCurrentPage(p => Math.max(p - 1, 0))
  }, [])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') goNext()
      if (e.key === 'ArrowLeft') goPrev()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [goNext, goPrev])

  useEffect(() => {
    const calcScale = () => {
      const navHeight = 56
      const padding = 32
      const scaleX = (window.innerWidth - padding) / PAGE_W
      const scaleY = (window.innerHeight - navHeight - padding) / PAGE_H
      setScale(Math.min(scaleX, scaleY, 1))
    }
    calcScale()
    window.addEventListener('resize', calcScale)
    return () => window.removeEventListener('resize', calcScale)
  }, [])

  const scaledH = PAGE_H * scale
  const scaledW = PAGE_W * scale

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center'
      style={{ background: '#d6d3d1' }}
    >
      <div
        style={{
          width: scaledW,
          height: scaledH,
          position: 'relative',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            width: PAGE_W,
            height: PAGE_H,
            background: '#fff',
            boxShadow: '0 4px 32px rgba(0,0,0,0.18)',
            transformOrigin: 'top left',
            transform: `scale(${scale})`,
            overflow: 'hidden',
          }}
        >
          {pages[currentPage]}
        </div>
      </div>

      <div className='flex items-center gap-6 mt-4' style={{ height: '40px' }}>
        <button
          onClick={goPrev}
          disabled={currentPage === 0}
          style={{
            fontSize: '20px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
            cursor: currentPage === 0 ? 'default' : 'pointer',
            opacity: currentPage === 0 ? 0.3 : 0.7,
            color: '#1c1917',
          }}
          aria-label='Previous page'
        >
          ←
        </button>

        <div className='flex gap-2 items-center'>
          {pages.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i)}
              aria-label={`Go to page ${i + 1}`}
              style={{
                width: i === currentPage ? '20px' : '8px',
                height: '8px',
                borderRadius: '4px',
                border: 'none',
                background: i === currentPage ? '#1c1917' : '#78716c',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={goNext}
          disabled={currentPage === totalPages - 1}
          style={{
            fontSize: '20px',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: 'none',
            background: 'transparent',
            cursor: currentPage === totalPages - 1 ? 'default' : 'pointer',
            opacity: currentPage === totalPages - 1 ? 0.3 : 0.7,
            color: '#1c1917',
          }}
          aria-label='Next page'
        >
          →
        </button>
      </div>
    </div>
  )
}
