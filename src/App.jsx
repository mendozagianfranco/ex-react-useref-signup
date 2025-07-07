import { useEffect, useMemo, useRef, useState } from 'react';

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/`~";

function App() {
  const form = useRef();
  const fullName = useRef();
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const select = useRef();
  const yearsExperience = useRef();
  const [description, setDescription] = useState('');

  const isUsernameValid = useMemo(() => {
    const charsValid = username.split("").every(char => letters.includes(char.toLowerCase()) || numbers.includes(char));
    return charsValid && username.length >= 6;
  }, [username]);

  const isPasswordValid = useMemo(() => {
    const charsValid = password.split("").some(char => letters.includes(char.toLowerCase()));
    const numbersValid = password.split("").some(char => numbers.includes(char));
    const symbolsValid = password.split("").some(char => symbols.includes(char));
    return charsValid && numbersValid && symbolsValid && password.length >= 8;
  }, [password]);


  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000;
  }, [description]);

  function handleForm(e) {
    e.preventDefault();
    const isCompiled = fullName.current.value.trim() && username.trim() && password.trim() && select.current.value && description.trim();

    const isPositiveNumber = yearsExperience.current.value >= 0;
    const isSelectedSpecialisation = select.current.value !== '';
    console.log(isSelectedSpecialisation);

    if (isCompiled && isPositiveNumber && isSelectedSpecialisation && isUsernameValid && isPasswordValid && isDescriptionValid) {
      console.log(`
        fullname:${fullName.current.value}
        username:${username}
        password:${password}
        specialisation:${select.current.value}
        yearsExperience:${yearsExperience.current.value}
        description: ${description}
        `);
    } else {
      console.log('Non valido');
    }
  }
  function resetForm() {
    fullName.current.value = '';
    setusername('');
    setPassword('');
    select.current.value = '';
    yearsExperience.current.value = '';
    setDescription('');
  }

  function scrollToForm() {
    console.log(form.current.scrollIntoView({ behavior: 'smooth' }));

  }

  useEffect(() => {
    fullName.current.focus();
  }, []);


  return (
    <>
      <form ref={form} onSubmit={handleForm}>
        <p>Nome Completo</p>
        <input type="text" ref={fullName} />
        <p>Username</p>
        <input type="text" value={username} onChange={e => setusername(e.target.value)} />
        {username.trim() && (
          <p style={{ color: isUsernameValid ? 'green' : 'red' }}>
            {isUsernameValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanumerici'}
          </p>
        )}
        <p>Password</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {password.trim() && (
          <p style={{ color: isPasswordValid ? 'green' : 'red' }}>
            {isPasswordValid ? 'Password valido' : 'Deve avere almeno 8 caratteri, 1 numero e 1 simbolo'}
          </p>
        )}
        <p>Specializzazione</p>
        <select ref={select}>
          <option value="">----</option>
          <option value="Full Stack">Full Stack</option>
          <option value="Frontend">Frontend</option>
          <option value="Backend">Backend</option>
        </select>
        <p>Anni di esperienza</p>
        <input type="number" defaultValue={'0'} ref={yearsExperience} />
        <p>Breve descrizione</p>
        <textarea value={description} onChange={e => setDescription(e.target.value)}></textarea>
        {description.trim() && (
          <p style={{ color: isDescriptionValid ? 'green' : 'red' }}>
            {isDescriptionValid ? 'Descrizione valido' : 'Deve avere almeno tra i 100 e 1000 caratteri'}
          </p>
        )}
        <div>
          <button>Invia il form</button>
          <button type='button' onClick={resetForm}>Reset</button>
        </div>
      </form>
      <div style={{ height: '100vh' }}></div>
      <div style={{ position: 'fixed', bottom: 20, right: 20, }} >
        <button onClick={scrollToForm}>🠕</button>
      </div >
    </>
  );
}

export default App;
