"use client"

import { motion } from "framer-motion"

export function VideoSection() {
	return (
		<section className="relative bg-black py-8 md:py-16 overflow-hidden">
			<div className="container mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, scale: 0.95 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true, margin: "-50px" }}
					transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
					className="relative w-full aspect-video rounded-2xl overflow-hidden"
				>
					<iframe
						src="https://player.vimeo.com/video/1060804554?badge=0&autoplay=1&loop=1&muted=1&background=1&player_id=0&app_id=58479"
						className="absolute inset-0 w-full h-full"
						frameBorder="0"
						allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
						title="Plexos Send Money"
					/>
				</motion.div>
			</div>
		</section>
	)
}
