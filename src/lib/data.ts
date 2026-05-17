export type CountryDetail = {
  title: string;
  value: string;
};

export type Country = {
  slug: string;
  name: string;
  code: string;
  region: string;
  visaTypes: string[];
  blurb: string;
  flag: string;
  description: string;
  processingTime: string;
  consultateCity: string;
  consultateAddress: string;
  requirements: string[];
  timeline: string;
  fee: string;
  successRate: string;
  commonIssues: string[];
  details?: Record<string, string>;
};

export const countries: Country[] = [
  {
    slug: "ingiltere",
    name: "İngiltere",
    code: "GB",
    region: "Avrupa",
    flag: "🇬🇧",
    visaTypes: ["Standard Visitor", "Student", "Skilled Worker"],
    blurb: "Köklü üniversiteler ve global finans merkezine direkt geçiş.",
    description: "İngiltere vizesi için BRP kartı ve Immigration Health Surcharge ödemesi gereklidir.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İngiltere Başkonsolosu, Meşrutiyet Cd. 34, 34430 Beyoğlu, İstanbul",
    timeline: "Visa aplikasyon merkezine başvurudan 15-30 gün içinde karar",
    fee: "£108 (turist), £478 (öğrenci)",
    successRate: "%95",
    requirements: [
      "Geçerli pasaport (minimum 6 ay)",
      "Immigration Health Surcharge (£284/yıl öğrenci)",
      "Banka ekstresi",
      "İletişim adı ve adresi",
      "Tıbbi sigorta (Travel Insurance)",
      "Davet veya kabul belgesi",
      "Noter tasdikli belgeler",
    ],
    commonIssues: [
      "IHS ödemesi eksik",
      "Pasaport sayfaları boş",
      "Mali belgeler yetersiz",
      "Tutarsız başvuru bilgileri",
    ],
  },
  {
    slug: "abd",
    name: "Amerika",
    code: "US",
    region: "Kuzey Amerika",
    flag: "🇺🇸",
    visaTypes: ["Turistik (B1/B2)", "Öğrenci (F1)", "Çalışma (H-1B)"],
    blurb: "Dünyanın en büyük ekonomisine erişim için kapsamlı vize danışmanlığı.",
    description: "Amerika vizesi için DS-160 başvurusu, görüntülü mülakat ve belge hazırlığı temel aşamalardır.",
    processingTime: "4-8 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İstanbul Başkonsolosu, Maçka Mah., 34367 İstanbul",
    timeline: "Randevu alındıktan sonra 1-3 ay içinde mülakat yapılır",
    fee: "$160 (turist ve iş vizesi)",
    successRate: "%89",
    requirements: [
      "Geçerli pasaport (minimum 6 ay)",
      "SEVIS kayıtlı I-20 (F1 için)",
      "Biyometrik fotoğraf (2x2 inch)",
      "Seyahat planı",
      "Banka ekstresi ve finansal belgeler",
      "İş mektubu (ticari vizeler için)",
      "Konut belgesi veya davet yazısı",
    ],
    commonIssues: [
      "Finansal belgeler yetersiz",
      "DS-160 formunda tutarsızlıklar",
      "Mülakat sırasında güven sorunu",
      "Geri dönüş niyeti gösterilemedi",
    ],
  },
  {
    slug: "kanada",
    name: "Kanada",
    code: "CA",
    region: "Kuzey Amerika",
    flag: "🇨🇦",
    visaTypes: ["Turistik", "Öğrenci (Study Permit)", "Çalışma (Work Permit)"],
    blurb: "Eğitim ve yaşam kalitesinde Kuzey Amerika'nın güvenli limanı.",
    description: "Kanada vizesi için GIC belgesi, akademik notlar ve finansal ispat şarttır.",
    processingTime: "3-6 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Kanada Büyükelçiliği, Cinnah Cd. 58, 06690 Çankaya, Ankara",
    timeline: "Online başvurudan 4-8 hafta içinde karar verilir",
    fee: "$100 (turist), $150 (öğrenci)",
    successRate: "%92",
    requirements: [
      "Geçerli pasaport (minimum 2 yıl)",
      "GIC belgesi (öğrenci vizesi için)",
      "Biyometrik imza ve fotoğraf",
      "Sponsor belgesi",
      "Banka ekstresi (6 ay)",
      "Üniversite kabul belgesi (öğrenci için)",
      "Tıbbi muayene sonucu",
    ],
    commonIssues: [
      "GIC belgesi eksik",
      "Finansal ilişki gösterilemedi",
      "Tıbbi rapor hatalı",
      "Geçmiş vize redleri",
    ],
  },
  {
    slug: "portekiz",
    name: "Portekiz",
    code: "PT",
    region: "Avrupa",
    flag: "🇵🇹",
    visaTypes: ["Schengen", "D7 (Pasif Gelir)", "Golden Visa"],
    blurb: "Akdeniz iklimi ve esnek oturum izinleriyle Avrupa'ya açılan kapı.",
    description: "Portekiz D7 vizesi emekliler ve pasif gelir sahipleri için ideal çözümdür.",
    processingTime: "3-5 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Portekiz Büyükelçiliği, Kazım Özalp Sk. 13, 06690 Çankaya",
    timeline: "Başvurudan 4-6 hafta içinde karar verilir",
    fee: "€50-90 (turist), €90-120 (D7)",
    successRate: "%91",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Otel rezervasyonu (turist)",
      "Emekli maaş belgesi (D7 için)",
      "Mülk sahiplik veya kira belgesi",
      "Banka ekstre (D7: minimum €1000/ay gelir)",
      "Temiz sabıka kaydı",
    ],
    commonIssues: [
      "Gelir belgesi yeterli değil",
      "Teminat tutarı eksik",
      "Seyahat sigortası kapsamı yetersiz",
      "Mali belgelerde uyumsuzluk",
    ],
  },
  {
    slug: "ispanya",
    name: "İspanya",
    code: "ES",
    region: "Avrupa",
    flag: "🇪🇸",
    visaTypes: ["Schengen", "Öğrenci", "Non-Lucrative Visa"],
    blurb: "Akdeniz yaşam tarzı ve cazip oturum izinleriyle Güney Avrupa'nın gözdesi.",
    description: "İspanya Schengen vizesi için seyahat planı, konaklama ve finansal belgeler gereklidir.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İspanya Başkonsolosu, Karanfil Aralığı Sk. 17, 34357 Levent, İstanbul",
    timeline: "BLS randevusundan sonra 15-20 iş günü içinde karar",
    fee: "€80 (turist), €60 (öğrenci)",
    successRate: "%93",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası (€30.000 kapsam)",
      "Otel rezervasyonu veya davet yazısı",
      "Banka ekstre (minimum €1000/ay)",
      "İstihdam belgesi veya öğrenci yazısı",
      "BLS başvuru formu",
      "Biyometrik fotoğraf (35x45mm)",
    ],
    commonIssues: [
      "Sigorta kapsamı yetersiz",
      "Konaklama planı eksik",
      "Banka hareketi düşük",
      "Geri dönüş kanıtı zayıf",
    ],
  },
  {
    slug: "hollanda",
    name: "Hollanda",
    code: "NL",
    region: "Avrupa",
    flag: "🇳🇱",
    visaTypes: ["Schengen", "Öğrenci", "Highly Skilled Migrant"],
    blurb: "Yenilikçi ekosistem ve uluslararası iş hayatının kalbi.",
    description: "Hollanda öğrenci vizesi için üniversite kabulü ve finansal kanıt gereklidir.",
    processingTime: "2-4 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Hollanda Büyükelçiliği, Cinnah Cd. 67, 06690 Çankaya",
    timeline: "IND başvurusundan 8-12 hafta içinde karar",
    fee: "€95 (turist), €350 (ikamet izni)",
    successRate: "%90",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Üniversite kabul belgesi",
      "DUO bursu kararı (uygunsa)",
      "Banka ekstre (minimum €1000/ay masraf)",
      "İletişim bilgileri ve adres",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Üniversite kaydı eksik",
      "Finansal kanıt yetersiz",
      "Seyahat planı zayıf",
      "Belgeler tutarsız",
    ],
  },
  {
    slug: "almanya",
    name: "Almanya",
    code: "DE",
    region: "Avrupa",
    flag: "🇩🇪",
    visaTypes: ["Schengen", "Öğrenci", "Çalışma (Blue Card)"],
    blurb: "Avrupa'nın motoru — mühendislik, sanayi ve eğitim için ideal.",
    description: "Almanya Schengen vizesi için iDATA başvurusu ve seyahat sigortası zorunludur.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "Alman Başkonsolosu, İnönü Cd. 16, 34437 Beyoğlu, İstanbul",
    timeline: "iDATA portalına başvurudan 15-20 gün içinde randevu",
    fee: "€80 (turist), €75 (öğrenci)",
    successRate: "%88",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası (€30.000 kapsam)",
      "Otel rezervasyonu veya davet yazısı",
      "Banka ekstre (minimum €2000)",
      "İstihdam belgesi veya öğrenci yazısı",
      "Doldurulmuş başvuru formu",
      "Biyometrik fotoğraf (35x45mm)",
    ],
    commonIssues: [
      "Seyahat sigortası kapsamı yetersiz",
      "Banka hareketi yetersiz",
      "Sigorta sadece Schengen olmalı",
      "Konaklama belgesi eksik",
    ],
  },
  {
    slug: "isvec",
    name: "İsveç",
    code: "SE",
    region: "İskandinavya",
    flag: "🇸🇪",
    visaTypes: ["Schengen", "Öğrenci", "Çalışma İzni"],
    blurb: "Tasarım, teknoloji ve yaşam kalitesinde dünya lideri.",
    description: "İsveç Schengen vizesi için Migrationsverket başvurusu ve finansal ispat gereklidir.",
    processingTime: "3-5 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İsveç Başkonsolosu, İstiklal Cd. 247, 34433 Beyoğlu, İstanbul",
    timeline: "Online başvurudan 15-30 gün içinde karar",
    fee: "€80 (turist), SEK 1500 (öğrenci)",
    successRate: "%94",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Konaklama belgesi veya davet yazısı",
      "Banka ekstre (minimum €450/ay)",
      "İstihdam veya öğrenci belgesi",
      "Migrationsverket başvuru formu",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Konaklama belgesi yetersiz",
      "Finansal kanıt zayıf",
      "Seyahat amacı net değil",
      "Geri dönüş niyeti gösterilemedi",
    ],
  },
  {
    slug: "isvicre",
    name: "İsviçre",
    code: "CH",
    region: "Avrupa",
    flag: "🇨🇭",
    visaTypes: ["Schengen", "Öğrenci", "Çalışma"],
    blurb: "Alp manzaraları, finans gücü ve dünya standartlarında yaşam.",
    description: "İsviçre Schengen vizesi için TLScontact üzerinden başvuru ve detaylı belge dosyası şarttır.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İsviçre Başkonsolosu, Mete Cd. 30, 34437 Beyoğlu, İstanbul",
    timeline: "TLScontact randevusundan 10-20 gün içinde karar",
    fee: "CHF 80 (turist), CHF 88 (öğrenci)",
    successRate: "%92",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası (€30.000 kapsam)",
      "Otel rezervasyonu veya davet yazısı",
      "Banka ekstre (minimum CHF 100/gün)",
      "İstihdam belgesi veya öğrenci yazısı",
      "TLScontact başvuru dosyası",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Yüksek finansal eşik karşılanamadı",
      "Sigorta kapsamı düşük",
      "Konaklama planı net değil",
      "İş bağı yetersiz",
    ],
  },
  {
    slug: "norvec",
    name: "Norveç",
    code: "NO",
    region: "İskandinavya",
    flag: "🇳🇴",
    visaTypes: ["Schengen", "Öğrenci", "Çalışma İzni"],
    blurb: "Fiyortlar ve doğa, güçlü ekonomi ve yüksek yaşam standardı.",
    description: "Norveç vizesi için UDI sistemi üzerinden başvuru ve detaylı finansal belgeler gereklidir.",
    processingTime: "3-5 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Norveç Büyükelçiliği, Cinnah Cd. 64, 06690 Çankaya",
    timeline: "UDI başvurusundan 15-30 gün içinde karar",
    fee: "NOK 800 (turist), NOK 5300 (öğrenci)",
    successRate: "%91",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Konaklama belgesi",
      "Banka ekstre (minimum NOK 500/gün)",
      "İstihdam veya öğrenci belgesi",
      "UDI başvuru formu",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Yüksek günlük masraf karşılanamadı",
      "Konaklama belgesi eksik",
      "Seyahat planı zayıf",
      "Geri dönüş kanıtı yetersiz",
    ],
  },
  {
    slug: "danimarka",
    name: "Danimarka",
    code: "DK",
    region: "İskandinavya",
    flag: "🇩🇰",
    visaTypes: ["Schengen", "Öğrenci", "Pay Limit Scheme"],
    blurb: "Mutluluk endeksinde dünya birincisi, tasarım ve yenilikçilik merkezi.",
    description: "Danimarka vizesi için SIRI/Nyidanmark üzerinden başvuru ve mali belgeler gereklidir.",
    processingTime: "2-4 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Danimarka Büyükelçiliği, Cinnah Cd. 12, 06690 Çankaya",
    timeline: "Online başvurudan 15-25 gün içinde karar",
    fee: "DKK 600 (turist), DKK 1890 (öğrenci)",
    successRate: "%93",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Otel rezervasyonu veya davet yazısı",
      "Banka ekstre (minimum DKK 350/gün)",
      "İstihdam belgesi veya kabul yazısı",
      "Nyidanmark başvuru formu",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Mali kaynak yetersiz",
      "Konaklama planı eksik",
      "Geri dönüş niyeti zayıf",
      "Belgeler tutarsız",
    ],
  },
  {
    slug: "yunanistan",
    name: "Yunanistan",
    code: "GR",
    region: "Avrupa",
    flag: "🇬🇷",
    visaTypes: ["Schengen", "Golden Visa", "Öğrenci"],
    blurb: "Tarih, deniz ve Akdeniz iklimiyle Türkiye'nin en yakın komşusu.",
    description: "Yunanistan Schengen vizesi için GVCW randevusu ve seyahat belgeleri gereklidir.",
    processingTime: "1-3 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "Yunanistan Başkonsolosu, Turnacıbaşı Cd. 32, 34433 Beyoğlu, İstanbul",
    timeline: "GVCW randevusundan 10-15 iş günü içinde karar",
    fee: "€80 (turist), €60 (öğrenci)",
    successRate: "%96",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Otel rezervasyonu veya davet yazısı",
      "Banka ekstre (minimum €50/gün)",
      "Uçak rezervasyonu (gidiş-dönüş)",
      "GVCW başvuru formu",
      "Biyometrik fotoğraf",
    ],
    commonIssues: [
      "Seyahat planı net değil",
      "Sigorta kapsamı yetersiz",
      "Konaklama belgesi eksik",
      "Banka hareketi düşük",
    ],
  },
];

