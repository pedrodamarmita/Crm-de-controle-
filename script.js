script.js
// ==========================
// ALTERE SOMENTE ESTES NÚMEROS
// ==========================
const TOTAL_LEADS = 120;
const LEADS_FECHADOS = 34;
// ==========================

const leadsAbertos = TOTAL_LEADS - LEADS_FECHADOS;
const taxaConversao = ((LEADS_FECHADOS / TOTAL_LEADS) * 100).toFixed(2);

document.getElementById("totalLeads").innerText = TOTAL_LEADS;
document.getElementById("leadsFechados").innerText = LEADS_FECHADOS;
document.getElementById("leadsAbertos").innerText = leadsAbertos;
document.getElementById("taxaConversao").innerText = taxaConversao + "%";
