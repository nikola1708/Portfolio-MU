import { motion } from 'motion/react';
import ScrollReveal from '../components/ScrollReveal';

export default function RefleksiAkhir() {
  return (
    <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
      <section className="py-20 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl mb-8 text-gray-900"
        >
          Refleksi Akhir
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-gray-600 leading-relaxed max-w-3xl"
        >
          Evaluasi mendalam tentang perjalanan pembelajaran dan transformasi sebagai warga negara.
        </motion.p>
      </section>

      <section className="pb-20 border-t border-gray-200">
        <div className="pt-16 max-w-3xl space-y-16">
          {/* Introduction */}
          <ScrollReveal>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900">Perjalanan Transformatif</h2>
              <p className="text-gray-600 leading-relaxed">
                Mata kuliah Pendidikan Kewarganegaraan telah membawa saya pada perjalanan transformatif
                yang mengubah cara pandang saya tentang identitas, tanggung jawab, dan peran sebagai
                warga negara Indonesia. Bukan sekadar pembelajaran teoritis, tetapi sebuah proses
                pembentukan karakter yang mendalam dan bermakna.
              </p>
            </div>
          </ScrollReveal>

          {/* Knowledge */}
          <ScrollReveal delay={0.1}>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900">Evaluasi Pengetahuan</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Sebelum mengikuti mata kuliah ini, pemahaman saya tentang kewarganegaraan sangat terbatas
                  pada konsep-konsep formal seperti memiliki KTP dan hak untuk memilih dalam pemilu. Kini,
                  saya memahami bahwa kewarganegaraan adalah sebuah konsep yang jauh lebih kompleks dan
                  multidimensional.
                </p>

                <div className="space-y-4 pl-6 border-l-2 border-gray-200">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-gray-900 mb-2">Pancasila sebagai Living Ideology</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Pancasila bukan hanya simbol negara, tetapi panduan hidup yang sangat relevan dalam
                      menghadapi tantangan era digital.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-gray-900 mb-2">Keseimbangan Hak dan Kewajiban</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Memahami bahwa HAM bukan hanya tentang menuntut hak, tetapi juga menghormati hak
                      orang lain dan memenuhi kewajiban sebagai anggota masyarakat.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-gray-900 mb-2">Wawasan Nusantara</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Menyadari bahwa sebagai negara kepulauan yang strategis, Indonesia menghadapi
                      tantangan unik yang memerlukan pemahaman holistik tentang keamanan nasional.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-gray-900 mb-2">Demokrasi Partisipatif</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Belajar bahwa demokrasi membutuhkan partisipasi aktif sepanjang waktu, bukan hanya
                      saat pemilu.
                    </p>
                  </motion.div>
                </div>

                <p className="text-gray-600 leading-relaxed">
                  Pembelajaran ini telah memperluas wawasan saya dari perspektif yang sempit dan individualistik
                  menjadi pemahaman yang komprehensif tentang bagaimana sistem berbangsa dan bernegara bekerja.
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Attitude */}
          <ScrollReveal delay={0.2}>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900">Pembaharuan Sikap & Kompetensi</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Transformasi yang paling signifikan terjadi pada sikap dan kompetensi saya sebagai warga
                  negara. Pembelajaran ini tidak hanya mengubah apa yang saya ketahui, tetapi juga bagaimana
                  saya berpikir dan bertindak.
                </p>

                <div className="grid md:grid-cols-2 gap-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-gray-900 mb-2">Kesadaran Kolektif</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Bergeser dari cara berpikir individualistik menjadi memiliki kesadaran kolektif tentang
                      kesejahteraan bersama.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-gray-900 mb-2">Berpikir Kritis</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Mengembangkan kemampuan untuk menganalisis isu sosial dan politik secara kritis.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-gray-900 mb-2">Proaktif & Partisipatif</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Tidak lagi pasif menunggu perubahan, tetapi aktif mencari cara untuk berkontribusi.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="text-gray-900 mb-2">Empati & Toleransi</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lebih menghargai keberagaman dan memiliki empati yang lebih dalam terhadap kelompok berbeda.
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Insights */}
          <ScrollReveal delay={0.3}>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900">Insight Pribadi</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Salah satu insight terpenting yang saya dapatkan adalah bahwa perubahan besar dimulai
                  dari tindakan kecil. Saya tidak perlu menunggu menjadi pejabat atau tokoh terkenal
                  untuk membuat perbedaan.
                </p>

                <ul className="space-y-3 text-gray-600">
                  {[
                    'Menyebarkan konten positif dan edukatif di media sosial',
                    'Terlibat dalam organisasi kemahasiswaan dan kegiatan sosial',
                    'Menjadi teladan dalam menerapkan nilai-nilai Pancasila',
                    'Menggunakan kemampuan teknologi untuk solusi permasalahan sosial'
                  ].map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex gap-3"
                    >
                      <span className="text-gray-400">—</span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-600 leading-relaxed italic border-l-2 border-gray-200 pl-6"
                >
                  "Saya menyadari bahwa menjadi warga negara yang baik bukan tentang kesempurnaan, tetapi
                  tentang komitmen berkelanjutan untuk terus belajar, berkembang, dan berkontribusi pada
                  kemajuan bangsa."
                </motion.p>
              </div>
            </div>
          </ScrollReveal>

          {/* Future Plans */}
          <ScrollReveal delay={0.4}>
            <div>
              <h2 className="text-2xl mb-6 text-gray-900">Rencana ke Depan</h2>
              <div className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  Pembelajaran ini bukan akhir, tetapi awal dari perjalanan panjang sebagai warga negara
                  yang aktif dan bertanggung jawab. Berikut adalah komitmen dan rencana konkret saya:
                </p>

                <div className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                  >
                    <h3 className="text-gray-900 mb-3">Jangka Pendek (1-6 bulan)</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Membuat konten edukatif rutin tentang kewarganegaraan di media sosial</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Bergabung dengan komunitas yang fokus pada isu-isu sosial dan demokrasi</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Mengikuti diskusi publik dan seminar tentang kebijakan kebangsaan</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-gray-900 mb-3">Jangka Menengah (6-12 bulan)</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Mengembangkan platform yang membantu meningkatkan literasi politik masyarakat</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Terlibat aktif dalam program-program pengabdian masyarakat</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Menulis artikel atau penelitian tentang isu-isu kewarganegaraan kontemporer</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <h3 className="text-gray-900 mb-3">Jangka Panjang (1-5 tahun)</h3>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Mengintegrasikan nilai-nilai kewarganegaraan dalam karir profesional</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Menjadi mentor bagi generasi muda dalam pendidikan kewarganegaraan</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-gray-400">—</span>
                        <span>Berkontribusi pada kebijakan publik melalui riset, advokasi, atau partisipasi langsung</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Closing */}
          <ScrollReveal delay={0.5}>
            <div className="border-t border-gray-200 pt-12">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-gray-600 leading-relaxed"
              >
                Terima kasih kepada mata kuliah Pendidikan Kewarganegaraan yang telah membentuk saya
                menjadi individu yang lebih sadar, peduli, dan berkomitmen untuk berkontribusi pada
                bangsa. Perjalanan ini telah menanamkan fondasi yang kuat untuk menjadi warga negara
                Indonesia yang baik dan bertanggung jawab.
              </motion.p>
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 leading-relaxed mt-6 italic"
              >
                Indonesia Jaya, Pancasila Jaya.
              </motion.p>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
