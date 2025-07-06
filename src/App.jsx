import { useState } from 'react';

function App() {
  const [fullName, setFullName] = useState('');
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [select, setSelect] = useState('');
  const [yearsExperience, setYearsExperience] = useState(0);
  const [description, setDescription] = useState('');

  function handleForm(e) {
    e.preventDefault();
    const isCompiled = fullName.trim() && username.trim() && password.trim() && select && description.trim();
    const isPositiveNumber = yearsExperience >= 0;
    const isSelectedSpecialisation = select !== '';

    if (isCompiled && isPositiveNumber && isSelectedSpecialisation) {
      console.log(`
        fullname:${fullName}
        username:${username}
        password:${password}
        specialisation:${select}
        yearsExperience:${yearsExperience}
        description: ${description}
        `);
    } else {
      console.log('Non valido');

    }
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <p>Nome Completo</p>
        <input type="text" value={fullName} onChange={e => setFullName(e.target.value)} />
        <p>Username</p>
        <input type="text" value={username} onChange={e => setusername(e.target.value)} />
        <p>Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <p>Specializzazione</p>
        <select value={select} onChange={e => setSelect(e.target.value)}>
          <option value="">----</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
        <p>Anni di esperienza</p>
        <input type="number" value={yearsExperience} onChange={e => setYearsExperience(e.target.value)} />
        <p>Breve descrizione</p>
        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        <div>
          <button>Invia il form</button>
        </div>
      </form>
    </>
  );
}

export default App;
