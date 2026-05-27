const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'une_cle_secrete_ultra_securisee_123!', 
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } 
}));

app.use(cors()); 
app.use(express.json()); 

const PORT = 3000;
const SECRET_KEY = "MA_CLE_SUPER_SECRETE_QUE_PERSONNE_NE_DOIT_SAVOIR";

const usersDB = [
    { 
        email: "formateur@entreprise.fr", 
        name: "Admin Formateur",
        passwordHash: "$2a$10$RzVbF9k5fL7gIOnY5wMyeOBMh37U3.aWjD8HCH22ZHeM0.kG8yYmS" // "Plante2026"
    },
    { 
        email: "stagiaire1@entreprise.fr", 
        name: "Julien Dupuis",
        passwordHash: "$2b$10$TkSBy57TQxVFDi8y/hrbAeLYeAdOLmOb3haDZUcQhduasCp2JEqr6" 
    }
];

// Route de vérification des identifiants
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = usersDB.find(u => u.email === email);
    
    if (!user) {
        return res.status(401).json({ error: "Identifiants incorrects." });
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Identifiants incorrects." });
    }

    // --- CORRECTION ICI : On donne le badge de session pour débloquer le QCM ---
    req.session.isLoggedIn = true;

    const token = jwt.sign(
        { email: user.email, name: user.name }, 
        SECRET_KEY, 
        { expiresIn: '2h' }
    );

    res.json({
        token: token,
        user: { email: user.email, name: user.name }
    });
});

// Route sécurisée pour le QCM (Placée avant le app.listen)
app.get('/qcm.html', (req, res) => {
    if (req.session.isLoggedIn) {
        res.sendFile(__dirname + '/qcm.html');
    } else {
        res.redirect('/index.html'); 
    }
});                 

// Lancement du serveur (Toujours tout à la fin)
app.listen(PORT, () => {
    console.log(`Le serveur de sécurité tourne sur http://localhost:${PORT}`);
});
