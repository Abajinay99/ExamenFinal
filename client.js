async function obtener() {
    const res = await fetch("http://localhost:3000/animales");
    const data = await res.json();
    console.log("Lista de animales:");
    console.log(data);
  }
  obtener();  