'use client'

import { motion, useInView, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface AnimateOnScrollProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimateOnScroll({ children, delay = 0, className = '' }: AnimateOnScrollProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px -100px 0px" })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start('visible')
    }
  }, [isInView, controls])

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: {
          opacity: 0,
          y: 30,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            type: "spring",
            duration: 0.8,
            delay,
            damping: 20,
            stiffness: 100
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}