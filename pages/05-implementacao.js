import Link from 'next/link';

export default function Implementacao() {
  return (
    <>
      <Link href="/" style={{fontSize:14, color:'#3874ff'}}>&larr; Voltar ao índice</Link>
      <h1>Parte 4: Implementação avançada e melhores práticas</h1>

      <h2>Checklist para adoção do Claude na empresa</h2>
      <ol>
        <li>Defina objetivos claros para o uso da IA</li>
        <li>Mapeie fluxos e processos críticos</li>
        <li>Designe responsáveis e papéis de uso do Claude</li>
        <li>Prepare treinamentos rápidos para times-chave</li>
        <li>Implemente projetos-piloto e valide resultados</li>
        <li>Estabeleça feedback contínuo para ajustes</li>
      </ol>

      <h2>Boas práticas para garantir resultados</h2>
      <ul>
        <li>Mantenha documentação de prompts e aprendizados</li>
        <li>Reavalie periodicamente os fluxos otimizados</li>
        <li>Garanta alinhamento do Claude com a cultura e as diretrizes da marca</li>
        <li>Estabeleça indicadores claros de sucesso</li>
        <li>Documente e compartilhe cases de sucesso internamente</li>
      </ul>

      <h2>Erros comuns ao implementar IA</h2>
      <ul>
        <li>Querer automatizar tudo sem considerar impacto humano</li>
        <li>Não treinar times para o uso prático da IA</li>
        <li>Deixar de revisar e ajustar os fluxos após feedback real</li>
        <li>Subestimar a importância do contexto dos dados</li>
        <li>Ignorar preocupações éticas ou de segurança</li>
      </ul>

      <p>Lembre-se: IA é ferramenta estratégica, não mágica. Quanto melhor o contexto, os dados e o engajamento das pessoas, mais valor a IA entrega!</p>
    </>
  );
}
