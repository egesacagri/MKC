import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionLabel } from "@/components/ui/section-label";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni",
  description:
    "MKC Visa olarak 6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla işlediğimiz kişisel verilere ilişkin aydınlatma metni.",
};

const LAST_UPDATED = "17 Mayıs 2026";

export default function KvkkPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-16">
        <Container>
          <SectionLabel>KVKK</SectionLabel>
          <h1 className="mt-5 font-serif text-5xl md:text-7xl lg:text-[88px] leading-[1.02] tracking-tight text-foreground max-w-4xl">
            Kişisel Verilerin
            <br />
            <span className="italic font-light">Korunması</span>.
          </h1>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-muted">
            Son güncelleme: {LAST_UPDATED}
          </p>
        </Container>
      </section>

      {/* Body */}
      <section className="pb-24 md:pb-32">
        <Container>
          <article className="max-w-3xl mx-auto prose-legal">
            <p className="lead">
              İşbu Aydınlatma Metni; 6698 sayılı Kişisel Verilerin Korunması
              Kanunu&apos;nun (&quot;KVKK&quot;) 10. maddesi ile Aydınlatma
              Yükümlülüğünün Yerine Getirilmesinde Uyulacak Usul ve Esaslar
              Hakkında Tebliğ uyarınca, veri sorumlusu sıfatıyla MKC Visa
              tarafından, sunduğumuz vize danışmanlığı hizmetleri kapsamında
              işlenen kişisel verilerinize ilişkin sizleri bilgilendirmek
              amacıyla hazırlanmıştır.
            </p>

            <h2>1. Veri Sorumlusunun Kimliği</h2>
            <p>
              KVKK&apos;nın 3/1-(ı) maddesi uyarınca veri sorumlusu sıfatını
              haiz tüzel kişi aşağıdaki bilgilere sahiptir:
            </p>
            <ul>
              <li>
                <strong>Unvan:</strong> MKC Vize Danışmanlık (&quot;MKC Visa&quot; / &quot;Şirket&quot;)
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
              <li>
                <strong>VERBİS Kayıt Bilgisi:</strong> Kişisel Verileri Koruma
                Kurulu tarafından belirlenen Veri Sorumluları Sicili
                yükümlülüğüne tabi olunması hâlinde sicil bilgisi bu metinde
                ayrıca duyurulur.
              </li>
            </ul>

            <h2>2. Tanımlar</h2>
            <p>
              Bu metinde geçen ve KVKK&apos;da tanımlı olan kavramlar
              Kanun&apos;daki anlamı ile kullanılır. Başlıca:
            </p>
            <ul>
              <li>
                <strong>Kişisel Veri:</strong> Kimliği belirli veya
                belirlenebilir gerçek kişiye ilişkin her türlü bilgi.
              </li>
              <li>
                <strong>Özel Nitelikli Kişisel Veri:</strong> KVKK m.6/1&apos;de
                sayılan veriler (ırk, etnik köken, siyasi düşünce, felsefi
                inanç, din, mezhep veya diğer inançlar, kılık-kıyafet, dernek,
                vakıf ya da sendika üyeliği, sağlık, cinsel hayat, ceza mahkûmiyeti
                ve güvenlik tedbirleri, biyometrik ve genetik veriler).
              </li>
              <li>
                <strong>İşleme:</strong> Verilerin tamamen veya kısmen otomatik
                olan ya da herhangi bir veri kayıt sisteminin parçası olmak
                kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi,
                depolanması, muhafaza edilmesi, değiştirilmesi, yeniden
                düzenlenmesi, açıklanması, aktarılması, devralınması, elde
                edilebilir hâle getirilmesi, sınıflandırılması ya da
                kullanılmasının engellenmesi gibi her türlü işlem.
              </li>
              <li>
                <strong>İlgili Kişi:</strong> Kişisel verisi işlenen gerçek
                kişi.
              </li>
              <li>
                <strong>Açık Rıza:</strong> Belirli bir konuya ilişkin,
                bilgilendirmeye dayanan ve özgür iradeyle açıklanan rıza.
              </li>
            </ul>

            <h2>3. İşlenen Kişisel Veri Kategorileri</h2>
            <p>
              Hizmetlerimizin niteliği gereği aşağıdaki kategorilerde kişisel
              verileriniz işlenebilmektedir:
            </p>
            <ul>
              <li>
                <strong>Kimlik Bilgileri:</strong> Ad-soyad, T.C. kimlik
                numarası, doğum tarihi ve yeri, uyruk, medeni hâl, cinsiyet,
                pasaport numarası, kimlik/pasaport fotokopisi, imza.
              </li>
              <li>
                <strong>İletişim Bilgileri:</strong> Telefon numarası, e-posta
                adresi, ikamet ve yazışma adresi.
              </li>
              <li>
                <strong>Eğitim ve Mesleki Deneyim Bilgileri:</strong> Diploma,
                transkript, CV, sertifika, çalışma geçmişi, unvan, işveren
                bilgileri.
              </li>
              <li>
                <strong>Finansal Bilgiler:</strong> Banka hesap özetleri, gelir
                belgeleri, vergi levhası, varlık beyanı, ödeme kayıtları, fatura
                bilgileri (kart bilgileri tarafımızca saklanmaz; ödemeler
                bankalar/ödeme kuruluşları aracılığı ile alınır).
              </li>
              <li>
                <strong>Seyahat ve Vize Bilgileri:</strong> Vize geçmişi, ret
                yazıları, önceki başvuru kayıtları, uçuş ve konaklama
                rezervasyonları, seyahat planı.
              </li>
              <li>
                <strong>Aile Bilgileri:</strong> Eş ve çocuklara ilişkin kimlik
                ve iletişim bilgileri (yalnızca başvuru türünün gerektirdiği
                ölçüde).
              </li>
              <li>
                <strong>Görsel ve İşitsel Kayıtlar:</strong> Biyometrik vize
                fotoğrafı, görüşmelerde tarafların onayı alınmak suretiyle
                kaydedilen ses/görüntü.
              </li>
              <li>
                <strong>Hukuki İşlem Bilgileri:</strong> Sözleşmeler,
                vekâletnameler, yetki belgeleri, adli sicil kaydı (talep
                edilmesi hâlinde).
              </li>
              <li>
                <strong>Müşteri İşlem Bilgileri:</strong> Talep ve şikâyet
                kayıtları, başvuru dosya numarası, hizmet geçmişi.
              </li>
              <li>
                <strong>İşlem Güvenliği Bilgileri:</strong> IP adresi, log
                kayıtları, çerez kayıtları, oturum bilgileri, tarayıcı ve cihaz
                bilgileri.
              </li>
              <li>
                <strong>Pazarlama Bilgileri:</strong> Açık rızanız olması
                hâlinde, alışkanlık ve beğeniler doğrultusunda yapılan analiz
                sonuçları.
              </li>
              <li>
                <strong>Özel Nitelikli Veriler:</strong> Sağlık raporu, kan
                grubu, biyometrik veri (parmak izi vb.), ceza mahkûmiyeti bilgisi
                gibi özel nitelikli veriler yalnızca başvurulan ülke
                makamlarının zorunlu kıldığı hâllerde ve KVKK m.6 çerçevesinde
                açık rızanız alınarak işlenir.
              </li>
            </ul>

            <h2>4. Kişisel Verilerin İşlenme Amaçları</h2>
            <p>
              Kişisel verileriniz, KVKK&apos;nın 4. maddesinde yer alan genel
              ilkeler (hukuka ve dürüstlük kurallarına uygun olma; doğru ve
              gerektiğinde güncel olma; belirli, açık ve meşru amaçlar için
              işlenme; işlendikleri amaçla bağlantılı, sınırlı ve ölçülü olma;
              ilgili mevzuatta öngörülen veya işlendikleri amaç için gerekli olan
              süre kadar muhafaza edilme) çerçevesinde ve aşağıdaki amaçlarla
              işlenmektedir:
            </p>
            <ul>
              <li>Vize danışmanlığı sözleşmesinin kurulması ve ifası,</li>
              <li>
                Başvuru dosyalarının hazırlanması, ilgili konsolosluk/elçilik
                veya başvuru merkezlerine sunulması,
              </li>
              <li>Randevu organizasyonu ve takvim yönetimi,</li>
              <li>
                Müşteri ile iletişim kurulması, taleplerin ve şikâyetlerin
                karşılanması,
              </li>
              <li>Faturalandırma, ödeme takibi ve muhasebe işlemleri,</li>
              <li>
                Yasal yükümlülüklerin yerine getirilmesi (vergi, ticaret, sosyal
                güvenlik, KVKK, suç gelirlerinin aklanmasının önlenmesi
                mevzuatı dâhil),
              </li>
              <li>
                Resmî makamlardan gelen taleplere (mahkeme, savcılık, kolluk,
                idari otoriteler) Kanun çerçevesinde yanıt verilmesi,
              </li>
              <li>
                Hukuki uyuşmazlıklarda delil oluşturulması ve hakların tesisi,
                kullanılması ve korunması,
              </li>
              <li>Bilgi güvenliği süreçlerinin yürütülmesi ve denetimi,</li>
              <li>
                Açık rızanız olması hâlinde ürün/hizmet tanıtımı, kampanya,
                bülten ve duyuruların iletilmesi.
              </li>
            </ul>

            <h2>5. Kişisel Verilerin İşlenmesinin Hukuki Sebepleri</h2>
            <p>
              Kişisel verileriniz, KVKK&apos;nın 5. ve 6. maddelerinde öngörülen
              aşağıdaki işleme şartlarına dayalı olarak işlenir:
            </p>
            <ul>
              <li>Kanunlarda açıkça öngörülmesi (m.5/2-a),</li>
              <li>
                Bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili
                olması kaydıyla, sözleşmenin taraflarına ait kişisel verilerin
                işlenmesinin gerekli olması (m.5/2-c),
              </li>
              <li>
                Veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için
                zorunlu olması (m.5/2-ç),
              </li>
              <li>
                Bir hakkın tesisi, kullanılması veya korunması için veri
                işlemenin zorunlu olması (m.5/2-e),
              </li>
              <li>
                İlgili kişinin temel hak ve özgürlüklerine zarar vermemek
                kaydıyla, veri sorumlusunun meşru menfaatleri için veri
                işlenmesinin zorunlu olması (m.5/2-f),
              </li>
              <li>
                Yukarıdaki şartların bulunmadığı hâllerde, ilgili kişinin açık
                rızasının bulunması (m.5/1).
              </li>
              <li>
                Özel nitelikli kişisel veriler bakımından KVKK m.6/2 ve
                m.6/3&apos;te öngörülen şartlar.
              </li>
            </ul>

            <h2>6. Kişisel Verilerin Toplanma Yöntemleri</h2>
            <p>
              Kişisel verileriniz; yüz yüze görüşmeler, telefon, e-posta,
              internet sitemiz üzerindeki formlar, sosyal medya hesaplarımız
              üzerinden gelen mesajlar, kargo/posta, elektronik imza/onay
              mekanizmaları, çerezler ve benzeri kanallar aracılığıyla
              tarafımıza iletmiş olduğunuz belge ve bilgiler üzerinden,
              tamamen veya kısmen otomatik ya da bir veri kayıt sisteminin
              parçası olmak kaydıyla otomatik olmayan yöntemlerle toplanır.
            </p>

            <h2>7. Kişisel Verilerin Aktarımı</h2>
            <p>
              Kişisel verileriniz, KVKK m.8 ve m.9 hükümleri çerçevesinde,
              aşağıda belirtilen alıcı gruplarına ve yalnızca bu metinde
              belirtilen amaçların gerektirdiği ölçüde aktarılabilir:
            </p>
            <ul>
              <li>
                <strong>Yurt İçi Aktarım:</strong> Yetkili kamu kurum ve
                kuruluşları (Dışişleri Bakanlığı, kolluk birimleri, yargı
                makamları, Gelir İdaresi Başkanlığı, SGK, Kişisel Verileri
                Koruma Kurumu vb.), bankalar ve ödeme kuruluşları, mali müşavir
                ve avukatlarımız, kargo/lojistik firmaları, çeviri ve
                noterlik hizmeti sağlayan üçüncü kişiler, denetim firmaları,
                bilişim ve barındırma hizmeti sağlayıcıları.
              </li>
              <li>
                <strong>Yurt Dışı Aktarım:</strong> Vize başvurusunun mahiyeti
                gereği başvurulan ülkenin konsolosluk/elçiliği, vize başvuru
                merkezleri (örn. VFS Global, TLScontact, BLS International,
                CGI ve benzeri), yetkili göç idareleri ve karşı ülke kamu
                makamları. Bu aktarımlar zorunlu hâllerde KVKK m.9/6
                kapsamında yapılır; aksi takdirde KVKK m.9/1 uyarınca açık
                rızanız temin edilir.
              </li>
            </ul>
            <p>
              Yurt dışına aktarım, KVKK m.9 uyarınca yeterli korumanın
              bulunduğu ülkelerde veya yeterli korumayı yazılı olarak taahhüt
              eden ve Kurul iznine tabi taahhütnamelerin bulunduğu hâllerde
              ya da m.9/6 istisnaları çerçevesinde yapılır.
            </p>

            <h2>8. Saklama Süreleri</h2>
            <p>
              Kişisel verileriniz, işlendikleri amaç için gerekli olan süre
              boyunca ve her hâlükârda ilgili mevzuatın öngördüğü asgari
              saklama süreleri (örn. Türk Ticaret Kanunu m.82 uyarınca 10 yıl,
              Vergi Usul Kanunu m.253 uyarınca 5 yıl, Türk Borçlar Kanunu m.146
              uyarınca 10 yıllık zamanaşımı süresi) gözetilerek saklanır.
              Sürelerin sona ermesinin ardından, Kişisel Verilerin Silinmesi,
              Yok Edilmesi veya Anonim Hale Getirilmesi Hakkında Yönetmelik
              hükümleri çerçevesinde silinir, yok edilir veya anonim hâle
              getirilir.
            </p>

            <h2>9. Veri Güvenliğine İlişkin Tedbirler</h2>
            <p>
              KVKK m.12 uyarınca kişisel verilerin hukuka aykırı olarak
              işlenmesini ve erişilmesini önlemek ile muhafazasını sağlamak
              amacıyla uygun güvenlik düzeyini temin etmeye yönelik gerekli
              her türlü teknik ve idari tedbiri (erişim yetkilendirme,
              loglama, şifreleme, güvenli ağ altyapısı, gizlilik
              sözleşmeleri, çalışan farkındalık eğitimleri, yedekleme, fiziki
              güvenlik vb.) almaktayız.
            </p>

            <h2>10. İlgili Kişinin Hakları (KVKK m.11)</h2>
            <p>
              Kişisel verisi işlenen ilgili kişi olarak KVKK m.11 uyarınca
              aşağıdaki haklara sahipsiniz:
            </p>
            <ol>
              <li>
                Kişisel verilerinizin işlenip işlenmediğini öğrenme,
              </li>
              <li>
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,
              </li>
              <li>
                Kişisel verilerinizin işlenme amacını ve bunların amacına uygun
                kullanılıp kullanılmadığını öğrenme,
              </li>
              <li>
                Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı
                üçüncü kişileri bilme,
              </li>
              <li>
                Kişisel verilerinizin eksik veya yanlış işlenmiş olması hâlinde
                bunların düzeltilmesini isteme,
              </li>
              <li>
                KVKK m.7&apos;de öngörülen şartlar çerçevesinde kişisel
                verilerinizin silinmesini veya yok edilmesini isteme,
              </li>
              <li>
                (e) ve (f) bentleri uyarınca yapılan işlemlerin, kişisel
                verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,
              </li>
              <li>
                İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla
                analiz edilmesi suretiyle aleyhinize bir sonucun ortaya
                çıkmasına itiraz etme,
              </li>
              <li>
                Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle
                zarara uğramanız hâlinde zararın giderilmesini talep etme.
              </li>
            </ol>

            <h2>11. Hakların Kullanılması ve Başvuru Yöntemi</h2>
            <p>
              Yukarıda sayılan haklarınızı, Veri Sorumlusuna Başvuru Usul ve
              Esasları Hakkında Tebliğ&apos;de belirtilen şartlara uygun
              olarak aşağıdaki yöntemlerden biriyle tarafımıza
              iletebilirsiniz:
            </p>
            <ul>
              <li>
                Yazılı olarak ıslak imzalı dilekçe ile MKC Visa Ankara adresine
                şahsen veya noter aracılığıyla,
              </li>
              <li>
                Güvenli elektronik imza, mobil imza ya da sistemimizde kayıtlı
                bulunan e-posta adresiniz kullanılarak{" "}
                <a href="mailto:info@mkcvize.com">info@mkcvize.com</a> adresine
                e-posta yoluyla,
              </li>
              <li>KEP adresi tahsis edilmesi hâlinde KEP üzerinden.</li>
            </ul>
            <p>
              Başvurunuzda; ad-soyad, başvuru yazılı ise ıslak imza, T.C.
              kimlik numarası (yabancılar için pasaport numarası), tebligata
              esas yerleşim/iş yeri adresi, varsa bildirime esas elektronik
              posta adresi, telefon ve faks numarası ile talep konusunun açıkça
              yer alması, konuya ilişkin bilgi ve belgelerin başvuruya
              eklenmesi gerekmektedir.
            </p>
            <p>
              Başvurunuz, KVKK m.13/2 uyarınca talebin niteliğine göre en geç
              <strong> otuz (30) gün</strong> içinde ücretsiz olarak
              sonuçlandırılır. Ancak işlemin ayrıca bir maliyet gerektirmesi
              hâlinde, Kişisel Verileri Koruma Kurulu&apos;nca belirlenen
              tarifedeki ücret talep edilebilir.
            </p>
            <p>
              Başvurunuzun reddedilmesi, verilen yanıtın yetersiz bulunması
              veya süresinde başvuruya cevap verilmemesi hâllerinde; cevabın
              tebliğini takiben <strong>otuz (30) gün</strong> ve her hâlde
              başvuru tarihinden itibaren altmış (60) gün içinde Kişisel
              Verileri Koruma Kurulu&apos;na şikâyette bulunma hakkınız
              saklıdır.
            </p>

            <h2>12. Çerezler</h2>
            <p>
              İnternet sitemizde kullanılan çerezlere ilişkin detaylı bilgi{" "}
              <a href="/gizlilik-politikasi">Gizlilik Politikası</a>{" "}
              sayfamızda yer almaktadır.
            </p>

            <h2>13. Aydınlatma Metninde Yapılacak Değişiklikler</h2>
            <p>
              MKC Visa, işbu Aydınlatma Metni&apos;nde mevzuat değişiklikleri,
              Kurul kararları veya iş süreçlerinde meydana gelebilecek
              değişiklikler nedeniyle güncelleme yapma hakkını saklı tutar.
              Güncel metin internet sitemizde yayımlandığı tarih itibarıyla
              yürürlüğe girer.
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
