import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiCheck } from 'react-icons/fi'

const ServiceModal = ({ service, isOpen, onClose }) => {
  if (!service) return null

  const serviceDetails = {
    'Web Development': {
      description: 'We create powerful, scalable web applications using cutting-edge technologies. Our solutions are designed to grow with your business and provide exceptional user experiences.',
      features: [
        'Custom web application development',
        'React, Vue, Angular, and Next.js expertise',
        'Responsive and mobile-first design',
        'API integration and backend development',
        'Performance optimization',
        'SEO-friendly architecture',
        'E-commerce solutions',
        'Content Management Systems (CMS)'
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker'],
      pricing: 'Starting from $2,500',
      duration: '4-12 weeks'
    },
    'Mobile Development': {
      description: 'Build native and cross-platform mobile applications that deliver exceptional user experiences. We create apps for iOS, Android, and hybrid solutions.',
      features: [
        'Native iOS and Android development',
        'Cross-platform solutions (React Native, Flutter)',
        'App Store optimization and deployment',
        'Push notifications and real-time features',
        'Offline functionality',
        'Secure authentication and payment integration',
        'App analytics and performance monitoring',
        'Maintenance and updates'
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'App Store'],
      // pricing: 'Starting from $500',
      duration: '6-16 weeks'
    },
    'Digital Marketing': {
      description: 'Data-driven digital marketing strategies that boost your online presence, drive conversions, and maximize ROI. We help you reach and engage your target audience effectively.',
      features: [
        'Social media marketing and management',
        'Content marketing and strategy',
        'Pay-per-click (PPC) advertising',
        'Email marketing campaigns',
        'Influencer partnerships',
        'Analytics and performance tracking',
        'Conversion rate optimization',
        'Brand awareness campaigns'
      ],
      technologies: ['Google Ads', 'Facebook Ads', 'Analytics', 'Mailchimp', 'Hootsuite', 'SEMrush'],
      pricing: 'Starting from $1,500/month',
      duration: 'Ongoing campaigns'
    },
    'Cybersecurity': {
      description: 'Comprehensive security solutions to protect your digital assets, data, and infrastructure from threats. We ensure your business stays secure and compliant.',
      features: [
        'Security audits and assessments',
        'Penetration testing',
        'Firewall and network security',
        'Data encryption and backup solutions',
        'Security training for employees',
        'Compliance (GDPR, HIPAA, PCI-DSS)',
        '24/7 security monitoring',
        'Incident response and recovery'
      ],
      technologies: ['SSL/TLS', 'VPN', 'Firewall', 'SIEM', 'Encryption', 'Compliance Tools'],
      pricing: 'Starting from $2,000',
      duration: 'Ongoing support'
    },
    'SEO Optimization': {
      description: 'Improve your search engine rankings and drive organic traffic to your website. Our SEO strategies help you rank higher and attract qualified leads.',
      features: [
        'Keyword research and analysis',
        'On-page and off-page SEO',
        'Technical SEO audits',
        'Link building strategies',
        'Content optimization',
        'Local SEO optimization',
        'Competitor analysis',
        'Monthly reporting and insights'
      ],
      technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Screaming Frog'],
      pricing: 'Starting from $800/month',
      duration: 'Ongoing optimization'
    },
    'UI/UX Design': {
      description: 'Beautiful and intuitive designs that enhance user engagement and satisfaction. We create user-centered designs that convert visitors into customers.',
      features: [
        'User research and persona development',
        'Wireframing and prototyping',
        'Visual design and branding',
        'User experience optimization',
        'Design systems and style guides',
        'Responsive design implementation',
        'Usability testing',
        'Design handoff to developers'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Principle', 'After Effects'],
      pricing: 'Starting from $1,200',
      duration: '2-8 weeks'
    }
  }

  const details = serviceDetails[service.title] || {
    description: service.description,
    features: [],
    technologies: [],
    pricing: 'Contact for pricing',
    duration: 'Varies'
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700 relative"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center text-white transition-colors z-10"
              >
                <FiX className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className={`p-8 bg-gradient-to-br ${service.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative z-10">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring" }}
                    className={`w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6`}
                  >
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </motion.div>
                  <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                  <p className="text-white/90 text-lg">{details.description}</p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Features */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {details.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.05 }}
                        className="flex items-start gap-3"
                      >
                        <div className={`mt-1 w-5 h-5 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <FiCheck className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {details.technologies.map((tech, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.05 }}
                        className={`px-4 py-2 bg-gradient-to-br ${service.color} text-white rounded-full text-sm font-semibold`}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                {/* Pricing & Duration */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h4 className="text-gray-400 text-sm mb-2">Starting Price</h4>
                    <p className="text-2xl font-bold text-white">{details.pricing}</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
                    <h4 className="text-gray-400 text-sm mb-2">Project Duration</h4>
                    <p className="text-2xl font-bold text-white">{details.duration}</p>
                  </div>
                </div> */}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      onClose()
                      // Scroll to contact section
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                    }}
                    className={`flex-1 px-6 py-3 bg-gradient-to-br ${service.color} text-white rounded-full font-semibold hover:shadow-lg transition-all`}
                  >
                    Get a Quote
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={onClose}
                    className="flex-1 px-6 py-3 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-700 transition-all border border-gray-700"
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ServiceModal

