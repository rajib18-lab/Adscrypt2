import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiSmartphone, FiTrendingUp, FiShield, FiSearch, FiLayers } from 'react-icons/fi'
import ServiceModal from './ServiceModal'

const Services = () => {
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleServiceClick = (service) => {
    setSelectedService(service)
    setIsModalOpen(true)
  }

  const services = [
    {
      icon: <FiCode className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <FiSmartphone className="w-8 h-8" />,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps that deliver exceptional user experiences.',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that boost your online presence and drive conversions.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <FiShield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets and data.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: <FiSearch className="w-8 h-8" />,
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <FiLayers className="w-8 h-8" />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive designs that enhance user engagement and satisfaction.',
      color: 'from-indigo-500 to-purple-500',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="services" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              onClick={() => handleServiceClick(service)}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 overflow-hidden cursor-pointer"
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white mb-4 relative z-10`}
              >
                {service.icon}
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-2 relative z-10 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                {service.title}
              </h3>
              <p className="text-gray-400 relative z-10 group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow Indicator */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                whileHover={{ x: 0, opacity: 1 }}
                className="absolute bottom-6 right-6 text-purple-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Service Modal */}
      <ServiceModal
        service={selectedService}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  )
}

export default Services