export type FAQ = {
  question: string;
  answer: string;
};

export const faqs: FAQ[] = [
  {
    question: "Vize başvuru süreci ne kadar sürer?",
    answer:
      "Süreç ülkeye ve vize tipine göre değişir. Schengen vizeleri genellikle 10–15 iş günü içinde sonuçlanırken, ABD ve İngiltere için randevu yoğunluğuna bağlı olarak süreç 3–10 hafta arasında değişebilir. Danışmanlık görüşmemizde size güncel takvimi netleştiriyoruz.",
  },
  {
    question: "Hangi belgeleri hazırlamam gerekiyor?",
    answer:
      "Pasaport, biyometrik fotoğraf, seyahat planı, ekonomik durum belgeleri ve davet/kabul yazısı temel belgelerdir. Her ülkenin ve vize tipinin kendine özgü listesi bulunur. Başvurunuzu aldıktan sonra size kişiselleştirilmiş bir belge listesi iletiyoruz.",
  },
  {
    question: "Danışmanlık ücretleri nasıl belirleniyor?",
    answer:
      "Ücretler; başvurulacak ülke, vize tipi ve sürecin kapsamına göre farklılık gösterir. İlk görüşmemiz ücretsizdir; bu görüşmede size net bir fiyat teklifi sunuyoruz. Konsolosluk ve VFS harçları danışmanlık ücretine dahil değildir.",
  },
  {
    question: "Vize reddi durumunda ne oluyor?",
    answer:
      "Red durumunda gerekçeyi detaylı şekilde analiz ediyor, yeniden başvuru için strateji belirliyoruz. Tekrar başvuru sürecinde sizden yalnızca dosya yenileme ücreti talep ediyoruz; danışmanlık desteğimiz devam ediyor.",
  },
  {
    question: "Başvuruyu uzaktan da yönetebilir misiniz?",
    answer:
      "Evet. Türkiye'nin herhangi bir şehrinden ya da yurt dışından sürecinizi online olarak yönetebiliriz. Belgelerinizi dijital olarak inceler, randevunuza fiziksel katılım gerektiren adımlar için sizi yönlendiririz.",
  },
];

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  category: string;
};

