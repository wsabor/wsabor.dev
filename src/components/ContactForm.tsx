// src/components/ContactForm.tsx
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
      const response = await fetch("https://formspree.io/f/xovwnrng", {
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full max-w-lg space-y-6"
      noValidate
    >
      <div>
        <label
          htmlFor="name"
          className="mb-2 block text-left text-sm font-medium text-text-muted"
        >
          Nome
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "O nome é obrigatório" })}
          className="w-full rounded-lg border border-black/10 bg-surface px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10"
        />
        {errors.name && (
          <p className="mt-1 text-left text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="mb-2 block text-left text-sm font-medium text-text-muted"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            /* ... */
          })}
          className="w-full rounded-lg border border-black/10 bg-surface px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10"
        />
        {errors.email && (
          <p className="mt-1 text-left text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="mb-2 block text-left text-sm font-medium text-text-muted"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "A mensagem é obrigatória" })}
          className="w-full rounded-lg border border-black/10 bg-surface px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary dark:border-white/10"
        />
        {errors.message && (
          <p className="mt-1 text-left text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-lg bg-primary px-6 py-3 font-bold text-white transition-colors hover:bg-primary-light disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {submitStatus === "success" && (
        <p className="text-center text-green-500">
          Mensagem enviada com sucesso! Obrigado.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-center text-red-500">
          Ocorreu um erro. Tente novamente mais tarde.
        </p>
      )}
    </form>
  );
}
