export default function MyApp({ Component, pageProps }) {
  return (
    <main style={{
      fontFamily: 'sans-serif',
      maxWidth: 800,
      margin: '0 auto',
      padding: 24,
      background: '#fff',
      minHeight: '100vh'
    }}>
      <Component {...pageProps} />
    </main>
  );
}
