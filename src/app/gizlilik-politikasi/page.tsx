import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "Gizlilik Politikası",
  description:
    "MKC Visa internet sitesi gizlilik politikası; toplanan veriler, çerez kullanımı, üçüncü taraf hizmetler ve kullanıcı hakları hakkında detaylı bilgi.",
};

const LAST_UPDATED = "17 Mayıs 2026";

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>Hukuki Bilgilendirme</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Gizlilik
            <br />
            <span className="italic font-light">Politikası</span>.
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
              MKC Vize Danışmanlık (&quot;MKC Visa&quot;, &quot;biz&quot;,
              &quot;Şirket&quot;) olarak, ziyaretçilerimizin ve
              müşterilerimizin gizliliğine büyük önem veriyoruz. İşbu Gizlilik
              Politikası; <strong>mkcvisa.com</strong> internet sitesini
              (&quot;Site&quot;) ziyaretiniz, hizmetlerimizden yararlanmanız
              veya bizimle herhangi bir kanaldan iletişim kurmanız sırasında
              tarafımıza ilettiğiniz bilgilerin ne şekilde toplandığını,
              işlendiğini, korunduğunu ve hangi hâllerde üçüncü kişilere
              aktarıldığını açıklar. Bu metin, 6698 sayılı Kişisel Verilerin
              Korunması Kanunu (&quot;KVKK&quot;), 5651 sayılı İnternet
              Ortamında Yapılan Yayınların Düzenlenmesi ve Bu Yayınlar Yoluyla
              İşlenen Suçlarla Mücadele Edilmesi Hakkında Kanun, 6563 sayılı
              Elektronik Ticaretin Düzenlenmesi Hakkında Kanun ve ilgili ikincil
              mevzuata uygun olarak hazırlanmıştır.
            </p>

            <h2>1. Veri Sorumlusu</h2>
            <p>
              KVKK kapsamında veri sorumlusu MKC Vize Danışmanlık olup iletişim
              bilgileri aşağıdaki gibidir:
            </p>
            <ul>
              <li>
                <strong>Adres:</strong> Ankara / Türkiye [Tam açık adres
                yayından önce ibraz edilmelidir]
              </li>
              <li>
                <strong>E-posta:</strong>{" "}
                <a href="mailto:mkcvize@gmail.com">mkcvize@gmail.com</a>
              </li>
              <li>
                <strong>Telefon:</strong>{" "}
                <a href="tel:+905320000000">+90 532 000 0000</a>
              </li>
            </ul>
            <p>
              KVKK kapsamındaki haklarınız ve kişisel verilerinizin işlenmesine
              ilişkin detaylı bilgi için lütfen{" "}
              <a href="/kvkk">KVKK Aydınlatma Metni</a> sayfamızı inceleyiniz.
            </p>

            <h2>2. Topladığımız Bilgiler</h2>
            <h3>2.1. Doğrudan Tarafımıza İlettiğiniz Bilgiler</h3>
            <p>
              Başvuru formu, iletişim formu, e-posta, telefon, sosyal medya
              veya yüz yüze görüşmeler yoluyla bize aşağıdaki bilgileri
              iletebilirsiniz:
            </p>
            <ul>
              <li>Ad-soyad, doğum tarihi, uyruk,</li>
              <li>Telefon numarası, e-posta adresi, yazışma adresi,</li>
              <li>
                Pasaport, kimlik, eğitim, mesleki ve finansal belgeler,
              </li>
              <li>Vize geçmişi, seyahat planı ve hedef ülke bilgileri,</li>
              <li>
                Açık rızanız hâlinde sağlık raporu, biyometrik fotoğraf, adli
                sicil kaydı gibi özel nitelikli veriler.
              </li>
            </ul>

            <h3>2.2. Otomatik Olarak Toplanan Bilgiler</h3>
            <p>
              Siteyi ziyaret ettiğinizde, kullanıcı deneyimini iyileştirmek ve
              bilgi güvenliğini sağlamak amacıyla tarayıcınız veya cihazınız
              tarafından otomatik olarak iletilen bazı veriler 5651 sayılı
              Kanun&apos;un öngördüğü erişim sağlayıcı yükümlülükleri ile
              uyumlu şekilde işlenir:
            </p>
            <ul>
              <li>IP adresi, oturum kimliği, kullanılan port bilgisi,</li>
              <li>
                Tarayıcı türü ve sürümü, işletim sistemi, cihaz türü, ekran
                çözünürlüğü,
              </li>
              <li>
                Sitemize geliş kaynağı (yönlendiren URL), ziyaret edilen
                sayfalar, sayfada kalma süresi, tıklama kayıtları,
              </li>
              <li>Coğrafi konum bilgisi (yalnızca ülke/şehir düzeyinde).</li>
            </ul>

            <h3>2.3. Üçüncü Kişilerden Aldığımız Bilgiler</h3>
            <p>
              Sosyal medya entegrasyonları, ödeme sağlayıcıları, vize başvuru
              merkezleri veya iş ortaklarımız aracılığıyla bize aktarılan
              bilgiler de bu Politika kapsamında işlenir.
            </p>

            <h2>3. Bilgilerin İşlenme Amaçları</h2>
            <ul>
              <li>Sunulan vize danışmanlığı hizmetlerinin yürütülmesi,</li>
              <li>
                Müşteri ilişkileri yönetimi; teklif, sözleşme, fatura
                süreçleri,
              </li>
              <li>Web sitesinin işletilmesi ve iyileştirilmesi,</li>
              <li>İletişim taleplerinin karşılanması,</li>
              <li>
                Açık rızanız hâlinde ticari elektronik ileti gönderimi
                (6563 sayılı Kanun çerçevesinde),
              </li>
              <li>Yasal yükümlülüklerin yerine getirilmesi,</li>
              <li>
                Bilgi güvenliğinin sağlanması ve siber saldırılara karşı
                korunma,
              </li>
              <li>Hukuki taleplerin tesisi, kullanılması ve savunulması.</li>
            </ul>

            <h2>4. Çerez (Cookie) Politikası</h2>
            <p>
              Çerezler, ziyaret ettiğiniz internet siteleri tarafından
              tarayıcınıza yerleştirilen küçük metin dosyalarıdır. Sitemizde
              aşağıdaki çerez türleri kullanılabilmektedir:
            </p>
            <ul>
              <li>
                <strong>Zorunlu Çerezler:</strong> Sitenin temel işlevlerini
                yerine getirmesi için gereklidir. Engellenmesi sitenin
                kullanılamamasına yol açabilir. KVKK m.5/2-(f) kapsamında meşru
                menfaat hukuki sebebine dayanır ve açık rıza gerektirmez.
              </li>
              <li>
                <strong>İşlevsel Çerezler:</strong> Dil, bölge ve görüntü
                tercihlerinizi hatırlamak için kullanılır.
              </li>
              <li>
                <strong>Performans/Analitik Çerezler:</strong> Site
                ziyaretçilerinin istatistiklerinin toplanması, sayfaların
                performansının ölçülmesi amacıyla kullanılır (örn. Google
                Analytics). Bu çerezler için açık rızanız aranır.
              </li>
              <li>
                <strong>Pazarlama / Hedefleme Çerezleri:</strong> İlgi
                alanlarınıza uygun reklamların gösterilmesi amacıyla üçüncü
                taraflar (örn. Meta Pixel, Google Ads) tarafından
                yerleştirilebilir. Bu çerezler için açık rızanız aranır.
              </li>
            </ul>
            <p>
              Çerez tercihlerinizi tarayıcı ayarlarınız üzerinden istediğiniz
              zaman değiştirebilir, mevcut çerezleri silebilir veya yenilerinin
              yerleştirilmesini engelleyebilirsiniz. Tarayıcıların çerez
              yönetimi seçenekleri ilgili tarayıcı sağlayıcısının (Chrome,
              Safari, Firefox, Edge vb.) destek sayfalarında açıklanmaktadır.
            </p>

            <h2>5. Üçüncü Taraf Hizmetler</h2>
            <p>
              Site bünyesinde, yalnızca açık rızanıza veya KVKK m.5&apos;te
              öngörülen hukuki sebeplere dayalı olarak aşağıdaki türde üçüncü
              taraf hizmetler kullanılabilir:
            </p>
            <ul>
              <li>
                <strong>Barındırma (Hosting) ve CDN sağlayıcıları:</strong>{" "}
                Sitenin yayımlanması ve içeriklerin dağıtımı amacıyla.
              </li>
              <li>
                <strong>Analitik Hizmetler:</strong> Google Analytics ve
                benzeri ölçüm araçları.
              </li>
              <li>
                <strong>Pazarlama Araçları:</strong> Açık rıza alınmadığı
                sürece reklam izleme pikselleri yüklenmez.
              </li>
              <li>
                <strong>Form / İletişim altyapıları:</strong> İletişim
                formlarının işletilmesi amacıyla.
              </li>
              <li>
                <strong>Sosyal Medya Eklentileri:</strong> Instagram başta
                olmak üzere sosyal medya bağlantıları yalnızca yönlendirici
                niteliktedir; bu platformların kendi gizlilik politikaları
                geçerlidir.
              </li>
            </ul>
            <p>
              Söz konusu üçüncü taraflara yapılan aktarımlar, KVKK m.8 ve m.9
              kapsamında değerlendirilir; yurt dışına yapılan aktarımlar
              yalnızca m.9&apos;da öngörülen şartların varlığı hâlinde
              gerçekleştirilir.
            </p>

            <h2>6. Bilgilerin Saklanması ve Güvenliği</h2>
            <p>
              Kişisel verileriniz, KVKK m.12 kapsamında alınan teknik
              (şifreleme, güvenlik duvarı, erişim yetkilendirme, loglama,
              yedekleme, sızma testleri vb.) ve idari (gizlilik sözleşmeleri,
              çalışan eğitimi, görevler ayrılığı, veri envanteri vb.)
              tedbirler ile korunur. İşleme amacı ortadan kalktığında ve
              ilgili mevzuatta öngörülen azami saklama süreleri sona
              erdiğinde, veriler Kişisel Verilerin Silinmesi, Yok Edilmesi
              veya Anonim Hale Getirilmesi Hakkında Yönetmelik hükümlerine
              uygun şekilde imha edilir.
            </p>

            <h2>7. Kullanıcı Hakları</h2>
            <p>
              KVKK m.11 kapsamındaki haklarınızı ve bu hakları nasıl
              kullanabileceğinizi öğrenmek için{" "}
              <a href="/kvkk">KVKK Aydınlatma Metni</a> sayfamızı inceleyiniz.
              Talepleriniz için{" "}
              <a href="mailto:mkcvize@gmail.com">mkcvize@gmail.com</a> adresine
              başvurabilirsiniz.
            </p>

            <h2>8. Çocukların Gizliliği</h2>
            <p>
              Sitemiz ve hizmetlerimiz on sekiz yaş altı kişilere doğrudan
              yönelik değildir. On sekiz yaş altı kişilerin başvuruları,
              yalnızca veli/vasi onayı ile ve velayet hakkını kullanan kişi
              aracılığıyla alınır. Velinin bilgisi dışında 18 yaş altı bir
              kişiden veri toplandığını tespit etmemiz hâlinde söz konusu
              veriler derhâl silinir.
            </p>

            <h2>9. Ticari Elektronik İletiler</h2>
            <p>
              6563 sayılı Elektronik Ticaretin Düzenlenmesi Hakkında Kanun
              uyarınca, tarafınıza yalnızca açık rızanız bulunmak kaydıyla
              tanıtım, kampanya ve bilgilendirme amaçlı ticari elektronik
              iletiler gönderilebilir. Rızanızı her zaman ücretsiz olarak,
              hiçbir gerekçe bildirmeksizin geri alabilirsiniz; bunun için
              iletinin altındaki red mekanizmasını kullanabilir veya{" "}
              <a href="mailto:mkcvize@gmail.com">mkcvize@gmail.com</a> adresine
              talebinizi iletebilirsiniz. İYS (İleti Yönetim Sistemi) üzerinden
              de tercihlerinizi yönetebilirsiniz.
            </p>

            <h2>10. Diğer Sitelere Verilen Bağlantılar</h2>
            <p>
              Sitemiz, üçüncü taraflara ait internet sitelerine bağlantılar
              içerebilir. Bu sitelerin içerikleri ve gizlilik uygulamaları MKC
              Visa&apos;nın denetimi dışındadır; bu sitelerin kullanımından
              doğan zararlardan MKC Visa sorumlu tutulamaz.
            </p>

            <h2>11. Politikada Yapılacak Değişiklikler</h2>
            <p>
              İşbu Gizlilik Politikası, mevzuat değişiklikleri veya hizmet
              kapsamında meydana gelebilecek değişiklikler doğrultusunda
              güncellenebilir. Güncellenmiş metin, sitede yayımlandığı tarih
              itibarıyla yürürlüğe girer. Önemli değişikliklerde size ayrıca
              bildirimde bulunulabilir.
            </p>

            <h2>12. İletişim</h2>
            <p>
              Gizlilik Politikası&apos;na ilişkin her türlü soru, talep ve
              şikâyet için bizimle iletişime geçebilirsiniz:{" "}
              <a href="mailto:mkcvize@gmail.com">mkcvize@gmail.com</a>.
            </p>

            <p className="signature">
              <strong>MKC Vize Danışmanlık</strong>
              <br />
              Veri Sorumlusu
            </p>
          </article>
        </Container>
      </section>
    </>
  );
}
