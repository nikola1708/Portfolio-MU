import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ScrollReveal from '../components/ScrollReveal';

export default function Home() {
  const navLinks = [
    {
      path: '/modul-mingguan',
      title: 'Modul Mingguan',
      description: 'Dokumentasi pembelajaran per minggu dengan ringkasan materi, pertanyaan inti, bukti pembelajaran, dan refleksi pribadi dari setiap topik yang dipelajari.',
    },
    {
      path: '/showcase-karya',
      title: 'Showcase Karya',
      description: 'Galeri karya terbaik yang telah saya hasilkan selama pembelajaran, termasuk podcast, artikel, dan infografis tentang kewarganegaraan.',
    },
    {
      path: '/refleksi-akhir',
      title: 'Refleksi Akhir',
      description: 'Evaluasi mendalam tentang perjalanan pembelajaran, transformasi pemahaman, dan komitmen untuk menjadi warga negara yang lebih baik.',
    },
  ];

  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-6xl mb-8 text-gray-900">
              Portofolio<br />Kewarganegaraan
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 leading-relaxed mb-12 max-w-3xl"
          >
            Dokumentasi perjalanan pembelajaran dalam memahami nilai-nilai kewarganegaraan
            dan mengembangkan kompetensi sebagai warga negara yang baik.
          </motion.p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 border-t border-gray-200">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <h2 className="text-3xl mb-6 text-gray-900">Tentang</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <strong className="text-gray-900">Nama:</strong> Ahmad Rizki Pratama
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <strong className="text-gray-900">Program Studi:</strong> Teknik Informatika
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <strong className="text-gray-900">Universitas:</strong> Universitas Indonesia
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <strong className="text-gray-900">Semester:</strong> 2 - Tahun Akademik 2024/2025
              </motion.p>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1600178572204-6ac8886aae63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzdHVkZW50JTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0NTcyODM2fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Profile"
                className="w-full aspect-square object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          </ScrollReveal>
        </div>
      </section>

      {/* Course Info */}
      <section className="py-16 border-t border-gray-200">
        <ScrollReveal>
          <h2 className="text-3xl mb-8 text-gray-900">Pendidikan Kewarganegaraan</h2>
        </ScrollReveal>
        
        <div className="grid md:grid-cols-3 gap-12">
          <ScrollReveal delay={0.1}>
            <h3 className="text-xl mb-4 text-gray-900">Tujuan</h3>
            <p className="text-gray-600 leading-relaxed">
              Membentuk mahasiswa menjadi warga negara yang memiliki rasa kebangsaan dan cinta
              tanah air, demokratis, bertanggung jawab, dan berpartisipasi aktif dalam masyarakat.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <h3 className="text-xl mb-4 text-gray-900">Pentingnya</h3>
            <p className="text-gray-600 leading-relaxed">
              Menanamkan nilai-nilai Pancasila, memahami hak dan kewajiban sebagai warga negara,
              serta mengembangkan kemampuan berpikir kritis terhadap isu-isu kebangsaan.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={0.3}>
            <h3 className="text-xl mb-4 text-gray-900">Kompetensi</h3>
            <p className="text-gray-600 leading-relaxed">
              Mampu menganalisis permasalahan berbangsa dan bernegara, memiliki karakter yang
              kuat, serta berkontribusi dalam pembangunan nasional dengan integritas tinggi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Navigation Links */}
      <section className="py-16 border-t border-gray-200">
        <div className="space-y-8">
          {navLinks.map((link, index) => (
            <ScrollReveal key={link.path} delay={index * 0.1}>
              <Link to={link.path} className="block group">
                <motion.div
                  whileHover={{ x: 8 }}
                  transition={{ duration: 0.3 }}
                  className="border border-gray-200 p-8 hover:border-gray-900 transition-colors"
                >
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3 text-gray-900">{link.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{link.description}</p>
                    </div>
                    <motion.div
                      initial={{ x: 0 }}
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="size-6 text-gray-400 group-hover:text-gray-900 transition-colors shrink-0" />
                    </motion.div>
                  </div>
                </motion.div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
