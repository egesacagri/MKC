import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Kullanım Koşulları",
  description:
    "MKC Visa internet sitesinin kullanımına ilişkin koşullar, fikri mülkiyet, sorumluluk sınırlamaları ve uyuşmazlık çözüm hükümleri.",
};

const LAST_UPDATED = "17 Mayıs 2026";

export default function KullanimKosullariPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>Hukuki Bilgilendirme</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Kullanım
            <br />
            <span className="italic font-light">Koşulları</span>.
          </h1>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted">
            Son güncelleme: {LAST_UPDATED}
          </p>
        </Container>
      </section>

      <section className="pb-24 md:pb-32">
        <Container>
          <article className="max-w-3xl mx-auto prose-legal">
            <p className="lead">
              İşbu Kullanım Koşulları (&quot;Koşullar&quot;), MKC Vize
              Danışmanlık (&quot;MKC Visa&quot;, &quot;Şirket&quot;)
              tarafından işletilen <strong>mkcvisa.com</strong> internet
              sitesinin (&quot;Site&quot;) ziyaretçileri ve kullanıcıları
              (&quot;Kullanıcı&quot;) tarafından okunup anlaşıldığı kabul
              edilerek yürürlüğe girer. Siteyi ziyaret etmeniz ve/veya
              hizmetlerimizden yararlanmanız, işbu Koşulları kabul ettiğiniz
              anlamına gelir. Koşulları kabul etmiyorsanız, lütfen Siteyi
              kullanmayınız.
            </p>

            <h2>1. Taraflar</h2>
            <p>
              İşbu Koşulların tarafları; MKC Vize Danışmanlık ile Siteyi
              ziyaret eden ya da hizmetlerinden yararlanan Kullanıcı&apos;dır.
              Şirket bilgileri:
            </p>
            <ul>
              <li>
                <strong>Unvan:</strong> MKC Vize Danışmanlık
              </li>
              <li>
                <strong>Adres:</strong> Ankara / Türkiye [Tam açık adres
                yayından önce ibraz edilmelidir]
              </li>
              <li>
                <strong>MERSİS / Vergi No:</strong> [Yayından önce ibraz
                edilmelidir]
              </li>
              <li>
                <strong>E-posta:</strong>{" "}
                <a href="mailto:info@mkcvize.com">info@mkcvize.com</a>
              </li>
              <li>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+905320000000">+90 532 000 0000</a>
              </li>
            </ul>

            <h2>2. Tanımlar</h2>
            <ul>
              <li>
                <strong>Site:</strong> mkcvisa.com alan adı üzerinden yayında
                bulunan ve MKC Visa&apos;ya ait tüm alt alan adları, sayfalar,
                içerikler ve hizmetler.
              </li>
              <li>
                <strong>Kullanıcı:</strong> Siteye herhangi bir cihaz üzerinden
                erişim sağlayan ya da Site üzerinde sunulan formlar aracılığıyla
                MKC Visa ile iletişime geçen gerçek veya tüzel kişi.
              </li>
              <li>
                <strong>İçerik:</strong> Sitede yer alan her türlü yazı,
                fotoğraf, görsel, video, grafik, simge, marka, logo, tasarım,
                kaynak kodu, yazılım ve benzeri unsur.
              </li>
              <li>
                <strong>Hizmet:</strong> MKC Visa tarafından sunulan vize
                danışmanlığı ve buna bağlı yardımcı hizmetler.
              </li>
            </ul>

            <h2>3. Hizmetlerin Niteliği</h2>
            <p>
              MKC Visa, vize başvurusu süreçlerine ilişkin danışmanlık, dosya
              hazırlama, randevu organizasyonu ve süreç takibi hizmetleri
              sunan özel hukuk tüzel kişisidir. MKC Visa <strong>hiçbir
              şekilde resmi bir devlet kurumu, konsolosluk veya elçilik
              değildir</strong>; vize verme veya reddetme yetkisi yoktur.
              Vize başvurularının sonuçları, başvurunun yapıldığı ülkenin
              yetkili makamlarının takdirinde olup, MKC Visa başvurunun
              <strong> olumlu sonuçlanacağına dair herhangi bir taahhütte
              bulunmaz</strong>. Sunulan hizmetler yalnızca başvuru sürecinin
              profesyonel destekle yönetilmesini kapsar.
            </p>

            <h2>4. Bilgilerin Doğruluğu ve Genel Bilgilendirme Niteliği</h2>
            <p>
              Sitede yer alan ülke bilgileri, vize prosedürleri, ücretler,
              süreler ve benzeri içerikler genel bilgilendirme amacıyla
              sunulmakta olup, ilgili ülke makamlarının mevzuat ve
              uygulamalarına bağlı olarak önceden haber verilmeksizin
              değişebilir. Bu içerikler hukuki tavsiye niteliğinde değildir
              ve bağlayıcı bir taahhüt oluşturmaz. Kullanıcı, kararlarını
              almadan önce güncel bilgileri ilgili resmi makamdan veya MKC
              Visa&apos;dan ayrıca teyit etmekle yükümlüdür.
            </p>

            <h2>5. Kullanıcı Yükümlülükleri</h2>
            <p>Kullanıcı, Siteyi ve Hizmetleri kullanırken:</p>
            <ul>
              <li>
                Yürürlükteki tüm mevzuata, ahlâk kurallarına ve işbu Koşullara
                uymayı,
              </li>
              <li>
                İlettiği tüm bilgi ve belgelerin <strong>doğru, güncel ve
                kendisine ait</strong> olduğunu; başkalarına ait belge veya
                bilgiyi yetkisiz şekilde kullanmayacağını,
              </li>
              <li>
                Sahte, yanıltıcı veya tahrif edilmiş belge sunmayacağını; aksi
                hâlde doğacak idari, hukuki ve cezai sorumluluğun münhasıran
                kendisine ait olduğunu,
              </li>
              <li>
                Siteye, Sitenin altyapısına veya başka kullanıcılara zarar
                verebilecek (zararlı yazılım, otomatik bot, kazıyıcı/scraper,
                ters mühendislik, yetkisiz erişim girişimi vb.) hiçbir
                faaliyette bulunmayacağını,
              </li>
              <li>
                Site içeriğini, MKC Visa&apos;nın yazılı izni olmaksızın
                kopyalamayacağını, çoğaltmayacağını, dağıtmayacağını,
                yayımlamayacağını veya ticari amaçla kullanmayacağını,
              </li>
              <li>
                Üçüncü kişilerin fikri ve sınai haklarını ile kişisel
                verilerini ihlal etmeyeceğini
              </li>
            </ul>
            <p>kabul ve taahhüt eder.</p>

            <h2>6. Fikri ve Sınai Mülkiyet Hakları</h2>
            <p>
              Sitede yer alan tüm İçerikler, 5846 sayılı Fikir ve Sanat
              Eserleri Kanunu, 6769 sayılı Sınai Mülkiyet Kanunu ve ilgili
              uluslararası anlaşmalar kapsamında korunmaktadır. &quot;MKC
              Visa&quot; ibaresi, logosu, tasarımı ve internet sitesinin genel
              kompozisyonu üzerindeki tüm haklar münhasıran MKC Visa&apos;ya
              aittir. MKC Visa&apos;nın yazılı izni olmaksızın bu İçeriklerin
              herhangi bir şekilde kopyalanması, çoğaltılması, değiştirilmesi,
              dağıtılması, yayımlanması veya ticari amaçla kullanılması
              yasaktır. Bu yasağa aykırı her türlü kullanım hukuki ve cezai
              sorumluluk doğurur.
            </p>

            <h2>7. Bağlantılar ve Üçüncü Taraf İçerikler</h2>
            <p>
              Sitede üçüncü taraflara ait sitelere ya da kaynaklara bağlantılar
              bulunabilir. Bu bağlantılar yalnızca kolaylık amacıyla sunulmuş
              olup, MKC Visa söz konusu üçüncü taraf içeriklerin doğruluğu,
              güncelliği veya güvenilirliği konusunda herhangi bir taahhütte
              bulunmaz ve bunların kullanımından doğan zararlardan sorumlu
              tutulamaz.
            </p>

            <h2>8. Sorumluluğun Sınırlandırılması</h2>
            <p>
              MKC Visa; Sitenin kesintisiz, hatasız veya güvenli olduğunu
              taahhüt etmez. Mücbir sebepler, internet altyapısındaki
              aksaklıklar, üçüncü taraf hizmet sağlayıcılarından kaynaklanan
              kesintiler, bakım çalışmaları veya makul kontrol dışı sebeplerden
              doğan zararlardan sorumlu tutulamaz. MKC Visa&apos;nın
              sorumluluğu, yürürlükteki mevzuatın izin verdiği azami sınırlar
              içinde sınırlandırılmıştır. Tüketici sıfatını haiz Kullanıcıların
              6502 sayılı Tüketicinin Korunması Hakkında Kanun&apos;dan doğan
              hakları saklıdır.
            </p>
            <p>
              MKC Visa, vize başvurularının olumlu sonuçlanacağı; başvuruların
              belirli bir süre içinde sonuçlandırılacağı; ilgili ülke
              makamlarının uygulama ve mevzuat değişikliklerinden
              kaynaklanabilecek sonuçlar konusunda hiçbir garanti vermez.
              Vize başvurusunun reddedilmesi durumunda devlet/konsolosluk
              tarafından tahsil edilen ücretler iade edilmez; MKC Visa
              tarafından sunulan danışmanlık hizmetlerine ilişkin ücret iadesi,
              yalnızca taraflar arasındaki yazılı sözleşmede öngörülen şartlar
              ve <strong>6502 sayılı Kanun</strong> ile <strong>Mesafeli
              Sözleşmeler Yönetmeliği</strong> hükümleri çerçevesinde geçerli
              olur.
            </p>

            <h2>9. Mesafeli Sözleşme ve Cayma Hakkı</h2>
            <p>
              Site üzerinden elektronik ortamda hizmet satın alınması hâlinde
              kurulan sözleşme, 6502 sayılı Tüketicinin Korunması Hakkında
              Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında mesafeli
              sözleşme niteliğindedir. Tüketici sıfatını haiz Kullanıcı, 14
              gün içinde herhangi bir gerekçe göstermeksizin ve cezai şart
              ödemeksizin cayma hakkını kullanabilir. Ancak Mesafeli
              Sözleşmeler Yönetmeliği m.15/1-(h) uyarınca <strong>cayma süresi
              dolmadan tüketicinin onayı ile ifasına başlanan
              hizmetlere</strong> ilişkin sözleşmelerde cayma hakkı
              kullanılamaz. Vize danışmanlığı hizmetlerinde dosya hazırlığına
              başlanmasıyla birlikte hizmet ifasının başladığı kabul edilir;
              Kullanıcı sipariş veya sözleşme onayı sırasında bu durum
              hakkında açıkça bilgilendirilir.
            </p>

            <h2>10. Ücret ve Ödeme</h2>
            <p>
              Hizmet ücretleri, taraflar arasında akdedilen yazılı sözleşmede
              belirlenir. Devlet harçları, konsolosluk ücretleri, başvuru
              merkezi hizmet bedelleri, kurye, tercüme, noter, sigorta gibi
              üçüncü kişilere ödenen tutarlar danışmanlık ücretine dâhil
              değildir ve bu tutarların ilgili merciler tarafından
              değiştirilmesi durumunda fark Kullanıcı tarafından karşılanır.
            </p>

            <h2>11. Gizlilik ve Kişisel Verilerin Korunması</h2>
            <p>
              Kullanıcıların kişisel verileri,{" "}
              <a href="/gizlilik-politikasi">Gizlilik Politikası</a> ve{" "}
              <a href="/kvkk">KVKK Aydınlatma Metni</a> doğrultusunda işlenir.
              Kullanıcı, Siteyi kullanmakla bu metinleri okuduğunu ve KVKK
              kapsamındaki haklarını bildiğini kabul eder.
            </p>

            <h2>12. Değişiklik Hakkı</h2>
            <p>
              MKC Visa, işbu Koşulları, hizmetlerini, Site içeriklerini ve
              ücretlerini önceden bildirim yapma yükümlülüğü olmaksızın
              değiştirme hakkını saklı tutar. Değişiklikler, Sitede
              yayımlandığı tarih itibarıyla yürürlüğe girer. Yürürlük sonrası
              Sitenin kullanılmaya devam edilmesi, güncel Koşulların kabul
              edildiği anlamına gelir.
            </p>

            <h2>13. Sözleşmenin Sona Ermesi ve Erişimin Kısıtlanması</h2>
            <p>
              MKC Visa, işbu Koşullara veya mevzuata aykırı davrandığını
              tespit ettiği Kullanıcıların Siteye erişimini önceden bildirim
              yapma yükümlülüğü olmaksızın geçici veya sürekli olarak
              kısıtlama; varsa yasal yollara başvurma hakkını saklı tutar.
            </p>

            <h2>14. Uygulanacak Hukuk ve Yetkili Mahkeme</h2>
            <p>
              İşbu Koşullardan ve Sitenin kullanımından doğacak her türlü
              uyuşmazlığın çözümünde <strong>Türkiye Cumhuriyeti
              hukuku</strong> uygulanır. Uyuşmazlıkların çözümünde
              <strong> Ankara Mahkemeleri ve İcra Daireleri</strong> yetkilidir.
              Tüketici sıfatını haiz Kullanıcılar için 6502 sayılı Tüketicinin
              Korunması Hakkında Kanun&apos;un 68. maddesi ile Tüketici
              Hakem Heyetleri Yönetmeliği&apos;nde öngörülen parasal sınırlar
              dâhilinde Tüketici Hakem Heyetlerine; sınırın üzerindeki
              uyuşmazlıklarda Tüketici Mahkemelerine başvuru hakları saklıdır.
            </p>

            <h2>15. Bölünebilirlik</h2>
            <p>
              İşbu Koşulların herhangi bir hükmünün geçersiz veya
              uygulanamaz hâle gelmesi, diğer hükümlerin geçerliliğini ve
              uygulanabilirliğini etkilemez.
            </p>

            <h2>16. İletişim</h2>
            <p>
              Kullanım Koşulları hakkındaki soru ve talepleriniz için bizimle
              iletişime geçebilirsiniz:{" "}
              <a href="mailto:info@mkcvize.com">info@mkcvize.com</a>.
            </p>

            <p className="signature">
              <strong>MKC Vize Danışmanlık</strong>
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
