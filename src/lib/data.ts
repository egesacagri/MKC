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
    slug: "abd",
    name: "ABD",
    code: "US",
    region: "Kuzey Amerika",
    flag: "🇺🇸",
    visaTypes: ["Turistik (B1/B2)", "Öğrenci (F1)", "Çalışma (H-1B)"],
    blurb: "Dünyanın en büyük ekonomisine erişim için kapsamlı vize danışmanlığı.",
    description: "ABD vizesi için DS-160 başvurusu, görüntülü mülakat ve belge hazırlığı temel aşamalardır.",
    processingTime: "4-8 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "İstanbul Başkonsolosu, Maçka mh, 34367 İstanbul",
    timeline: "Randevu alındıktan sonra 1-3 ay içinde mülakat yapılır",
    fee: "$160 (turist ve iş vizesi)",
    successRate: "%89",
    requirements: [
      "Geçerli pasaport (minimum 6 ay)",
      "SEVIS kayıtlı I-20 (F1 için)",
      "Biyometrik fotoğraf (2x2 inch)",
      "Seyahat planı",
      "Banka ekstresi ve finansal belgeler",
      "İş/iş mektubu (ticari vizeler için)",
      "Konut belgesi veya davet yazısı"
    ],
    commonIssues: [
      "Finansal belgeler yetersiz",
      "DS-160 formunda tutarsızlıklar",
      "Mülakat sırasında güven sorunu",
      "Geri dönüş niyeti gösterilemedi"
    ]
  },
  {
    slug: "kanada",
    name: "Kanada",
    code: "CA",
    region: "Kuzey Amerika",
    flag: "🇨🇦",
    visaTypes: ["Turistik", "Öğrenci (Study Permit)", "Çalışma (Work Permit)"],
    blurb: "Eğitim ve yaşam kalitesinde Kuzey Amerika'nın güvenli limanı.",
    description: "Kanada vizesi için GIC belgesi, CAP notları ve finansal ispat şarttır.",
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
      "Finanse edici belgesi",
      "Banka ekstresi (6 ay geri)",
      "Üniversite kabul belgesi (öğrenci için)",
      "Tıbbi muayene sonucu"
    ],
    commonIssues: [
      "GIC belgesi eksik",
      "Finansal ilişki gösterilemedi",
      "Tıbbi rapor sakatlanmış",
      "Geçmiş vize redleri"
    ]
  },
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
      "İmam noteri tasdikli belgeler"
    ],
    commonIssues: [
      "IHS ödemesi eksik",
      "Pasaport sayfaları boş",
      "Mali belgeler yetersiz",
      "Tutarsız başvuru bilgileri"
    ]
  },
  {
    slug: "almanya",
    name: "Almanya",
    code: "DE",
    region: "Avrupa",
    flag: "🇩🇪",
    visaTypes: ["Schengen", "Öğrenci", "Çalışma (Blue Card)"],
    blurb: "Avrupa'nın motoru — mühendislik, sanayi ve eğitim için ideal.",
    description: "Almanya Schengen vizesi için Ahk başvurusu ve seyahat sigortası zorunludur.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "Alman Başkonsolosu, Maçka mh, 34367 İstanbul",
    timeline: "Ziraat online portalına başvurudan 15-20 gün içinde randevu",
    fee: "€80 (turist), €75 (öğrenci)",
    successRate: "%88",
    requirements: [
      "Geçerli pasaport (minimum 3 ay geçerlilik)",
      "Schengen seyahat sigortası (€30 minimum)",
      "Reservation onayı veya davet yazısı",
      "Banka ekstre (minimum €2000)",
      "İstihdam belgesi veya öğrenci hali",
      "Doldurulmuş başvuru formu (Ahk)",
      "Biyometrik fotoğraf (35x45mm)"
    ],
    commonIssues: [
      "Seyahat sigortası kapsamı yetersiz",
      "Para geri yatırma gösterilemedi",
      "Banka ekstresinde hareketlilik azlığı",
      "Sigorta kapsamı sadece schengen değil"
    ]
  },
  {
    slug: "portekiz",
    name: "Portekiz",
    code: "PT",
    region: "Avrupa",
    flag: "🇵🇹",
    visaTypes: ["Schengen", "D7 (Pasif Gelir)", "Golden Visa"],
    blurb: "Akdeniz iklimi ve esnek oturum izinleriyle Avrupa'ya açılan kapı.",
    description: "Portekiz D7 vizesi emekliler ve pasif gelir olanlar için ideal çözümdür.",
    processingTime: "3-5 hafta",
    consultateCity: "Ankara",
    consultateAddress: "Portekiz Büyükelçiliği, Kazım Özalp Sk. 13, 06690 Çankaya",
    timeline: "Başvurudan 4-6 hafta içinde karar verilir",
    fee: "€50-90 (turist), €90-120 (D7)",
    successRate: "%91",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Turizm yükü ve otele yer ayırması (turist)",
      "Emekli maaş belgesi (D7 için)",
      "Mülk sahiplik veya kira belgesi",
      "Banka ekstre (D7: minimum €1000/ay gelir)",
      "Temiz sabika kaydı"
    ],
    commonIssues: [
      "Gelir belgesi yeterli değil",
      "Teminat tutarı eksik",
      "Seyahat sigortası kapsamı yetersiz",
      "Mali belgelerde uyumsuzluk"
    ]
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
      "İletişim bilgileri ve plan adresi",
      "Biyometrik fotoğraf"
    ],
    commonIssues: [
      "Üniversite kaydı eksik",
      "Para gösteremedi",
      "Seyahat planı yetersiz",
      "Bursa belgeleri tutarsız"
    ]
  },
  {
    slug: "fransa",
    name: "Fransa",
    code: "FR",
    region: "Avrupa",
    flag: "🇫🇷",
    visaTypes: ["Schengen", "Öğrenci", "Talent Passport"],
    blurb: "Kültür, sanat ve global iş dünyasının buluştuğu Avrupa metropolü.",
    description: "Fransa vizesi için Campus France onayı ve dil yeterliliği belgesi şarttır.",
    processingTime: "2-4 hafta",
    consultateCity: "İstanbul",
    consultateAddress: "Fransa Başkonsolosu, Sokullu Mehmed Paşa Sk. 9, 34433 Beyoğlu",
    timeline: "Campus France onayından 3-4 hafta içinde karar",
    fee: "€99 (turist), €250 (öğrenci)",
    successRate: "%87",
    requirements: [
      "Geçerli pasaport (minimum 3 ay)",
      "Schengen seyahat sigortası",
      "Campus France dossier onayı",
      "DELF/DALF sertifikası veya test sonucu",
      "Üniversite kabul belgesi",
      "Banka ekstre (minimum €750/ay)",
      "Konut belgesi (kampüs yurdu onayı)"
    ],
    commonIssues: [
      "Dil belgesi eksik",
      "Campus France seçimi geç yapıldı",
      "Mali belgeler yetersiz",
      "Üniversite tercih yönetmeliği ihlali"
    ]
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
    category: "ABD",
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
