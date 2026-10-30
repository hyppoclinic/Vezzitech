
import { db } from '../lib/firebase';
import { collection, getDocs, deleteDoc, doc, query, where } from 'firebase/firestore';

async function removeBoiNaBrasa() {
  const q = query(collection(db, 'posts'), where('title', '==', 'Boi na Brasa')); // Assuming the title
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (document) => {
    console.log(`Deleting: ${document.id}`);
    await deleteDoc(doc(db, 'posts', document.id));
  });
}

removeBoiNaBrasa();
