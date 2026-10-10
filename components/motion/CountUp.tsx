"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

type CountUpProps = {
  /** Número real, que é onde a contagem para */
  valor: number;
  /** Duração da contagem (s) */
  duracao?: number;
  className?: string;
};

const formatar = (n: number) => Math.round(n).toLocaleString("pt-BR");

/**
 * Número que sobe de 0 até o valor real quando entra na tela, devagar no
 * fim, e fica parado no valor real.
 *
 * O HTML do servidor já sai com o valor real: o Google, as IAs e quem está
 * sem JavaScript leem o número certo. Só no navegador ele volta a 0 e conta
 * — como a seção fica bem abaixo da dobra, essa troca nunca aparece. Com
 * "reduzir movimento" ligado no aparelho, não anima.
 */
export function CountUp({ valor, duracao = 4, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();
  const visivel = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (reduce || !ref.current) return;
    if (!visivel) {
      ref.current.textContent = "0";
      return;
    }
    const el = ref.current;
    const controle = animate(0, valor, {
      duration: duracao,
      ease: [0.33, 1, 0.68, 1],
      onUpdate: (v) => {
        el.textContent = formatar(v);
      },
    });
    return () => controle.stop();
  }, [visivel, reduce, valor, duracao]);

  return (
    <span ref={ref} className={className}>
      {formatar(valor)}
    </span>
  );
}