export const articles: Article[] = [
  {
    slug: "2026-abd-vize-randevu-yeni-donem",
    title: "2026 ABD Vize Randevu Süreçlerinde Yeni Dönem",
    excerpt:
      "ABD konsoloslukları 2026 itibarıyla randevu sisteminde önemli değişikliklere gidiyor. Başvuru takviminizi nasıl planlamalısınız?",
    date: "2026-05-02",
    readingTime: "4 dk",
    category: "Amerika",
  },
  {
    slug: "schengen-basvurularinda-dikkat-edilmesi-gerekenler",
    title: "Avrupa Schengen Vizesi Başvurularında Dikkat Edilmesi Gerekenler",
    excerpt:
      "Schengen başvurularında en sık karşılaşılan red sebepleri ve onay oranını yükselten dosya hazırlık ipuçları.",
    date: "2026-04-18",
    readingTime: "6 dk",
    category: "Avrupa",
  },
  {
    slug: "kanada-express-entry-2026-guncellemeleri",
    title: "Kanada Express Entry: 2026 Güncellemeleri ve Puan Sistemindeki Değişiklikler",
    excerpt:
      "IRCC'nin Express Entry için açıkladığı yeni kategori bazlı çekilişler ve Türk başvuru sahipleri için fırsatlar.",
    date: "2026-03-29",
    readingTime: "5 dk",
    category: "Kanada",
  },
];

export const applicationTypes = [
  "Turistik",
  "Ticari",
  "Öğrenci",
  "Çalışma",
  "Aile Birleşimi",
] as const;

export type ApplicationType = (typeof applicationTypes)[number];
