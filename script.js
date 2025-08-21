// Sample data for the application
const sampleMemories = [
   { id: 1, author: "Marie Dupont", text: "Notre voyage à la montagne...", date: "2023-02-15" }
   // ... ton tableau complet de souvenirs
];

// DOM Elements
const authPage = document.getElementById('auth-page');
const invitationPage = document.getElementById('invitation-page');
const homepage = document.getElementById('homepage');
// ... (tout ton JS existant)

// Initialise l’app quand le DOM est prêt
document.addEventListener('DOMContentLoaded', initApp);
