import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext/useAuthContext";
import { Navigate, useNavigate } from "react-router-dom";

export const Login = () => {
    const [userForm, setUseForm] = useState({name: "", password: ""});
    const { user, login } = useAuthContext();
    const navigate = useNavigate();

    if (user) {
        return <Navigate to="/admin/alta-productos" />;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUseForm({...userForm, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const success = login(userForm.name, userForm.password);

        if (success) {
            navigate("/admin/alta-productos");
        } else {
            alert("Credenciales incorrectas");
            setUseForm({name: "", password: ""});
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Iniciar sesión</h2>
            <div>
                <label>Usuario:</label>
                <input
                    type="text"
                    name="name"
                    value={userForm.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Contraseña:</label>
                <input
                    type="password"
                    name="password"
                    value={userForm.password}
                    onChange={handleChange}
                />
            </div>      
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};