'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'


export function Logo3D() {
  const [count, setCount] = useState(0)
  const [flyingCoins, setFlyingCoins] = useState<
  { id: number; x: number; y: number }[]
>([])
  const handleCoinClick = (
  e: React.MouseEvent<HTMLCanvasElement>
) => {
  setCount((c) => c + 1)

  const rect = e.currentTarget.getBoundingClientRect()

  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  const id = Date.now()

  setFlyingCoins((prev) => [
    ...prev,
    { id, x, y },
  ])

  setTimeout(() => {
    setFlyingCoins((prev) =>
      prev.filter((coin) => coin.id !== id)
    )
  }, 1000)
}

  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { scrollYProgress } = useScroll()

  const scale = useTransform(scrollYProgress, [0, 0.3], [1, 0.5])
  const y = useTransform(scrollYProgress, [0, 0.3], [0, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.3], [1, 1, 0])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let rotation = 0

    let mouseX = 0
    let mouseY = 0

    let smoothMouseX = 0
    let smoothMouseY = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      const rect = canvas.getBoundingClientRect()

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr

      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()

      mouseX =
        (e.clientX - rect.left - rect.width / 2) /
        (rect.width / 2)

      mouseY =
        (e.clientY - rect.top - rect.height / 2) /
        (rect.height / 2)
    }

    const draw = () => {
      const rect = canvas.getBoundingClientRect()

      ctx.clearRect(0, 0, rect.width, rect.height)

      const centerX = rect.width / 2
      const centerY = rect.height / 2
      const size = Math.min(rect.width, rect.height) * 0.35

      rotation += 0.006

    const lightX = Math.cos(rotation) * 25
    const lightY = Math.sin(rotation) * 25

      ctx.save()

      ctx.translate(centerX, centerY)


      ctx.rotate(rotation)

      // Schatten
      ctx.save()

      ctx.translate(-lightX, -lightY)

      ctx.beginPath()
      ctx.arc(0, 0, size + 10, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0,0,0,0.18)'
      ctx.fill()

      ctx.restore()

      // Coin
      const coinGradient = ctx.createRadialGradient(
        lightX * 0.4,
        lightY * 0.4,
        0,
        0,
        0,
        size
      )

      coinGradient.addColorStop(0, '#145540')
      coinGradient.addColorStop(0.5, '#0B3D2E')
      coinGradient.addColorStop(1, '#07281E')

      ctx.beginPath()
      ctx.arc(0, 0, size, 0, Math.PI * 2)
      ctx.fillStyle = coinGradient
      ctx.fill()

      // Goldring außen
      ctx.beginPath()
      ctx.arc(0, 0, size + 4, 0, Math.PI * 2)
      ctx.strokeStyle = '#C9A227'
      ctx.lineWidth = 4
      ctx.stroke()

      // Goldring innen
      ctx.beginPath()
      ctx.arc(0, 0, size * 0.9, 0, Math.PI * 2)
      ctx.strokeStyle = 'rgba(201,162,39,0.35)'
      ctx.lineWidth = 1
      ctx.stroke()

      const crossWidth = size * 0.3
      const crossLength = size * 0.8

      const crossGradient = ctx.createLinearGradient(
        -crossLength,
        -crossLength,
        crossLength,
        crossLength
      )

      crossGradient.addColorStop(0, '#F8E9A0')
      crossGradient.addColorStop(0.3, '#C9A227')
      crossGradient.addColorStop(0.5, '#FFF2B8')
      crossGradient.addColorStop(0.7, '#C9A227')
      crossGradient.addColorStop(1, '#8F6F13')

      ctx.fillStyle = crossGradient

      ctx.fillRect(
        -crossWidth / 2,
        -crossLength / 2,
        crossWidth,
        crossLength
      )

      ctx.fillRect(
        -crossLength / 2,
        -crossWidth / 2,
        crossLength,
        crossWidth
      )

      // Glanzpunkt
      const shineGradient = ctx.createRadialGradient(
        lightX,
        lightY,
        0,
        lightX,
        lightY,
        size * 0.5
      )

      shineGradient.addColorStop(
        0,
        'rgba(255,255,255,0.65)'
      )

      shineGradient.addColorStop(
        1,
        'rgba(255,255,255,0)'
      )

      ctx.beginPath()
      ctx.arc(
        lightX,
        lightY,
        size * 0.5,
        0,
        Math.PI * 2
      )

      ctx.fillStyle = shineGradient
      ctx.fill()

      ctx.restore()

      animationId = requestAnimationFrame(draw)
    }

    resize()

requestAnimationFrame(() => {
  resize()
})

window.addEventListener('resize', resize)

draw()


return () => {
  window.removeEventListener('resize', resize)
  window.removeEventListener('mousemove', handleMouseMove)
  cancelAnimationFrame(animationId)
}
}, [])

  return (
  <motion.div
    style={{ scale, y, opacity }}
    className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96"
  >
    <div
      className="absolute top-0 right-0 z-20 bg-accent text-primary px-3 py-1 rounded-full font-bold shadow-lg"
    >
      {count}
    </div>

{flyingCoins.map((coin) => (
  <motion.div
    key={coin.id}
    style={{
  left: coin.x,
  top: coin.y,
}}

initial={{
  opacity: 1,
  scale: 1,
}}

animate={{
  opacity: 0,
  y: -120,
  x: Math.random() * 60 - 30,
  scale: 0.5,
}}
    
    transition={{
      duration: 1,
      ease: 'easeOut',
    }}
    className="absolute z-30 text-3xl pointer-events-none"
  >
    🪙
  </motion.div>
))}
    <canvas
      ref={canvasRef}
      className="w-full h-full cursor-pointer"
      onClick={handleCoinClick}
      style={{
        width: '100%',
        height: '100%',
      }}
    />
  </motion.div>
)
}