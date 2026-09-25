"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

type Inputs = {
  name: string;
  email: string;
  message: string;
};

// Componente para evitar erros de hidratação e garantir que o formulário só renderize no cliente
export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null,
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xovwnrng";
      const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus("success");
        reset();
      } else {
        const responseData = await response.json();
        if (responseData.errors) {
          console.error("Erros do Formspree:", responseData.errors);
        }
        throw new Error("Falha no envio para o Formspree");
      }
    } catch (error) {
      console.error("Erro ao enviar formulário:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full" noValidate>
      {/* Campos e botão espaçados entre si; a região de status fica fora do
          space-y (vazia, ela somava margem abaixo do botão) */}
      <div className="space-y-5">
        <div>
          <label
            htmlFor="name"
            className="text-text-main mb-2 block text-left text-sm font-medium"
          >
            Nome
          </label>
          <input
            id="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "name-error" : undefined}
            type="text"
            {...register("name", { required: "O nome é obrigatório" })}
            className="bg-background/60 text-text-main focus:border-primary focus:ring-primary/30 w-full rounded-lg border border-black/10 px-4 py-3 transition-colors outline-none focus:ring-4 aria-invalid:border-red-600 dark:border-white/10 dark:aria-invalid:border-red-400"
          />
          {errors.name && (
            <p
              id="name-error"
              className="mt-1 text-left text-sm text-red-600 dark:text-red-400"
            >
              {errors.name.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-text-main mb-2 block text-left text-sm font-medium"
          >
            E-mail
          </label>
          <input
            id="email"
            aria-invalid={errors.email ? true : undefined}
            aria-describedby={errors.email ? "email-error" : undefined}
            type="email"
            {...register("email", {
              required: "O e-mail é obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "E-mail inválido",
              },
            })}
            className="bg-background/60 text-text-main focus:border-primary focus:ring-primary/30 w-full rounded-lg border border-black/10 px-4 py-3 transition-colors outline-none focus:ring-4 aria-invalid:border-red-600 dark:border-white/10 dark:aria-invalid:border-red-400"
          />
          {errors.email && (
            <p
              id="email-error"
              className="mt-1 text-left text-sm text-red-600 dark:text-red-400"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="text-text-main mb-2 block text-left text-sm font-medium"
          >
            Mensagem
          </label>
          <textarea
            id="message"
            aria-invalid={errors.message ? true : undefined}
            aria-describedby={errors.message ? "message-error" : undefined}
            rows={5}
            {...register("message", { required: "A mensagem é obrigatória" })}
            className="bg-background/60 text-text-main focus:border-primary focus:ring-primary/30 w-full rounded-lg border border-black/10 px-4 py-3 transition-colors outline-none focus:ring-4 aria-invalid:border-red-600 dark:border-white/10 dark:aria-invalid:border-red-400"
          />
          {errors.message && (
            <p
              id="message-error"
              className="mt-1 text-left text-sm text-red-600 dark:text-red-400"
            >
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary-strong hover:bg-primary-deep w-full rounded-lg px-6 py-3 font-bold text-white transition-colors disabled:cursor-not-allowed disabled:opacity-50"
        >
          {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
        </button>
      </div>

      {/* Região viva: leitores de tela anunciam o resultado do envio */}
      <div role="status" aria-live="polite">
        {submitStatus === "success" && (
          <p className="mt-4 rounded-lg bg-green-600/10 px-4 py-3 text-center text-green-700 dark:text-green-400">
            Mensagem enviada com sucesso! Obrigado.
          </p>
        )}
        {submitStatus === "error" && (
          <p className="mt-4 rounded-lg bg-red-600/10 px-4 py-3 text-center text-red-700 dark:text-red-400">
            Ocorreu um erro. Tente novamente mais tarde.
          </p>
        )}
      </div>
    </form>
  );
}
