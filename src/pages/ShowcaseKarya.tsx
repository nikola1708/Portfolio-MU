import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import ScrollReveal from '../components/ScrollReveal';

const works = [
  {
    id: 1,
    type: 'Podcast',
    title: 'Pancasila di Era Digital: Tantangan dan Peluang',
    description: 'Podcast mendalam yang membahas bagaimana nilai-nilai Pancasila tetap relevan di era digitalisasi dan media sosial.',
    image: 'https://images.unsplash.com/photo-1709846485906-30b28e7ed651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQ1NzI1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: '45 menit • MP3 • Audacity, Anchor.fm',
  },
  {
    id: 2,
    type: 'Artikel',
    title: 'Peran Generasi Muda dalam Memperkuat Demokrasi Indonesia',
    description: 'Artikel analitis yang mengkaji partisipasi politik generasi muda dan strategi meningkatkan keterlibatan pemuda dalam proses demokrasi.',
    image: 'https://images.unsplash.com/photo-1666184845294-561c0b7b88b8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRvbmVzaWElMjBmbGFnJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2NDU3MzY2MXww&ixlib=rb-4.1.0&q=80&w=1080',
    details: '2500 kata • PDF • Microsoft Word, Grammarly',
  },
  {
    id: 3,
    type: 'Infografis',
    title: 'Mengenal Hak dan Kewajiban Warga Negara Indonesia',
    description: 'Infografis visual yang menyajikan informasi lengkap tentang hak dan kewajiban warga negara berdasarkan UUD 1945.',
    image: 'https://images.unsplash.com/photo-1636247498719-a8a04ed961a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvZ3JhcGhpYyUyMGRlc2lnbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY0NTczNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: 'PNG, PDF • Canva, Adobe Illustrator',
  },
  {
    id: 4,
    type: 'Podcast',
    title: 'Wawasan Nusantara: Menjaga Keutuhan NKRI',
    description: 'Episode podcast yang mengupas konsep Wawasan Nusantara dan tantangan kedaulatan wilayah dengan perspektif historis dan kontemporer.',
    image: 'https://images.unsplash.com/photo-1709846485906-30b28e7ed651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2RjYXN0JTIwbWljcm9waG9uZSUyMHN0dWRpb3xlbnwxfHx8fDE3NjQ1NzI1NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    details: '38 menit • MP3 • Audacity, GarageBand',
  },
  {
    id: 5,
    type: 'Infografis',
    title: 'Implementasi Nilai-Nilai Pancasila dalam Kehidupan Sehari-hari',
    description: 'Infografis yang menunjukkan bagaimana setiap sila Pancasila dapat diimplementasikan dalam kehidupan mahasiswa dengan contoh konkret.',
    image: 'https://images.unsplash.com/photo-1636247498719-a8a04ed961a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmZvZ3JhcGhpYyUyMGRlc2lnbiUyMG1pbmltYWx8ZW58MXx8fHwxNzY0NTczNjYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    details: 'PNG, SVG • Figma, Canva Pro',
  },
];

export default function ShowcaseKarya() {
  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <section className="py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mb-8 text-gray-900"
        >
          Showcase Karya
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl"
        >
          Koleksi karya terbaik yang telah saya hasilkan selama pembelajaran Pendidikan Kewarganegaraan.
        </motion.p>
      </section>

      <section className="pb-20 border-t border-gray-200">
        <div className="pt-16 space-y-20">
          {works.map((work, index) => (
            <ScrollReveal key={work.id} delay={index * 0.1}>
              <article className="grid md:grid-cols-2 gap-12 items-start">
                <motion.div
                  className={index % 2 === 0 ? 'md:order-1' : 'md:order-2'}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="overflow-hidden">
                    <ImageWithFallback
                      src={work.image}
                      alt={work.title}
                      className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                </motion.div>
                <motion.div
                  className={index % 2 === 0 ? 'md:order-2' : 'md:order-1'}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="text-sm text-gray-500 mb-3">{work.type}</div>
                  <h3 className="text-2xl mb-4 text-gray-900">{work.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{work.description}</p>
                  <p className="text-sm text-gray-500">{work.details}</p>
                </motion.div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="pb-20 border-t border-gray-200">
        <ScrollReveal>
          <div className="pt-16">
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Karya-karya ini merepresentasikan pemahaman mendalam saya tentang nilai-nilai kewarganegaraan
              dan kemampuan untuk mengkomunikasikan konsep-konsep penting kepada masyarakat luas melalui
              berbagai media kreatif.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
