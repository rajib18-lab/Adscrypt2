import { motion } from 'framer-motion'
import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      image: 'https://i.pravatar.cc/150?img=1',
      content: 'ADSCRYPT transformed our digital presence completely. Their team is professional, creative, and delivers exceptional results.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Founder, DesignCo',
      image: 'https://i.pravatar.cc/150?img=12',
      content: 'Outstanding service! They built our mobile app exactly as we envisioned, and the user feedback has been incredible.',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director, GrowthHub',
      image: 'https://i.pravatar.cc/150?img=47',
      content: 'Their digital marketing strategies increased our online sales by 300%. Highly recommend their services!',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'CTO, InnovateLab',
      image: 'https://i.pravatar.cc/150?img=33',
      content: 'Professional team with deep technical expertise. They delivered our project on time and exceeded expectations.',
      rating: 5,
    },
  ]

  return (
    <section id="testimonials" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + i * 0.1 }}
                    >
                      <FiStar className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    </motion.div>
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500/50"
                  >
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>

              {/* Quote Icon */}
              <div className="absolute top-4 right-4 text-purple-500/20 text-6xl font-serif">
                "
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

