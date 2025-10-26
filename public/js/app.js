import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } 
from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// 🧩 Your Firebase Config (replace this)
const firebaseConfig = {
  apiKey: "AIzaSyBTKS7Ayu9i-HllsBtvBuBVGYiy9xSll0U",
  authDomain: "portfolio8905.firebaseapp.com",
  projectId: "portfolio8905",
  storageBucket: "portfolio8905.firebasestorage.app",
  messagingSenderId: "1094242718535",
  appId: "1:1094242718535:web:637f0e64de92945916f262",
  measurementId: "G-JGRX65NHED"
};

// 🔥 Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🌱 References
const form = document.getElementById("portfolioForm");
const listContainer = document.getElementById("portfolioList");
const resetBtn = document.getElementById("resetBtn");
const collectionRef = collection(db, "portfolio");

// 🧾 Fetch and render data
async function loadData() {
  listContainer.innerHTML = "";
  const querySnapshot = await getDocs(collectionRef);
  querySnapshot.forEach((docSnap) => {
    const data = docSnap.data();
    const id = docSnap.id;

    const item = document.createElement("div");
    item.className = "p-4 bg-gray-50 rounded border flex justify-between items-center";
    item.innerHTML = `
      <div>
        <h2 class="font-semibold">${data.title}</h2>
        <p>${data.description}</p>
        <img src="${data.image}" class="w-32 mt-2 rounded" />
      </div>
      <div class="space-x-2">
        <button class="bg-yellow-500 text-white px-3 py-1 rounded" onclick="editItem('${id}', '${data.title}', '${data.description}', '${data.image}')">Edit</button>
        <button class="bg-red-500 text-white px-3 py-1 rounded" onclick="deleteItem('${id}')">Delete</button>
      </div>
    `;
    listContainer.appendChild(item);
  });
}

// 🧩 Add or Update
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = form.title.value;
  const description = form.description.value;
  const image = form.image.value;
  const docId = form.docId.value;

  if (docId) {
    const docRef = doc(db, "portfolio", docId);
    await updateDoc(docRef, { title, description, image });
    alert("✅ Updated successfully!");
  } else {
    await addDoc(collectionRef, { title, description, image });
    alert("✅ Added successfully!");
  }
  form.reset();
  form.docId.value = "";
  loadData();
});

// 🗑 Delete
window.deleteItem = async (id) => {
  await deleteDoc(doc(db, "portfolio", id));
  alert("🗑 Deleted successfully!");
  loadData();
};

// ✏️ Edit
window.editItem = (id, title, description, image) => {
  form.docId.value = id;
  form.title.value = title;
  form.description.value = description;
  form.image.value = image;
};

// 🔁 Reset
resetBtn.addEventListener("click", () => form.reset());

// 🧠 Load initial data
loadData();