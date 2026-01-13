script.js
let totalLeads = localStorage.getItem("totalLeads") || 0;
let leadsFechados = localStorage.getItem("leadsFechados") || 0;

function atualizarTela() {
  totalLeads = Number(totalLeads);
  leadsFechados = Number(leadsFechados);

  const abertos = totalLeads - leadsFechados;
  const conversao = totalLeads > 0 ? ((leadsFechados / totalLeads) * 100).toFixed(2) : 0;

  document.getElementById("totalLeads").innerText = totalLeads;
  document.getElementById("leadsFechados").innerText = leadsFechados;
  document.getElementById("leadsAbertos").innerText = abertos;
  document.getElementById("taxaConversao").innerText = conversao + "%";

  desenharGrafico(leadsFechados, abertos);
}

function salvarDados() {
  totalLeads = document.getElementById("totalLeadsInput").value;
  leadsFechados = document.getElementById("leadsFechadosInput").value;

  localStorage.setItem("totalLeads", totalLeads);
  localStorage.setItem("leadsFechados", leadsFechados);

  atualizarTela();
}

let chart;
function desenharGrafico(fechados, abertos) {
  const ctx = document.getElementById("grafico");

  if (chart) chart.destroy();

  chart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Fechados', 'Em Aberto'],
      datasets: [{
        data: [fechados, abertos]
      }]
    }
  });
}

atualizarTela();
