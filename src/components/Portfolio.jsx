import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All')

  const filters = ['All', 'Web', 'Mobile', 'Design', 'Marketing']

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web',
      description: 'Modern e-commerce solution with advanced features',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Mobile App',
      category: 'Mobile',
      description: 'Cross-platform fitness tracking application',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
      tags: ['React Native', 'Firebase'],
    },
    {
      id: 3,
      title: 'Brand Identity Design',
      category: 'Design',
      description: 'Complete brand identity and visual design system',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800',
      tags: ['Figma', 'Illustrator'],
    },
    {
      id: 4,
      title: 'Digital Marketing Campaign',
      category: 'Marketing',
      description: 'Multi-channel marketing strategy and execution',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      tags: ['SEO', 'Social Media', 'PPC'],
    },
    {
      id: 5,
      title: 'SaaS Dashboard',
      category: 'Web',
      description: 'Analytics dashboard for SaaS platform',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      tags: ['Vue.js', 'D3.js', 'Python'],
    },
    {
      id: 6,
      title: 'Food Delivery App',
      category: 'Mobile',
      description: 'On-demand food delivery mobile application',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800',
      tags: ['Flutter', 'Node.js'],
    },
  ]

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="portfolio" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-purple-500/20 text-purple-300 rounded-full text-sm font-semibold mb-4 border border-purple-500/30">
            Our Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our recent work and see how we've helped businesses succeed
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Icons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href="#"
                      className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-gray-900 hover:bg-purple-500 hover:text-white transition-colors"
                    >
                      <FiGithub className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="inline-block px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-semibold mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

