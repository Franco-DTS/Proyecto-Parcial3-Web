import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Alert, Button, Container, Grid, TextField, Typography } from "@mui/material";
import {auth} from '../firebase.ts'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false)
  const history = useHistory();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        const user = userCredential.user
        history.push('/ventas');
    })
    .catch((error) => {
        setError(true)
    });

    // Realiza la validación de los campos aquí
    if (email && password) {
      // Simulación de inicio de sesión exitoso
      // Guarda el estado de sesión (por ejemplo, utilizando un contexto de React)
      // Redirige al módulo de ventas
      
    } else {
      // Muestra mensajes de error si los campos están vacíos o no cumplen con los requisitos de validación
      console.log('Error: Los campos están vacíos o no son válidos.');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Iniciar sesión</button>
        {error && <Alert severity="error">Email o Password incorrectos</Alert>}
      </form>
    </div>
  );
};

export default Login;