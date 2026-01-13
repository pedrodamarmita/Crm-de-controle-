let leads = JSON.parse(localStorage.getItem("leads")) || [];

function salvar() {
  localStorage.setItem("leads", JSON.stringify(leads));
}

function adicionarLead() {
  const nome = document.getElementById("nomeLead").value;
  const status = document.getElementById("statusLead").value;

  if (!nome) return alert("Digite o nome do lead");

  leads.push({ nome, status });
  document.getElementById("nomeLead").value = "";

  salvar();
  renderizar();
}

function mudarStatus(index, novoStatus) {
  leads[index].status = novoStatus;
  salvar();
  renderizar();
}

function renderizar() {
  const listas = {
    novo: document.getElementById("lista-novo"),
    contato: document.getElementById("lista-contato"),
    fechado: document.getElementById("lista-fechado")
  };

  Object.values(listas).forEach(l => l.innerHTML = "");

  let contagem = { novo: 0, contato: 0, fechado: 0 };

  leads.forEach((lead, index) => {
    contagem[lead.status]++;

    const div = document.createElement("div");
    div.className = "lead";
    div.innerHTML = `
      ${lead.nome}
      <select onchange="mudarStatus(${index}, this.value)">
        <option value="novo" ${lead.status=="novo"?"selected":""}>Novo</option>
        <option value="contato" ${lead.status=="contato"?"selected":""}>Contato</option>
        <option value="fechado" ${lead.status=="fechado"?"selected":""}>Fechado</option>
      </select>
    `;

    listas[lead.status].appendChild(div);
  });

  document.getElementById("total").innerText = leads.length;
  document.getElementById("novos").innerText = contagem.novo;
  document.getElementById("contato").innerText = contagem.contato;
  document.getElementById("fechados").innerText = contagem.fechado;
}

renderizar();
;
