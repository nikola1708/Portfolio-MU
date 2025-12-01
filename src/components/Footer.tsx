import { motion } from 'motion/react';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-auto">
      <div className="container mx-auto px-6 lg:px-12 max-w-6xl py-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-600 text-sm"
        >
          <p>© 2025 M.Nikola</p>
          <p className="mt-1">Portofolio Pendidikan Kewarganegaraan</p>
        </motion.div>
      </div>
    </footer>
  );
}