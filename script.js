let leads = JSON.parse(localStorage.getItem("leads")) || [];

function salvar() {
  localStorage.setItem("leads", JSON.stringify(leads));
}

function adicionarLead() {
  const nomeInput = document.getElementById("nomeLead");
  const statusInput = document.getElementById("statusLead");

  if (!nomeInput || !statusInput) return;

  const nome = nomeInput.value.trim();
  const status = statusInput.value;

  if (nome === "") {
    alert("Digite o nome do lead");
    return;
  }

  leads.push({ nome: nome, status: status });
  nomeInput.value = "";

  salvar();
  renderizar();
}

function mudarStatus(index, novoStatus) {
  leads[index].status = novoStatus;
  salvar();
  renderizar();
}

function renderizar() {
  const listaNovo = document.getElementById("lista-novo");
  const listaContato = document.getElementById("lista-contato");
  const listaFechado = document.getElementById("lista-fechado");

  if (!listaNovo || !listaContato || !listaFechado) return;

  listaNovo.innerHTML = "";
  listaContato.innerHTML = "";
  listaFechado.innerHTML = "";

  let contagem = { novo: 0, contato: 0, fechado: 0 };

  leads.forEach((lead, index) => {
    contagem[lead.status]++;

    const div = document.createElement("div");
    div.className = "lead";

    div.innerHTML = `
      <span>${lead.nome}</span>
      <select onchange="mudarStatus(${index}, this.value)">
        <option value="novo" ${lead.status === "novo" ? "selected" : ""}>Novo</option>
        <option value="contato" ${lead.status === "contato" ? "selected" : ""}>Em Contato</option>
        <option value="fechado" ${lead.status === "fechado" ? "selected" : ""}>Fechado</option>
      </select>
    `;

    if (lead.status === "novo") listaNovo.appendChild(div);
    if (lead.status === "contato") listaContato.appendChild(div);
    if (lead.status === "fechado") listaFechado.appendChild(div);
  });

  document.getElementById("total").innerText = leads.length;
  document.getElementById("novos").innerText = contagem.novo;
  document.getElementById("contato").innerText = contagem.contato;
  document.getElementById("fechados").innerText = contagem.fechado;
}

renderizar();

