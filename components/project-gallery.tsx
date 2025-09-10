"use client"

import { useState } from "react"
import { motion, AnimatePresence, PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectGalleryProps {
  images: string[]
  projectTitle: string
  children: React.ReactNode
}

export function ProjectGallery({ images, projectTitle, children }: ProjectGalleryProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const handleDragEnd = (event: any, info: PanInfo) => {
    const swipeThreshold = 50
    if (info.offset.x > swipeThreshold) {
      prevImage()
    } else if (info.offset.x < -swipeThreshold) {
      nextImage()
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="w-[100vw] sm:w-[95vw] md:w-[85vw] lg:w-[80vw] max-w-none mobile-full-height sm:h-[90vh] p-0 bg-black/95 border-white/10 sm:rounded-lg rounded-none" showCloseButton={false}>
        <DialogTitle className="sr-only">{projectTitle} - Gallery</DialogTitle>
        <div className="relative w-full h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-3 sm:p-4 border-b border-white/10 bg-black/50">
            <h3 className="text-sm sm:text-lg font-semibold text-white truncate pr-2">{projectTitle}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/10 flex-shrink-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Main Image */}
          <div className="flex-1 relative flex items-center justify-center p-1 sm:p-4 min-h-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full max-w-4xl max-h-full"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.1}
                onDragEnd={handleDragEnd}
              >
                <Image
                  src={images[currentImageIndex]}
                  alt={`${projectTitle} - Image ${currentImageIndex + 1}`}
                  fill
                  className="object-contain rounded-sm sm:rounded-lg"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 85vw, 70vw"
                  priority
                />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={prevImage}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-white/20 p-1 sm:p-2"
                >
                  <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={nextImage}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white border border-white/20 p-1 sm:p-2"
                >
                  <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </>
            )}
          </div>

          {/* Thumbnail Navigation */}
          {images.length > 1 && (
            <div className="p-2 sm:p-4 border-t border-white/10 bg-black/30">
              <div className="flex gap-1 sm:gap-2 justify-start sm:justify-center overflow-x-auto scrollbar-hide pb-1">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => goToImage(index)}
                    className={`relative w-10 h-10 sm:w-16 sm:h-16 rounded-md sm:rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      index === currentImageIndex
                        ? "border-[#55E6FF] ring-1 sm:ring-2 ring-[#55E6FF]/30"
                        : "border-white/20 hover:border-white/40"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 40px, 64px"
                    />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Image Counter */}
          {images.length > 1 && (
            <div className="absolute top-1 sm:top-4 right-1 sm:right-16 text-xs sm:text-sm text-white/90 bg-black/60 px-2 py-1 rounded-md border border-white/10">
              {currentImageIndex + 1} / {images.length}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
