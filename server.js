const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const session = require('express-session');

const app = express();
app.use(session({
    secret: 'une_cle_secrete_ultra_securisee_123!', // Change cela par ce que tu veux
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Reste à false tant qu'on est sur localhost (sans HTTPS)
}));
app.use(cors()); 
app.use(express.json()); 

const PORT = 3000;
const SECRET_KEY = "MA_CLE_SUPER_SECRETE_QUE_PERSONNE_NE_DOIT_SAVOIR";

// C'est ICI qu'on met les mots de passe générés (entre guillemets)
const usersDB = [
    { 
        email: "formateur@entreprise.fr", 
        name: "Admin Formateur",
        passwordHash: "$2a$10$RzVbF9k5fL7gIOnY5wMyeOBMh37U3.aWjD8HCH22ZHeM0.kG8yYmS" // "Plante2026"
    },
    { 
        email: "stagiaire1@entreprise.fr", 
        name: "Julien Dupuis",
        // J'ai mis ici la clé que tu as générée dans ta console :
        passwordHash: "$2b$10$TkSBy57TQxVFDi8y/hrbAeLYeAdOLmOb3haDZUcQhduasCp2JEqr6" 
    }
];

// Route de vérification des identifiants (NE PAS MODIFIER CETTE PARTIE)
app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    const user = usersDB.find(u => u.email === email);
    
    if (!user) {
        return res.status(401).json({ error: "Identifiants incorrects." });
    }

    // Le mot "user.passwordHash" cible automatiquement le bon mot de passe crypté de l'utilisateur au-dessus
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
        return res.status(401).json({ error: "Identifiants incorrects." });
    }

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

app.listen(PORT, () => {
    console.log(`Le serveur de sécurité tourne sur http://localhost:${PORT}`);
});
