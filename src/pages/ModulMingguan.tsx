import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const modules = [
  {
    week: 1,
    title: 'Pengantar Pendidikan Kewarganegaraan',
    essentialQuestion: 'Mengapa Pendidikan Kewarganegaraan penting dalam membentuk karakter bangsa?',
    summary: 'Memahami konsep dasar kewarganegaraan, sejarah perkembangan pendidikan kewarganegaraan di Indonesia, dan relevansinya dengan kehidupan berbangsa dan bernegara. Diskusi tentang peran warga negara dalam pembangunan nasional.',
    evidence: ['Catatan Kuliah', 'Mind Map', 'Dokumentasi Diskusi'],
    reflection: 'Melalui minggu pertama ini, saya menyadari bahwa menjadi warga negara bukan hanya tentang memiliki KTP, tetapi tentang tanggung jawab aktif dalam kehidupan bermasyarakat. Pendidikan kewarganegaraan memberikan fondasi penting untuk memahami hak dan kewajiban kita sebagai bagian dari bangsa Indonesia.',
  },
  {
    week: 2,
    title: 'Pancasila sebagai Dasar Negara',
    essentialQuestion: 'Bagaimana Pancasila menjadi landasan filosofis kehidupan berbangsa dan bernegara?',
    summary: 'Mempelajari nilai-nilai Pancasila secara mendalam, sejarah perumusan Pancasila, dan implementasinya dalam kehidupan sehari-hari. Analisis kasus-kasus aktual terkait penerapan nilai-nilai Pancasila di masyarakat.',
    evidence: ['Video Presentasi', 'Essay Analisis', 'Infografis 5 Sila'],
    reflection: 'Pancasila bukan sekadar hafalan, tetapi pedoman hidup yang sangat relevan. Di era digital ini, saya melihat banyak tantangan terhadap nilai-nilai Pancasila, terutama terkait persatuan dan kemanusiaan. Pembelajaran ini memotivasi saya untuk menjadi agen perubahan dalam menyebarkan nilai-nilai positif di media sosial.',
  },
  {
    week: 3,
    title: 'UUD 1945 dan Sistem Ketatanegaraan',
    essentialQuestion: 'Bagaimana UUD 1945 mengatur kehidupan bernegara dan melindungi hak-hak warga negara?',
    summary: 'Memahami struktur dan isi UUD 1945, lembaga-lembaga negara dan fungsinya, serta mekanisme checks and balances dalam sistem ketatanegaraan Indonesia. Diskusi tentang amandemen UUD 1945 dan implikasinya.',
    evidence: ['Ringkasan UUD 1945', 'Bagan Lembaga Negara', 'Podcast Amandemen'],
    reflection: 'Mempelajari UUD 1945 membuka mata saya tentang betapa cerdasnya para pendiri bangsa dalam merancang sistem ketatanegaraan. Proses amandemen menunjukkan bahwa konstitusi harus dinamis mengikuti perkembangan zaman, namun tetap mempertahankan nilai-nilai fundamental bangsa.',
  },
  {
    week: 4,
    title: 'Hak Asasi Manusia (HAM)',
    essentialQuestion: 'Apa hubungan antara HAM dengan kewajiban sebagai warga negara?',
    summary: 'Eksplorasi konsep HAM universal dan dalam konteks Indonesia, sejarah perjuangan HAM, serta tantangan penegakan HAM. Analisis keseimbangan antara hak dan kewajiban warga negara dalam masyarakat demokratis.',
    evidence: ['Dokumenter HAM', 'Makalah Analisis Kasus', 'Studi Literatur'],
    reflection: 'HAM bukan hanya tentang menuntut hak, tetapi juga tentang menghormati hak orang lain. Pembelajaran ini membuat saya lebih peka terhadap isu-isu sosial di sekitar dan termotivasi untuk ikut serta dalam upaya penegakan HAM, dimulai dari lingkungan terdekat.',
  },
  {
    week: 5,
    title: 'Wawasan Nusantara dan Ketahanan Nasional',
    essentialQuestion: 'Bagaimana Wawasan Nusantara memperkuat ketahanan nasional Indonesia?',
    summary: 'Memahami konsep Wawasan Nusantara sebagai geopolitik Indonesia, tantangan dalam menjaga keutuhan wilayah, dan strategi ketahanan nasional di berbagai aspek (ideologi, politik, ekonomi, sosial budaya, dan pertahanan keamanan).',
    evidence: ['Peta Konsep', 'Analisis Ancaman', 'Wawancara Pakar'],
    reflection: 'Sebagai negara kepulauan yang strategis, Indonesia menghadapi banyak tantangan. Wawasan Nusantara mengajarkan saya untuk berpikir secara holistik tentang keamanan nasional, tidak hanya dari aspek militer tetapi juga ekonomi, budaya, dan teknologi.',
  },
  {
    week: 6,
    title: 'Demokrasi dan Partisipasi Politik',
    essentialQuestion: 'Bagaimana partisipasi aktif warga negara memperkuat demokrasi?',
    summary: 'Mempelajari konsep demokrasi Pancasila, sejarah perkembangan demokrasi di Indonesia, mekanisme partisipasi politik, dan pentingnya literasi politik. Diskusi tentang pemilu, partai politik, dan peran generasi muda dalam politik.',
    evidence: ['Simulasi Pemilu', 'Survey Partisipasi', 'Infografis Pemilu'],
    reflection: 'Demokrasi memerlukan partisipasi aktif, bukan hanya saat pemilu. Saya belajar bahwa sebagai generasi muda, tanggung jawab saya bukan hanya memilih dengan cerdas, tetapi juga mengawasi kinerja pejabat publik dan berpartisipasi dalam diskusi kebijakan publik.',
  },
];

