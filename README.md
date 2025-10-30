# React useRef Hook - Form di Registrazione

## Descrizione
Questa repository contiene un esercizio React progettato per imparare a usare l’hook **useRef**.  
L’applicazione implementa un form di registrazione con validazioni dinamiche per username, password e descrizione, utilizzando riferimenti ai campi del form.

---

## Obiettivi principali
- Comprendere l’utilizzo di `useRef` per accedere direttamente agli elementi DOM nei componenti React.  
- Gestire focus automatico su un input al caricamento del componente.  
- Permettere reset completo del form tramite riferimenti.  
- Creare scroll fluido verso il form usando `scrollIntoView`.  
- Combinare `useRef` con `useState` e `useMemo` per validazioni reattive.

---

## Funzionalità dell’app
1. Form di registrazione con campi:
   - Nome completo
   - Username
   - Password
   - Specializzazione (select)
   - Anni di esperienza
   - Breve descrizione  
2. Validazioni dinamiche:
   - Username: minimo 6 caratteri alfanumerici.
   - Password: minimo 8 caratteri, almeno 1 numero e 1 simbolo.
   - Descrizione: tra 100 e 1000 caratteri.  
3. Pulsante di invio con controllo dei dati compilati correttamente.  
4. Pulsante di reset che azzera tutti i campi usando `useRef` e `useState`.  
5. Pulsante per scrollare verso il form.  

---

## Tecnologie utilizzate
- React
- Hook React: `useState`, `useRef`, `useEffect`, `useMemo`  
- Controllo validazioni in tempo reale  

---

## Scopo della repo
Esercitazione pratica per imparare:
- Quando e come usare `useRef` per accedere e manipolare direttamente il DOM.  
- Gestione efficiente dello stato e delle validazioni dei form in React.  
- Combinazione di hook React per creare un form interattivo e user-friendly.

---

## Setup
1. Clonare la repository
```bash
git clone https://github.com/mendozagianfranco/ex-react-useref-signup.git
```
2. Installare dipendenze
```bash
npm install
```
3. Avviare l’applicazione
```bash
npm run dev
```


