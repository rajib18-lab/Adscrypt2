import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'

const Footer = () => {
  const footerLinks = {
    Services: ['Web Development', 'Mobile Development', 'Digital Marketing', 'UI/UX Design'],
    Company: ['About Us', 'Our Team', 'Careers', 'Contact'],
    Resources: ['Blog', 'Case Studies', 'Documentation', 'Support'],
  }

  const socialLinks = [
    { icon: <FiFacebook />, href: '#', name: 'Facebook' },
    { icon: <FiTwitter />, href: '#', name: 'Twitter' },
    { icon: <FiInstagram />, href: '#', name: 'Instagram' },
    { icon: <FiLinkedin />, href: '#', name: 'LinkedIn' },
    { icon: <FiGithub />, href: '#', name: 'GitHub' },
  ]

  return (
    <footer id="contact" className="relative border-t border-gray-800">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent" />
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">A</span>
              </div>
              <span className="text-white font-bold text-xl">ADSCRYPT</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming businesses with cutting-edge IT solutions and digital marketing strategies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([title, links], index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-white font-semibold mb-4">{title}</h3>
              <ul className="space-y-2">
                {links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href="#"
                      whileHover={{ x: 5, color: '#a855f7' }}
                      className="text-gray-400 hover:text-purple-400 transition-colors duration-300"
                    >
                      {link}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Contact Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-white font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <FiMail className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">adscryptmedia@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <FiPhone className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">+91 891896 41641</span>
              </li>
              <li className="flex items-start gap-3">
                <FiMapPin className="text-purple-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Mani Casadona, Plot IIF/04, Action Area IIF, Newtown, Kolkata - 700156, West Bengal, India</span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ADSCRYPT. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

