// frontend/src/services/api.js

// ---------- REJESTRACJA ----------
export async function registerUser({ username, email, password }) {
    const res = await fetch("/users/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            username,
            email,
            password_hash: password,  // backend zahashuje
        }),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Registration failed");
    }
    return res.json();
}

// ---------- LOGIN ----------
export async function loginUser({ username, password }) {
    const form = new URLSearchParams();
    form.append("username", username);
    form.append("password", password);

    const res = await fetch("/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: form.toString(),
    });
    if (!res.ok) {
        const err = await res.json();
        throw new Error(err.detail || "Login failed");
    }
    return res.json(); // { access_token, token_type }
}

// ---------- PROFIL ----------
export async function fetchProfile(token) {
    const res = await fetch("/users/me", {
        headers: { Authorization: `Bearer ${token}` },
    });
    if (!res.ok) throw new Error("Could not fetch profile");
    return res.json();
}
