
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function listAllData() {
  const collections = ['posts', 'cases', 'site_settings'];
  for (const colName of collections) {
    console.log(`--- Collection: ${colName} ---`);
    const querySnapshot = await getDocs(collection(db, colName));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${JSON.stringify(doc.data())}`);
    });
  }
}

listAllData();
