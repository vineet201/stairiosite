'use client'

import { Suspense, lazy, useEffect, useRef, useCallback } from 'react'
const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const splineRef = useRef<any>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const lastMousePos = useRef({ x: 0, y: 0 })

  const updateRobotTracking = useCallback((clientX: number, clientY: number) => {
    if (!containerRef.current || !splineRef.current) return
    
    const rect = containerRef.current.getBoundingClientRect()
    
    // Calculate position relative to container center
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    
    // Calculate offset from center normalized to -1 to 1
    const offsetX = (clientX - centerX) / (window.innerWidth / 2)
    const offsetY = (clientY - centerY) / (window.innerHeight / 2)
    
    // Map to canvas-relative coordinates
    const canvasX = rect.width / 2 + (offsetX * rect.width * 0.8)
    const canvasY = rect.height / 2 + (offsetY * rect.height * 0.8)

    try {
      const spline = splineRef.current
      
      // Method 1: Use emitEventReverse which triggers events on objects
      if (spline.emitEventReverse) {
        spline.emitEventReverse('mouseHover', 'Robot')
      }
      
      // Method 2: Try to find and emit to specific object
      const robotNames = ['Robot', 'robot', 'Character', 'character', 'Model', 'model']
      for (const name of robotNames) {
        try {
          if (spline.emitEvent) {
            spline.emitEvent('mouseHover', name)
          }
        } catch {}
      }

      // Method 3: Access the pointer/input system directly
      if (spline._runtime) {
        const runtime = spline._runtime
        
        // Update pointer position in the runtime
        if (runtime.pointerPosition) {
          runtime.pointerPosition.x = canvasX
          runtime.pointerPosition.y = canvasY
        }
        
        // Try the input handler
        if (runtime.inputHandler) {
          runtime.inputHandler.pointerX = canvasX
          runtime.inputHandler.pointerY = canvasY
        }
        
        // Try to trigger the look-at update
        if (runtime.updatePointer) {
          runtime.updatePointer(canvasX, canvasY)
        }
      }

      // Method 4: Dispatch pointer event to canvas
      if (canvasRef.current) {
        const pointerEvent = new PointerEvent('pointermove', {
          bubbles: true,
          cancelable: true,
          clientX: rect.left + canvasX,
          clientY: rect.top + canvasY,
          pointerType: 'mouse',
          isPrimary: true,
          view: window
        })
        canvasRef.current.dispatchEvent(pointerEvent)
      }
      
    } catch (error) {
      // Silently fail
    }
  }, [])

  const handleGlobalMouseMove = useCallback((e: MouseEvent) => {
    // Store the last mouse position
    lastMousePos.current = { x: e.clientX, y: e.clientY }
    updateRobotTracking(e.clientX, e.clientY)
  }, [updateRobotTracking])

  const handleScroll = useCallback(() => {
    // On scroll, use the last known mouse position to update tracking
    updateRobotTracking(lastMousePos.current.x, lastMousePos.current.y)
  }, [updateRobotTracking])

  useEffect(() => {
    window.addEventListener('mousemove', handleGlobalMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener('mousemove', handleGlobalMouseMove)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [handleGlobalMouseMove, handleScroll])

  const onLoad = (spline: any) => {
    splineRef.current = spline
    
    // Store canvas reference
    if (containerRef.current) {
      canvasRef.current = containerRef.current.querySelector('canvas')
    }
  }

  return (
    <div ref={containerRef} className={className}>
      <Suspense 
        fallback={
          <div className="w-full h-full flex items-center justify-center relative overflow-hidden">
            {/* Subtle gradient ambient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#D8B4FE]/5 via-transparent to-[#FF9132]/5" />
            
            {/* Stairio Abstract Mark */}
            <div className="relative flex flex-col items-center gap-6">
              {/* Abstract "S" logo mark */}
              <div className="relative w-24 h-24 sm:w-32 sm:h-32">
                {/* Outer ring */}
                <div className="absolute inset-0 rounded-full border border-white/10" />
                
                {/* Inner gradient orb */}
                <div className="absolute inset-3 rounded-full bg-gradient-to-br from-[#D8B4FE]/20 via-[#FF9132]/10 to-[#D8B4FE]/20" />
                
                {/* Center S mark */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 40 40" className="w-12 h-12 sm:w-16 sm:h-16" fill="none">
                    <path 
                      d="M28 12C28 12 24 8 18 10C12 12 10 18 14 22C18 26 26 24 26 28C26 32 20 34 14 32" 
                      stroke="url(#stairio-gradient)" 
                      strokeWidth="2.5" 
                      strokeLinecap="round"
                      className="opacity-60"
                    />
                    <defs>
                      <linearGradient id="stairio-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#D8B4FE" />
                        <stop offset="50%" stopColor="#FF9132" />
                        <stop offset="100%" stopColor="#D8B4FE" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                
                {/* Soft glow behind */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#D8B4FE]/10 to-[#FF9132]/10 blur-xl -z-10 scale-150" />
              </div>
              
              {/* Brand name */}
              <div className="flex flex-col items-center gap-1">
                <span className="text-xl sm:text-2xl font-medium tracking-wider text-white/40">
                  STAIRIO
                </span>
                <span className="text-xs text-white/20 tracking-widest uppercase">
                  AI Experience
                </span>
              </div>
            </div>
          </div>
        }
      >
        <Spline
          scene={scene}
          onLoad={onLoad}
        />
      </Suspense>
    </div>
  )
}