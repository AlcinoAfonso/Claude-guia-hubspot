import Link from 'next/link';

export default function Conclusao() {
  return (
    <>
      <Link href="/" style={{fontSize:14, color:'#3874ff'}}>&larr; Voltar ao índice</Link>
      <h1>Conclusão</h1>

      <p>O Claude representa uma nova geração de IA colaborativa, tornando-se aliado estratégico em empresas de todos os portes. Quando implementado com visão, método e foco no valor real, a IA acelera o crescimento e libera o potencial criativo das equipes.</p>
      <p>O segredo é começar pequeno, aprender rápido, ajustar constantemente e ampliar o uso conforme os resultados aparecem. A jornada de evolução nunca termina — com o Claude, cada ciclo traz ganhos reais de produtividade e inovação.</p>
      <p>
        Que este guia sirva de ponto de partida prático para você, sua equipe e seu negócio. O futuro do trabalho já começou — e é mais inteligente, mais humano e mais colaborativo.
      </p>
      <p style={{marginTop:32, fontSize:12, color:'#888'}}>
        Fim do eBook.<br />
        © {new Date().getFullYear()} Adaptado para web/mobile por Unico Digital.
      </p>
    </>
  );
}
