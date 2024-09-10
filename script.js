// Mendapatkan data dari file JSON
async function getData() {
  const response = await fetch('data.json');
  const data = await response.json();
  return data;
}

// Menampilkan daftar teman di elemen dengan id "friend_list"
async function friendListsElement() {
  const friendLists = document.getElementById("friend_list");
  const data = await getData();
  
  const lists = `
    ${data.map(i => `
      <li>
        <figure class="card">
          <div class="card_header">
            <div class="card_image">
              <img src="${i.fotoselfie}" alt="${i.nama}" width="100%">
            </div>
            <div class="card_description">
              <span>${i.nama}</span>
              <span>${parseInt(i.nim)}</span>
            </div>
          </div>
          <figcaption class="card_content">
            <span>TTL : ${i.ttl}</span>
            <span>Alamat : ${i.alamat}</span>
            <span>NoHP : ${i.no}</span>
          </figcaption>
        </figure>
      </li>
    `).join("")}
  `;

  friendLists.innerHTML = lists;
}

// Memanggil fungsi untuk menampilkan daftar teman setelah DOM siap
document.addEventListener("DOMContentLoaded", friendListsElement);
