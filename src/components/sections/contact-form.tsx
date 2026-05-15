"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";
import { Input } from "@/components/ui/input";

const schema = z.object({
  name: z.string().min(2, "İsminizi giriniz."),
  email: z.string().email("Geçerli bir e-posta giriniz."),
  subject: z.string().min(3, "Konuyu kısaca belirtiniz."),
  message: z.string().min(10, "Mesajınız en az 10 karakter olmalı."),
});

type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Input label="İsim Soyisim" {...register("name")} error={errors.name?.message} />
        <Input label="E-posta" type="email" {...register("email")} error={errors.email?.message} />
      </div>
      <Input label="Konu" {...register("subject")} error={errors.subject?.message} />
      <div className="flex flex-col gap-1.5">
        <label
          htmlFor="message"
          className="text-[11px] uppercase tracking-[0.18em] text-muted font-medium"
        >
          Mesajınız
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message")}
          className="w-full bg-transparent border-0 border-b border-foreground/20 px-0 py-3 text-base text-foreground placeholder:text-muted/60 focus:outline-none focus:border-foreground transition-colors resize-none"
        />
        {errors.message?.message && (
          <span className="text-[11px] text-red-700/90 mt-0.5">{errors.message.message}</span>
        )}
      </div>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pt-4">
        <p className="text-xs text-muted max-w-md leading-relaxed">
          Bilgileriniz yalnızca size geri dönüş yapmak amacıyla kullanılır,
          üçüncü taraflarla paylaşılmaz.
        </p>
        <button
          type="submit"
          disabled={isSubmitting || submitted}
          className="group inline-flex items-center justify-center gap-3 bg-foreground text-cream-100 hover:bg-charcoal disabled:opacity-70 disabled:cursor-not-allowed px-8 py-4 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300"
        >
          {submitted ? (
            <motion.span
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="flex items-center gap-2"
            >
              <Check className="w-4 h-4" /> Gönderildi
            </motion.span>
          ) : isSubmitting ? (
            <span className="flex items-center gap-2">
              <span className="w-3 h-3 border-2 border-cream-100/40 border-t-cream-100 rounded-full animate-spin" />
              Gönderiliyor
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Mesajı Gönder
              <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
