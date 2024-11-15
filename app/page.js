export default function Home() {
  return (
    <div>
      <h2>Environment Variables:</h2>
      <p>MY_ENV_VARIABLE: {process.env.MY_ENV_VARIABLE}</p>
      <p>MY_ENV_VAR: {process.env.MY_ENV_VAR}</p>
    </div>
  );
}
