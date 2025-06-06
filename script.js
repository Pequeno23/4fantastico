function adicionarTarefa() {
    const input = document.getElementById("novaTarefa");
    const tarefa = input.value.trim();
    if (tarefa === "") return;

    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));

    input.value = "";
    renderizarLista();
}

function removerTarefa(index) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
    renderizarLista();
}

function renderizarLista() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

    tarefas.forEach((tarefa, index) => {
        const li = document.createElement("li");
        li.innerHTML = `${tarefa} <button onclick="removerTarefa(${index})">X</button>`;
        lista.appendChild(li);
    });
}

document.addEventListener("DOMContentLoaded", renderizarLista);