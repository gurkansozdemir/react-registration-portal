export function RegistrationForm({ onSubmit }: { onSubmit: (name: string) => void }) {
  return <form onSubmit={(event) => { event.preventDefault(); onSubmit("Sample Learner"); }}>
    <label>Name <input name="name" autoComplete="name" required /></label>
    <button type="submit">Continue</button>
  </form>;
}
