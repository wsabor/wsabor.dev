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
    null
  );

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://formspree.io/f/xovwnrng", {
        // <-- LEMBRE-SE DE SUBSTITUIR
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
      {/* O resto do seu formulário (inputs, labels, etc.) permanece exatamente o mesmo */}
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-text-muted text-left mb-2"
        >
          Nome
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "O nome é obrigatório" })}
          className="w-full bg-surface border border-neutral-700 rounded-lg px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-text-muted text-left mb-2"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "O e-mail é obrigatório",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de e-mail inválido",
            },
          })}
          className="w-full bg-surface border border-neutral-700 rounded-lg px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font--medium text-text-muted text-left mb-2"
        >
          Mensagem
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", { required: "A mensagem é obrigatória" })}
          className="w-full bg-surface border border-neutral-700 rounded-lg px-4 py-2 text-text-main focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary-light text-white font-bold py-3 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
      </button>

      {submitStatus === "success" && (
        <p className="text-green-500 text-center">
          Mensagem enviada com sucesso! Obrigado.
        </p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-500 text-center">
          Ocorreu um erro. Tente novamente mais tarde.
        </p>
      )}
    </form>
  );
}
