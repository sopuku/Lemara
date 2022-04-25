let data = [];
let total = 0;
let unused = [];
let used = [];
let array = [];

function combinations(set) {
  var k, i, combs, k_combs;
  combs = [];
  for (k = 1; k <= set.length; k++) {
    k_combs = k_combinations(set, k);
    for (i = 0; i < k_combs.length; i++) {
      combs.push(k_combs[i]);
    }
  }
  return combs;
}

function k_combinations(set, k) {
  var i, j, combs, head, tailcombs;
  if (k > set.length || k <= 0) {
    return [];
  }
  if (k == set.length) {
    return [set];
  }
  if (k == 1) {
    combs = [];
    for (i = 0; i < set.length; i++) {
      combs.push([set[i]]);
    }
    return combs;
  }
  combs = [];
  for (i = 0; i < set.length - k + 1; i++) {
    head = set.slice(i, i + 1);
    tailcombs = k_combinations(set.slice(i + 1), k - 1);
    for (j = 0; j < tailcombs.length; j++) {
      combs.push(head.concat(tailcombs[j]));
    }
  }
  return combs;
}

function calculate() {
  const calculated = combinations(data);
  clear();
  for (const i of calculated) {
    let sum = 0;
    for (let x = 0; x < i.length; x++) {
      sum = Number(i[x]) + Number(sum);
    }
    if (sum === Number(total)) {
      const atrinktas = document.createElement("li");
      atrinktas.append(document.createTextNode(i));
      atrinktas.className = "atrinktiDuomenys";
      const kur1 = document.querySelector(".listas-atrinkta");
      kur1.appendChild(atrinktas);
      used.push(i);
    } else {
      unused.push(i);
    }
  }
  for (let i of used) {
    array.push(...i);
  }
  for (let i of unused) {
    if (i[1]) {
      let z = unused.indexOf(i);
      unused.splice(z, unused.length);
    }
  }
  for (let i = unused.length - 1; i >= 0; i--) {
    if (array.includes(unused[i][0])) {
      unused.splice(i, 1);
    }
  }
  for (let i of unused) {
    const nepanaudotas = document.createElement("li");
    nepanaudotas.append(document.createTextNode(i));
    nepanaudotas.className = "nepanaudotiDuomenys";
    const kur2 = document.querySelector(".listas-nepanaudota");
    kur2.appendChild(nepanaudotas);
  }
}

function inputNumbers() {
  const ivestiDuomenys = document.querySelector(".ivesties_langelis").value;
  document.querySelector(".ivesties_langelis").value = "";
  document.querySelector(".ivesties_langelis").focus();
  data.push(ivestiDuomenys);
  const ivestas = document.createElement("li");
  ivestas.append(document.createTextNode(ivestiDuomenys));
  ivestas.className = "ivestiDuomenys";
  const kur = document.querySelector(".listas-ivesta");
  kur.appendChild(ivestas);
}

function inputTotal() {
  total = document.querySelector(".ivesties_langelis").value;
  document.querySelector(".bendra-israsas").textContent = total;
  document.querySelector(".ivesties_langelis").value = "";
}

function clearAll() {
  clear();
  data = [];
  total = 0;
  const removeElement = document.querySelectorAll(".ivestiDuomenys");
  removeElement.forEach((x) => x.remove());
  document.querySelector(".bendra-israsas").textContent = total;
}

function clear() {
  unused = [];
  used = [];
  array = [];
  const removeElement2 = document.querySelectorAll(".nepanaudotiDuomenys");
  removeElement2.forEach((x) => x.remove());
  const removeElement3 = document.querySelectorAll(".atrinktiDuomenys");
  removeElement3.forEach((x) => x.remove());
}

document.querySelector(".inputNumbers").addEventListener("click", inputNumbers);
document.querySelector(".inputTotal").addEventListener("click", inputTotal);
document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".clear").addEventListener("click", clearAll);
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") inputNumbers();
});