export default function ModulMingguan() {
  const [expandedWeek, setExpandedWeek] = useState<number | null>(null);

  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <section className="py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mb-8 text-gray-900"
        >
          Modul Mingguan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl"
        >
          Dokumentasi pembelajaran per minggu dengan ringkasan materi, pertanyaan inti,
          bukti pembelajaran, dan refleksi pribadi.
        </motion.p>
      </section>

      <section className="pb-20 border-t border-gray-200">
        <div className="pt-16 space-y-1">
          {modules.map((module, index) => (
            <ScrollReveal key={module.week} delay={index * 0.05}>
              <div className="border-b border-gray-200">
                <motion.button
                  onClick={() => setExpandedWeek(expandedWeek === module.week ? null : module.week)}
                  className="w-full text-left py-6 flex justify-between items-center hover:text-gray-600 transition-colors group"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm text-gray-400">Minggu {module.week}</span>
                    <h3 className="text-xl text-gray-900">{module.title}</h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedWeek === module.week ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="size-5 text-gray-400" />
                  </motion.div>
                </motion.button>

                <AnimatePresence>
                  {expandedWeek === module.week && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                        className="pb-12 space-y-8"
                      >
                        <div>
                          <h4 className="text-sm text-gray-500 mb-2">Pertanyaan Inti</h4>
                          <p className="text-gray-900 leading-relaxed italic">{module.essentialQuestion}</p>
                        </div>

                        <div>
                          <h4 className="text-sm text-gray-500 mb-2">Ringkasan</h4>
                          <p className="text-gray-600 leading-relaxed">{module.summary}</p>
                        </div>

                        <div>
                          <h4 className="text-sm text-gray-500 mb-3">Bukti Pembelajaran</h4>
                          <ul className="space-y-1">
                            {module.evidence.map((item, idx) => (
                              <motion.li
                                key={idx}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                className="text-gray-600"
                              >
                                — {item}
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-sm text-gray-500 mb-2">Refleksi</h4>
                          <p className="text-gray-600 leading-relaxed italic">{module.reflection}</p>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  );
}
