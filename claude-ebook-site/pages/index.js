import Link from 'next/link';

export default function Home() {
  return (
    <>
      <h1>Guia Completo do Claude</h1>
      <p style={{fontSize: 18, marginBottom: 32}}>Leitura fácil no celular. Use o menu para acessar os capítulos.</p>
      <h2>Índice</h2>
      <ul style={{fontSize:18, lineHeight:2}}>
        <li><Link href="/01-introducao">Introdução</Link></li>
        <li><Link href="/02-primeiros-passos">Parte 1: Primeiros Passos</Link></li>
        <li><Link href="/03-visao-detalhada">Parte 2: Visão Detalhada dos Recursos</Link></li>
        <li><Link href="/04-aplicacoes">Parte 3: Aplicações Práticas</Link></li>
        <li><Link href="/05-implementacao">Parte 4: Implementação Avançada</Link></li>
        <li><Link href="/06-conclusao">Conclusão</Link></li>
      </ul>
      <footer style={{marginTop:32, fontSize:12, color:'#888'}}>© {new Date().getFullYear()} Guia Claude – Adaptado para web</footer>
    </>
  );
}
