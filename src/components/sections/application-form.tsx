"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { applicationTypes, countries } from "@/lib/data";

const applicationTypeValues = applicationTypes as readonly string[];
const countrySlugs = countries.map((c) => c.slug);

const schema = z.object({
  fullName: z.string().min(2, "Lütfen isim ve soyisminizi giriniz."),
  email: z.string().email("Geçerli bir e-posta adresi giriniz."),
  phone: z
    .string()
    .min(10, "Geçerli bir telefon numarası giriniz.")
    .regex(/^[+0-9\s()-]+$/, "Yalnızca rakam ve telefon karakterleri kullanın."),
  passportExpiry: z
    .string()
    .min(1, "Pasaport geçerlilik tarihini seçiniz.")
    .refine(
      (v) => {
        const date = new Date(v);
        return !isNaN(date.getTime()) && date > new Date();
      },
      { message: "Pasaport geçerlilik tarihi bugünden sonra olmalı." }
    ),
  applicationType: z
    .string()
    .refine((v) => applicationTypeValues.includes(v), {
      message: "Başvuru tipini seçiniz.",
    }),
  country: z
    .string()
    .refine((v) => countrySlugs.includes(v), { message: "Ülke seçiniz." }),
});

type FormData = z.infer<typeof schema>;

export function ApplicationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      passportExpiry: "",
      applicationType: "",
      country: "",
    },
  });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitted(true);
    reset();
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-20"
      >
        <div className="w-16 h-16 mx-auto rounded-full bg-foreground text-cream-100 flex items-center justify-center">
          <Check className="w-6 h-6" />
        </div>
        <h2 className="mt-8 font-serif text-4xl md:text-5xl text-foreground">
          Başvurunuz alındı.
        </h2>
        <p className="mt-5 text-muted text-lg max-w-xl mx-auto leading-relaxed">
          24 saat içinde size dönüş yapacağız. O zamana kadar
          pasaport bilgilerinizin güncel olduğundan emin olun.
        </p>
        <button
          type="button"
          onClick={() => setSubmitted(false)}
          className="mt-10 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-foreground hover:opacity-70 transition-opacity"
        >
          Yeni başvuru başlat
          <ArrowUpRight className="w-4 h-4" />
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <Input
          label="İsim Soyisim"
          placeholder="Ada Yılmaz"
          {...register("fullName")}
          error={errors.fullName?.message}
        />
        <Input
          label="Mail Adresi"
          type="email"
          placeholder="ada@ornek.com"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <Input
          label="Cep Telefonu"
          type="tel"
          placeholder="+90 5xx xxx xx xx"
          {...register("phone")}
          error={errors.phone?.message}
        />
        <Input
          label="Pasaport Geçerlilik Tarihi"
          type="date"
          {...register("passportExpiry")}
          error={errors.passportExpiry?.message}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        <Select
          label="Başvuru Tipi"
          placeholder="Seçiniz"
          options={applicationTypes.map((t) => ({ value: t, label: t }))}
          {...register("applicationType")}
          error={errors.applicationType?.message}
        />
        <Select
          label="Başvurmak İstediğiniz Ülke"
          placeholder="Seçiniz"
          options={countries.map((c) => ({ value: c.slug, label: c.name }))}
          {...register("country")}
          error={errors.country?.message}
        />
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-6 border-t border-foreground/15">
        <p className="text-xs text-muted max-w-md leading-relaxed">
          Başvurunuzu aldıktan sonra danışmanımız 24 saat içinde sizi arayarak
          ücretsiz ön görüşmeyi planlayacaktır.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex items-center justify-center gap-3 bg-foreground text-cream-100 hover:bg-charcoal disabled:opacity-70 disabled:cursor-not-allowed px-10 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.22)] min-w-[220px]"
        >
          {isSubmitting ? (
            <>
              <span className="w-3 h-3 border-2 border-cream-100/40 border-t-cream-100 rounded-full animate-spin" />
              Gönderiliyor
            </>
          ) : (
            <>
              Başvuruyu Gönder
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
