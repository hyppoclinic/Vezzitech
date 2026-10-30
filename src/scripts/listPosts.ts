
import { db } from '../lib/firebase';
import { collection, getDocs } from 'firebase/firestore';

async function listPosts() {
  const querySnapshot = await getDocs(collection(db, 'posts'));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data().title}`);
  });
}

listPosts();
